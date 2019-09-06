import * as paper from 'paper';
import { VmData, VmComponent } from './vm';
import { VnicData, VnicComponent } from './vnic';
import { ConnectorComponent } from './connector';
import { CONNECTOR_SIZE, CONNECTOR_RIGHT_PADDING, VM_ICON_SIZE, DEFAULT_STROKE_WIDTH } from '../constants/dimensions';
import { VappNetworkListComponent } from './vapp-network-list';

const LABEL_PADDING_BOTTOM = 10;
const LABEL_HEIGHT = 30;
const PADDING_TOP = 10;
const VAPP_NETWORK_PADDING_RIGHT = 4.5;

/**
 * Vm List Visual Component.
 */
export class VmAndVnicListComponent extends paper.Group {

  private _maxVnicPointByNetworkName: { [name: string]: paper.Point } = {};

  constructor(private _vms: Array<VmData>,
              // use an intermediary instead with positioning data built in. less coupling
              private _vappNetworkPaths: VappNetworkListComponent,
              // FIXME: do we need to pass this in? or can just use vappNetworkList??
              private vappNetworkCount: number = 0,
              private _point: paper.Point = new paper.Point(0, 0)
              ) {
    super();
    const self = this;
    this.applyMatrix = false;
    this.pivot = new paper.Point(0, 0);
    this.position = _point;

    // START NETWORK PATHS HERE
    const lastNetworkPositionX = (this.vappNetworkCount && (this.vappNetworkCount - 1) * 20 + CONNECTOR_SIZE / 2 - 1)
      || 0;
    const vappNetworkPathsByName = this._vappNetworkPaths && this._vappNetworkPaths.networksByName;

    // DRAW VMS with VNICS
    this._vms.forEach((vmData, i) => {
      const vnics = vmData.vnics;
      const offsetY = LABEL_HEIGHT / 2 + PADDING_TOP;
      // TODO: handle the VAPP_NETWORK_PADDING better. series of ifs to add to offsetX would be way more readable
      const offsetX = this.vappNetworkCount && CONNECTOR_SIZE + CONNECTOR_RIGHT_PADDING + DEFAULT_STROKE_WIDTH * 2
        || VAPP_NETWORK_PADDING_RIGHT;
      vnics.forEach((vnicData, index) => {
        const lastChildPosition = self.lastChild && self.lastChild.position.x || 0;
        const path = vappNetworkPathsByName && vappNetworkPathsByName[vnicData.network_name];
        const pointX = path
          ? path.position.x + VAPP_NETWORK_PADDING_RIGHT
          : Math.max(lastChildPosition, lastNetworkPositionX) + offsetX;
        const vnic = new VnicComponent(vnicData,
          new paper.Point(pointX,i * (LABEL_HEIGHT + LABEL_PADDING_BOTTOM) + offsetY));
        self.addChild(vnic);
        this._maxVnicPointByNetworkName[vnicData.network_name] = this.localToGlobal(vnic.position);
        // if (path) {
        //   path.addVnicSegmentOrLength(vnic.position.y);
        // }
      });

      // TODO: a more readable way to calculate pointX
      const lastChildAndOffsetX = this.lastChild
        && (this.lastChild.position.x + CONNECTOR_SIZE / 2 + CONNECTOR_RIGHT_PADDING + DEFAULT_STROKE_WIDTH * 2) || 0;
      const lastNetworkAndOffsetX = lastNetworkPositionX &&
        (lastNetworkPositionX + CONNECTOR_SIZE / 2 + CONNECTOR_RIGHT_PADDING + DEFAULT_STROKE_WIDTH * 2) || 0;
      const pointX = Math.max(lastChildAndOffsetX, lastNetworkAndOffsetX);

      const vm = new VmComponent(
        vmData,
        new paper.Point(pointX,
          i * (LABEL_HEIGHT + LABEL_PADDING_BOTTOM) + PADDING_TOP),
        true
      );
      self.addChild(vm);
    });
  }

  get maxVnicPointByNetworkName(): { [p: string]: paper.Point } {
    return this._maxVnicPointByNetworkName;
  }
}
