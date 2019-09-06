import * as paper from 'paper';
import { LABEL_HORIZONTAL_PADDING } from '../constants/dimensions';
import { LabelComponent } from './label';

const ICON_SIZE = 10;
// there's probably a more proper typescipt way of defining this
const ICON_COLOR: {[entity: string]: string} = {
  org: '#03A6FF',
  vapp: '#CA67B8',
  edge: '#EBB86C'
};
const ICON_PADDING = 10;

/**
 * Entity Label Visual Component.
 */
export class EntityLabelComponent extends LabelComponent {

  // the svg icon item
  private _icon: paper.Path.Rectangle;

  /**
   * Creates a new EntityLabelComponent instance.
   *
   * @param _text the text to be displayed on the label
   * @param _entity the entity type for icon
   * @param _point the location that the entity label should be rendered at
   */
  constructor(protected _text: string, protected _entity: string,
              protected _point: paper.Point = new paper.Point(0, 0)) {
    super(_text, _point);
    this.applyMatrix = false;
    this.pivot = this.bounds.topLeft;

    this._icon = new paper.Path.Rectangle({
      rectangle: new paper.Rectangle(0, 0,
          ICON_SIZE, ICON_SIZE),
      radius: 2
    });
    this._icon.fillColor = ICON_COLOR[this._entity];
    this._icon.pivot = this._icon.bounds.topLeft;
    this._icon.position = new paper.Point(ICON_PADDING, ICON_PADDING);
    this.addChild(this._icon);

    this._label.position.x = this._icon.bounds.right + LABEL_HORIZONTAL_PADDING;
    this._background.bounds.width += + ICON_PADDING + ICON_SIZE;
  }
}
