import * as paper from 'paper';
import { ConnectorComponent } from './connector';

export interface VnicData {
  vnic_id: number;
  network_name: string;
  is_connected: boolean;
}

/**
 * Vnic Visual Component.
 */
export class VnicComponent extends paper.Group {
  protected _icon: ConnectorComponent;

  constructor(private _vnic: VnicData,
              private _point: paper.Point = new paper.Point(0, 0)) {
    super();
    this.applyMatrix = false;
    this.position = _point;

    this._icon = new ConnectorComponent(new paper.Point(0, 0), this._vnic.is_connected);
    this.addChild(this._icon);
  }
}

// super();
// this.position = this._basePoint;
// this.pivot = this.bounds.topLeft;
// this.applyMatrix = false;
