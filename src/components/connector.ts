import * as paper from 'paper';
import { VAPP_BACKGROUND_COLOR, LIGHT_GREY } from '../constants/colors';
import { CONNECTOR_SIZE } from '../constants/dimensions';
import {parseSelectorToR3Selector} from '@angular/compiler/src/core';

// TODO: different types for 'default', 'network', 'edge'. build styles for each
/**
 * Connector Visual Component.
 */
export class ConnectorComponent extends paper.Group {

  protected _connector: paper.Path.Circle;

  constructor(private _point: paper.Point = new paper.Point(0, 0), private _isConnected: boolean = true) {
    super();
    this.applyMatrix = false;
    this.position = _point;
    this.pivot = this.bounds.topLeft;

    if (this._isConnected) {
      this._connector = new paper.Path.Circle(new paper.Point(0, 0), CONNECTOR_SIZE / 2);
      this._connector.style = {
        strokeWidth: 1,
        strokeColor: LIGHT_GREY,
        fillColor: VAPP_BACKGROUND_COLOR
      };
      this.addChild(this._connector);
    } else {
      this._connector = new paper.Path.Circle(new paper.Point(0, 0), CONNECTOR_SIZE / 2);
      this._connector.style = {
        strokeWidth: 1,
        strokeColor: LIGHT_GREY,
        fillColor: VAPP_BACKGROUND_COLOR
      };
      let disconnect = new paper.Path.Line(new paper.Point(-17/2, 0), new paper.Point(17/2, 0));
      disconnect.rotate(-45);
      disconnect.style = {
        strokeWidth: 1,
        strokeColor: LIGHT_GREY
      };
      let disconnectCut = disconnect.clone();
      disconnectCut.style = {
        strokeWidth: 6,
        strokeColor: VAPP_BACKGROUND_COLOR
      };
      this.addChildren([this._connector, disconnectCut, disconnect]);
      // this.selected = true;
    }
  }

  getConnector(): paper.Path.Circle {
    return this._connector;
  }
}
