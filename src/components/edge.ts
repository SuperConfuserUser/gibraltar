import * as paper from 'paper';
import { EntityLabelComponent } from './entity-label';
import { NetworkLabelComponent } from './network-label';
import { VappNetworkData } from './vapp-network.component';
import { VAPP_BACKGROUND_COLOR, LIGHT_GREY } from '../constants/colors';
import { CONNECTOR_SIZE } from '../constants/dimensions';
import { DEFAULT_STROKE_STYLE } from '../constants/styles';

/**
 * Edge Visual Component.
 */
export class EdgeComponent extends paper.Group {
  protected _label: EntityLabelComponent;
  protected _networkName: NetworkLabelComponent;

  constructor(private _edge: VappNetworkData, private _point: paper.Point = new paper.Point(0, 0)) {
    super();
    this.applyMatrix = false;
    this.position = _point;
    this.pivot = this.bounds.topLeft;

    this._label = new EntityLabelComponent(this._edge.name, 'edge');
    this._label.getBackgroundComponent().style = {
      ...DEFAULT_STROKE_STYLE,
      fillColor: VAPP_BACKGROUND_COLOR
    };
    this.addChild(this._label);

    // create the split gray connectors around the label
    // x: icon padding + iconWidth / 2
    const connectorTop = new paper.Path.Circle(new paper.Point(10 + 5,0), CONNECTOR_SIZE / 2);
    connectorTop.fillColor = LIGHT_GREY;
    const connectorBottom = connectorTop.clone();
    connectorBottom.position.y = this._label.bounds.height;
    this.insertChildren(0, [connectorTop, connectorBottom]);
  }

  getPosition() {
    return this.localToParent(this.position);
  }
}
