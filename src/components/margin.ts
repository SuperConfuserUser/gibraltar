import * as paper from 'paper';

const DEFAULT_MARGIN = 0;

export interface MarginData {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

export class MarginComponent extends paper.Group {
  protected marginData: MarginData;
  protected margin: paper.Path.Rectangle;

  /**
   * Creates a new margin component.
   *
   * @param content The content that the marginData surroundS.
   * @param marginValues Values for the marginData written in CSS shorthand style. Can have a series of 1 to 4 numbers.
   */
  constructor(private content: paper.Item | paper.Group, ...marginValues: number[]) {
    super();
    this.applyMatrix = false;
    this.pivot = new paper.Point(0, 0);

    this.marginData = this.assignMarginData(marginValues);
    this.createAndPositionMargin();
  }

  private assignMarginData(values: number[]): MarginData {
    let top;
    let right;
    let bottom;
    let left;
    // assign marginData values based on values array size
    switch (values.length) {
      case 4:
        [top, right, bottom, left] = values;
        break;
      case 3:
        [top, right, bottom] = values;
        left = right;
        break;
      case 2:
        [top, right] = values;
        bottom = top;
        left = right;
        break;
      case 1:
        top = right = bottom = left = values[0];
        break;
      default:
        top = right = bottom = left = DEFAULT_MARGIN;
    }

    return {
      top: top,
      right: right,
      bottom: bottom,
      left: left
    };
  }

  // x: add setters clean style so it's more usable.
  // x: add generic setter w/ similar style to constructor

  // YAGNI?
  // x: rebuild based on constructor or manually (probably easier)
  // TODO: use add MarginData {} instantiation?
  // TODO: cleanup and refactor
  // TODO: docs
  // TODO: tests
  // x: better way to reposition?

  setValues(...marginValues: number[]) {
    const top = this.marginData.top;
    const left = this.marginData.left;
    this.marginData = this.assignMarginData(marginValues);
    this.rebuildMargin();
    this.content.position.y += this.marginData.top - top;
    this.content.position.x += this.marginData.left - left;
  }

  set top(newValue: number) {
    const delta = newValue - this.marginData.top;
    this.marginData.top = newValue;
    this.rebuildMargin();
    this.content.position.y += delta;
  }

  set right(newValue: number) {
    this.marginData.right = newValue;
    this.rebuildMargin();
  }

  set bottom(newValue: number) {
    this.marginData.bottom = newValue;
    this.rebuildMargin();
  }

  set left(newValue: number) {
    const delta = newValue - this.marginData.left;
    this.marginData.left = newValue;
    this.rebuildMargin();
    this.content.position.x += delta;
  }

  private createAndPositionMargin() {
    this.margin = new paper.Path.Rectangle({
      pivot: new paper.Point(0, 0),
      position: this.content.bounds.topLeft,
      size: this.content.bounds.size.add(new paper.Size(
        this.marginData.left + this.marginData.right,
        this.marginData.top + this.marginData.bottom)),
      parent: this,
      selected: false
    });
    this.position = new paper.Point(-this.marginData.left, -this.marginData.top);
  }

  private rebuildMargin() {
    this.margin.remove();
    this.createAndPositionMargin();
  }
}
