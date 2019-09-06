import * as paper from 'paper';
import { LIGHT_GREY } from '../constants/colors';
import { NETWORK_CONNECTOR_SIZE } from '../constants/dimensions';

const LABEL_PADDING_LEFT = 10;

/**
 * Network Label Visual Component.
 */
export class NetworkLabelComponent extends paper.Group {
  protected _label: paper.PointText;
  protected _networkConnector: paper.Path.Circle;
  protected _background: paper.Path.Rectangle;

  constructor(private _network: string, private _point: paper.Point = new paper.Point(0, 0)) {
    super();
    this.applyMatrix = false;
    this.position = _point;

    // TODO: add to the ConnectorComponent
    this._networkConnector = new paper.Path.Circle({
      position: new paper.Point(0, 0),
      radius: NETWORK_CONNECTOR_SIZE / 2,
      fillColor: LIGHT_GREY
    });
    this.addChild(this._networkConnector);

    this._label = new paper.PointText({
      point: [0, 0],
      content: this._network.toUpperCase(),
      fillColor: LIGHT_GREY,
      fontWeight: 'bold',
      fontSize: 10
    });
    this._label.pivot = this._label.bounds.topLeft;
    this._label.position = new paper.Point(NETWORK_CONNECTOR_SIZE / 2 + LABEL_PADDING_LEFT,
      - this._label.bounds.height / 2);
    this.addChild(this._label);

    // building background for edge network names
    this._background = new paper.Path.Rectangle(
      new paper.Point(this._label.bounds.topLeft.x, this._label.bounds.topLeft.y - 1),
      this._label.bounds.size
    );
    this.insertChild(0, this._background);

    this.pivot = this.bounds.topLeft;
  }

  getBackground() {
    return this._background;
  }
}
