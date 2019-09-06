import * as paper from 'paper';
import { MarginData, MarginComponent } from './margin';
import { VmComponent, VmData } from './vm';

// could write it like this or simple depending on values. MARGIN_SIDES, MARGIN, etc.
const MARGIN: MarginData = {
  top: 0,
  right: 0,
  bottom: 10,
  left: 0
};

export class VmWithMarginComponent extends paper.Group {

  readonly _margin: MarginComponent;

  constructor(private vmData: VmData, protected _point: paper.Point = new paper.Point(0, 0)) {
    super();
    this.applyMatrix = false;
    this.position = _point;

    const vm = new VmComponent(vmData, new paper.Point(0, 0), true);
    this.addChild(vm);

    this._margin = new MarginComponent(this, MARGIN.top, MARGIN.right, MARGIN.bottom,
      MARGIN.left);
    this.insertChild(0, this._margin);
  }

  get margin(): MarginComponent {
    return this._margin;
  }
}
