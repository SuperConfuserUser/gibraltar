import * as paper from 'paper';
import { EntityLabelComponent } from './entity-label';
import { VmData } from './vm';
import { VmAndVnicListComponent } from './vm-and-vnic-list';
import { VAPP_BACKGROUND_COLOR } from '../constants/colors';
import { CONNECTOR_SIZE, VIEW_BOTTOM_PADDING, DEFAULT_SCROLLBAR_THICKNESS, VAPP_NETWORK_RIGHT_MARGIN, VAPP_PADDING }
  from '../constants/dimensions';
import { MarginComponent } from './margin';
import { VappNetworkData } from './vapp-network.component';
import { VappNetworkListComponent } from './vapp-network-list';
import { ScrollbarComponent } from './scrollbar';
import { Scroll } from '@angular/router';

const MARGIN_RIGHT = 30;
const BACKGROUND_RADIUS = 5;

export interface VappData {
  uuid: string;
  name: string;
  vapp_networks: VappNetworkData[];
  vms: VmData[];
}

/**
 * Virtual Application Visual Component.
 */
export class VappComponent extends paper.Group {

  private label: EntityLabelComponent;
  private _background: paper.Path.Rectangle;
  private _margin: MarginComponent;
  private vms: VmAndVnicListComponent;
  private _vappNetworks: VappNetworkListComponent;
  private divisionPositionY: number;
  private scrollbar: ScrollbarComponent;
  private _hovering: boolean = false;

  /**
   * Creates a new VappComponent instance.
   *
   * @param _vapp the vapp data
   * @param _point the location that the vm should be rendered at
   * @param visible whether the component is immediate visible (default is false because typically the component is
   * rendered with a creation animation
   */
  constructor(private _vapp: VappData, private _point: paper.Point = new paper.Point(0, 0)) {
    super();
    this.applyMatrix = false;
    this.pivot = new paper.Point(0, 0);
    this.position = _point;
    let backgroundOffsetX = 0;
    let backgroundOffsetY = 0;

    const vappNetworkCount = this._vapp.vapp_networks.length;
    const vmCount = this._vapp.vms.length;

    // start VappNetworks - add a point for position.x data and an edge label if it's nat-routed
    if (vappNetworkCount) {
      this._vappNetworks = new VappNetworkListComponent(
        this._vapp.vapp_networks,
        new paper.Point(VAPP_PADDING + CONNECTOR_SIZE / 2, 0));
      this.addChild(this._vappNetworks);
    }

    // vapp label
    const labelPositionX = vappNetworkCount || vmCount
      ? Math.max(1, vappNetworkCount) * VAPP_NETWORK_RIGHT_MARGIN + VAPP_PADDING
      : VAPP_PADDING;
    this.label = new EntityLabelComponent(
      this._vapp.name, 'vapp',
      new paper.Point(labelPositionX, VAPP_PADDING));
    this.label.getTextComponent().fontWeight = 'bold';
    this.addChild(this.label);

    // calculate division position for header and vms list
    const headerBase = this.globalToLocal(this.bounds.bottomLeft).y;
    const headerBasePadding = headerBase > this.label.bounds.bottom ? 5 : 10;
    this.divisionPositionY = headerBase + headerBasePadding;
    // lowest position for vApp background
    const maxBottom = this.globalToLocal(paper.view.bounds.bottomLeft).y - VIEW_BOTTOM_PADDING;

    // Vms and Vnics
    this.vms = new VmAndVnicListComponent(
      this._vapp.vms, this._vappNetworks,
      vappNetworkCount,
      new paper.Point(VAPP_PADDING + 1, this.divisionPositionY));
    this.addChild(this.vms);
    let vmAndVnicListScrollEnabled = this.vms.bounds.bottom > maxBottom;

    // end VappNetworks - draw the top external segment and internal segment based on matching vnic position
    if (vappNetworkCount) {
      this._vappNetworks.setTopAndBottomSegments(this.vms.maxVnicPointByNetworkName);
      backgroundOffsetX = VAPP_PADDING - this._vappNetworks.bounds.left;
      backgroundOffsetY = -this._vappNetworks.bounds.top + VAPP_PADDING;
    }

    // background - based on bounds of all current items and placed beneath everything
    const content = this.bounds;
    this._background = new paper.Path.Rectangle({
      size: new paper.Size(
        content.width + VAPP_PADDING * 2 - backgroundOffsetX,
        vmAndVnicListScrollEnabled ? maxBottom : content.height + VAPP_PADDING * 2 - backgroundOffsetY),
      point: new paper.Point(0, 0),
      radius: BACKGROUND_RADIUS,
      fillColor: VAPP_BACKGROUND_COLOR
    });
    this.insertChild(0, this._background);

    if (vmAndVnicListScrollEnabled) {
      this.clipAndScrollVmList();
    }

    this._margin = new MarginComponent(this._background, 0, MARGIN_RIGHT, 0, 0);
    this.insertChild(0, this._margin);

    // NEW FOR SCROLLBAR VISIBILITY
    // TODO: add scroll listener in a better spot. it's in parent view for now. could create a canvas native event
    //  observable service?
    if (this.scrollbar) {
      this.onMouseEnter = () => {
        this._hovering = true;
        if (!ScrollbarComponent.anyIsDragging) {
          this.scrollbar.visible = true;
          this.scrollbar.activateDefaultTool();
        }
      };

      this.onMouseLeave = () => {
        if (!ScrollbarComponent.anyIsDragging) {
          this._hovering = false;
          this.scrollbar.visible = false;
          // TODO: less kludgey way of activating default tool. it's the last one created in the demo, but is a very
          //  temp fix. more tools can be added in the future, so this index won't always be correct
          paper.tools[paper.tools.length - 1].activate();
        }
      };
    }
  }

  get data(): VappData {
    return this._vapp;
  }

  get hovering(): boolean {
    return this._hovering;
  }

  setScrollListening(event: WheelEvent) {
    if (this.scrollbar) {
      this.scrollbar.onScroll(event);
    }
  }

  get margin(): MarginComponent {
    return this._margin;
  }

  private clipAndScrollVmList() {
    // create drop shadow
    const dropShadow = new paper.Path.Rectangle({
      point: new paper.Point(0, 0),
      size: new paper.Size(this.bounds.width, this.divisionPositionY),
      opacity: 0,
      style: {
        fillColor: VAPP_BACKGROUND_COLOR,
        shadowColor: new paper.Color(0, 0, 0, 0.41),
        shadowBlur: 10,
        shadowOffset: new paper.Point(0, 2)
      }
    });

    // clipmask
    const vmListClipMask = new paper.Path.Rectangle(
      new paper.Point(0, this.divisionPositionY),
      new paper.Point(this._background.bounds.bottomRight));

    // set up scrollable content and clone last segments of network paths
    const vappNetworkClone = this._vappNetworks.cloneVmListSegments(this.divisionPositionY);
    const scrollableContent = new paper.Group([vappNetworkClone, this.vms]);
    scrollableContent.applyMatrix = false;

    // scrollbar
    const scrollbarPadding = 5;
    this.scrollbar = new ScrollbarComponent({
      content: scrollableContent,
      containerBounds: vmListClipMask.bounds,
      contentOffsetEnd: VAPP_PADDING / 2
    },
      new paper.Point(vmListClipMask.bounds.right - DEFAULT_SCROLLBAR_THICKNESS - scrollbarPadding,
        this.divisionPositionY),
      vmListClipMask.bounds.height - VAPP_PADDING,
      'vertical',
      this
    );
    this.scrollbar.setCustomEffects({
      setActive: function() {
        dropShadow.opacity = 1;
      },
      setNormal: function() {
        (dropShadow as any).tweenTo({
          opacity: 0
        }, 150);
      }
    });

    // clip everything
    const clippedVmList = new paper.Group([vmListClipMask, scrollableContent, this.scrollbar, dropShadow]);
    clippedVmList.clipped = true;
    this.addChild(clippedVmList);
  }
}
