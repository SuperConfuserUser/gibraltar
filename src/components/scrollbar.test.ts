import * as paper from 'paper';
import { ScrollbarComponent } from './scrollbar';

describe('scrollbar component', () => {

  beforeEach(() => {
    const canvasEl = document.createElement('canvas');
    paper.setup(canvasEl);
  });

  test('basic properties and defaults', () => {
    const scrollable = {
      content: new paper.Path.Rectangle(
        new paper.Point(10, 0),
        new paper.Size(1000, 500)
      ),
      containerBounds: new paper.Rectangle(0, 0, 500, 500)
    };
    const defaultPosition = new paper.Point(0, 0);
    const scrollbar = new ScrollbarComponent(scrollable);
    expect(scrollbar.position.x).toBe(defaultPosition.x);
    expect(scrollbar.position.y).toBe(defaultPosition.y);
    expect(scrollbar.getTrack().position.x).toBe(defaultPosition.x);
    expect(scrollbar.getTrack().position.y).toBe(defaultPosition.y);
    expect(scrollbar.getTrack().bounds.width).toBe(scrollable.containerBounds.width);
    expect(scrollbar.getScrollbar().bounds.width).toBe(
      (scrollable.containerBounds.width / scrollable.content.bounds.width) * scrollable.containerBounds.width);
    expect(scrollbar.getScrollbar().position.x).toBe(defaultPosition.x);
    expect(scrollbar.getScrollbar().position.y).toBe(defaultPosition.y);
  });

  test('basic properties and custom position', () => {
    const scrollable = {
      content: new paper.Path.Rectangle(
        new paper.Point(10, 0),
        new paper.Size(1000, 500)
      ),
      containerBounds: new paper.Rectangle(0, 0, 500, 500)
    };
    const customPosition = new paper.Point(30, 30);
    const defaultPosition = new paper.Point(0, 0);
    const scrollbar = new ScrollbarComponent(scrollable, customPosition);
    expect(scrollbar.position.x).toBe(customPosition.x);
    expect(scrollbar.position.y).toBe(customPosition.y);
    expect(scrollbar.getTrack().position.x).toBe(defaultPosition.x);
    expect(scrollbar.getTrack().position.y).toBe(defaultPosition.y);
    expect(scrollbar.getTrack().bounds.width).toBe(scrollable.containerBounds.width);
    expect(scrollbar.getScrollbar().position.x).toBe(defaultPosition.x);
    expect(scrollbar.getScrollbar().position.y).toBe(defaultPosition.y);
    expect(scrollbar.getScrollbar().bounds.width).toBe(
      (scrollable.containerBounds.width / scrollable.content.bounds.width) * scrollable.containerBounds.width);
  });

  test('basic properties and custom scrollTrackLength', () => {
    const scrollable = {
      content: new paper.Path.Rectangle(
        new paper.Point(10, 0),
        new paper.Size(1000, 500)
      ),
      containerBounds: new paper.Rectangle(0, 0, 500, 500)
    };
    const defaultPosition = new paper.Point(0, 0);
    const customScrollTrackLength = 900;
    const scrollbar = new ScrollbarComponent(scrollable, defaultPosition, customScrollTrackLength);
    expect(scrollbar.position.x).toBe(defaultPosition.x);
    expect(scrollbar.position.y).toBe(defaultPosition.y);
    expect(scrollbar.getTrack().position.x).toBe(defaultPosition.x);
    expect(scrollbar.getTrack().position.y).toBe(defaultPosition.y);
    expect(scrollbar.getTrack().bounds.width).toBe(customScrollTrackLength);
    expect(scrollbar.getScrollbar().position.x).toBe(defaultPosition.x);
    expect(scrollbar.getScrollbar().position.y).toBe(defaultPosition.y);
    expect(scrollbar.getScrollbar().bounds.width).toBe(
      (scrollable.containerBounds.width / scrollable.content.bounds.width) * customScrollTrackLength);
  });

  test('does not build when content fits inside container' , () => {
    const scrollable = {
      content: new paper.Path.Rectangle(
        new paper.Point(0, 0),
        new paper.Size(500, 500)
      ),
      containerBounds: new paper.Rectangle(0, 0, 500, 500),
    };
    const scrollbar = new ScrollbarComponent(scrollable, new paper.Point(0, 0));
    expect(scrollbar.getScrollbar()).toBeFalsy();
  });

  test('builds when content does not fit inside container' , () => {
    const scrollable = {
      content: new paper.Path.Rectangle(
        new paper.Point(0, 0),
        new paper.Size(501, 500)
      ),
      containerBounds: new paper.Rectangle(0, 0, 500, 500),
    };
    const scrollbar = new ScrollbarComponent(scrollable, new paper.Point(0, 0));
    expect(scrollbar.getScrollbar()).toBeTruthy();
  });

  test('does not build when content including offsets do not fit but checkFitWithOffsets is off' , () => {
    const scrollable = {
      content: new paper.Path.Rectangle(
        new paper.Point(0, 0),
        new paper.Size(500, 500)
      ),
      containerBounds: new paper.Rectangle(0, 0, 500, 500),
      contentOffsetStart: 10,
      contentOffsetEnd: 10,
      checkFitWithOffsets: false
    };
    const scrollbar = new ScrollbarComponent(scrollable, new paper.Point(0, 0));
    expect(scrollbar.getScrollbar()).toBeFalsy();
  });

  test('builds when content including offsets do not fit and checkFitWithOffsets is on' , () => {
    const scrollable = {
      content: new paper.Path.Rectangle(
        new paper.Point(0, 0),
        new paper.Size(500, 500)
      ),
      containerBounds: new paper.Rectangle(0, 0, 500, 500),
      contentOffsetStart: 10,
      contentOffsetEnd: 10,
      checkFitWithOffsets: true
    };
    const scrollbar = new ScrollbarComponent(scrollable, new paper.Point(0, 0));
    expect(scrollbar.getScrollbar()).toBeTruthy();
  });

});
