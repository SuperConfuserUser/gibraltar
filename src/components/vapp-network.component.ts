import * as paper from 'paper';
import { LIGHT_GREY, CANVAS_BACKGROUND_COLOR } from '../constants/colors';
import { NetworkLabelComponent } from './network-label';
import { ConnectorComponent } from './connector';
import { CONNECTOR_SIZE, VAPP_PADDING, NETWORK_CONNECTOR_SIZE, LABEL_HEIGHT, VAPP_NETWORK_RIGHT_MARGIN }
  from '../constants/dimensions';
import { DEFAULT_STROKE_STYLE } from '../constants/styles';
import { MarginComponent } from './margin';

// TODO: this will be determined by the lowest ORG/VDC network path when those are added
const COMMON_POSITION = 59;

export type FenceMode = 'BRIDGED' | 'NAT_ROUTED' | 'ISOLATED';

export interface VappNetworkData {
  uuid: string;
  name: string;
  vapp_uuid: string;
  fence_mode: FenceMode;
}

/**
 * Virtual Application Network Visual Component.
 */
export class VappNetworkComponent extends paper.Group {

  private _path: paper.Path.Line;
  private _connectionComponent: ConnectorComponent | NetworkLabelComponent;
  private _margin: MarginComponent;

  constructor(private _vappNetwork: VappNetworkData,
              private _point: paper.Point = new paper.Point(0, 0)) {
    super();
    this.applyMatrix = false;
    this.pivot = new paper.Point(0, 0);
    this.position = this._point;

    const origin = new paper.Point(0, 0);

    this._path = new paper.Path.Line({
      segment: origin,
      style: DEFAULT_STROKE_STYLE,
      parent: this
    });
  }

  // CLASS METHODS
  get margin(): MarginComponent {
    return this._margin;
  }

  get path(): paper.Path.Line {
    return this._path;
  }

  get data(): VappNetworkData {
    return this._vappNetwork;
  }

  setTopSegmentAndConnection(isolatedCount: number) {
    // bridge and nat routed length - 59 from stroke, isolated is 18 from network label
    const isIsolated = this._vappNetwork.fence_mode === 'ISOLATED';
    // 18 is network label padding, 11 is label height. 13 - multiple network label padding
    const connectionPositionY = isIsolated
      ? 5 + (Math.ceil(CONNECTOR_SIZE / 2) + 13) * isolatedCount
      : COMMON_POSITION + Math.ceil(CONNECTOR_SIZE / 2);
    const connectionPoint = new paper.Point(0, - connectionPositionY);
    this.path.add(connectionPoint);

    this._connectionComponent = isIsolated
      ? new NetworkLabelComponent(this._vappNetwork.name, connectionPoint)
      : new ConnectorComponent(connectionPoint);

    // better to just clone and draw as an internal type?
    if (!isIsolated) {
      (this._connectionComponent as ConnectorComponent).getConnector().fillColor = CANVAS_BACKGROUND_COLOR;
    }

    this.addChild(this._connectionComponent);
  }

  setMaxLength(pointY: number) {
    this._path.add(new paper.Point(0, pointY));
  }

  setDisconnected(): void {
    // nat-routed networks will already be connected down to the edge label
    if (this._vappNetwork.fence_mode !== 'NAT_ROUTED') {
      this._path.add(new paper.Point(0, VAPP_PADDING + LABEL_HEIGHT / 2));
      const connector = new paper.Path.Circle({
        position: this._path.bounds.bottomCenter,
        radius: NETWORK_CONNECTOR_SIZE / 2,
        fillColor: LIGHT_GREY,
        parent: this
      });
    }
  }

  // TODO: margin is probably unnecessary
  addMargin(): void {
    this._margin = new MarginComponent(this._path, 0, VAPP_NETWORK_RIGHT_MARGIN, 0, 0);
    this.insertChild(0, this._margin);
  }
}

/**
 * Vapp network component
 *
 * Entire vertical path is one single line. You can target specific segments via the segment object.
 *
 * OR Entire vertical path is one single line. You can target the last point to adjust the length.
 *
 * networkPathSegments = {
 *   topConnection: path segment,
 *   vappHeader: path segment,
 *   vmList: path segment
 * }
 *
 * connectionPoint:
 *    - isolated and number of isolated segments to determine Y value
 *    - connected - eventually needs Y value for the VDC/org connection
 *
 * commonPosition:
 *    - same height where vapp component starts
 *
 * vappHeader:
 *    - extends to base of header
 *    - if it doesn't have VNIC or VM connection, it terminates at VAPP label
 *
 * vmList:
 *    - extends to bottom most connected VM
 *    - may have to clone and/or detach if vmList is scrollable
 *
 */
