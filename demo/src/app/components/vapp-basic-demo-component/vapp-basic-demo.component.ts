import { AfterViewInit, Component, ViewChild } from '@angular/core';
import * as paper from 'paper';
import { DemoComponent } from '../demo-component/demo.component';
import { VappData, VappComponent } from '../../../../../src/components/vapp';
import { placeholderArrayOfVappData } from '../../constants/vapp-basic-placeholder-data';
import { ScrollbarComponent } from '../../../../../src/components/scrollbar';
import { CANVAS_BACKGROUND_COLOR } from '../../../../../src/constants/colors';
import { CONNECTOR_SIZE, DEFAULT_SCROLLBAR_THICKNESS } from '../../../../../src/constants/dimensions';

@Component({
  selector: 'vapp-basic-demo',
  template: `
	  <demo label="Static design" height="730"
          description="Implements the static design of the vApp visual component for different cases."></demo>
  ` })
export class VappBasicDemoComponent implements AfterViewInit {

  @ViewChild(DemoComponent)
  demo: DemoComponent;

  ngAfterViewInit() {
    // sets up Paper Project
    const proj = this.demo.getProject();
    proj.activate();
    const view = paper.view;
    const canvas = view.element;
    this.demo.backgroundColor = CANVAS_BACKGROUND_COLOR;

    const VIEW_PADDING = 30;
    const DEMO_VAPP_TOP_ALIGNMENT = 59;
    const vapps: Array<VappData> = placeholderArrayOfVappData;

    // isolate specific ones
    // const vapps: Array<VappData> = [...[],
    //   placeholderArrayOfVappData[0],
    //   placeholderArrayOfVappData[1],
      // placeholderArrayOfVappData[8],
      // placeholderArrayOfVappData[9]
    // ];

    const content = new paper.Group({ applyMatrix: false });
    // create origin paper Item for vapps to base position from
    const origin = new paper.Path.Circle({
      position: new paper.Point(VIEW_PADDING, VIEW_PADDING + DEMO_VAPP_TOP_ALIGNMENT + Math.ceil(CONNECTOR_SIZE / 2)),
      radius: 0,
      parent: content
    });

    vapps.forEach((vappData, index) => {
      const position = new paper.Point(
        content.lastChild.bounds.right,
        VIEW_PADDING + DEMO_VAPP_TOP_ALIGNMENT + Math.ceil(CONNECTOR_SIZE / 2));
      content.addChild(new VappComponent(vappData, position));
    });

    (content.lastChild as VappComponent).margin.right = 0;

    const scrollingVapp = content.children[1] as VappComponent;

    // create scrollbar
    const scrollbar = new ScrollbarComponent({
      content: content,
      containerBounds: view.bounds,
      contentOffsetEnd: VIEW_PADDING
    },
      new paper.Point(VIEW_PADDING, view.size.height - DEFAULT_SCROLLBAR_THICKNESS - 10),
      view.bounds.width - VIEW_PADDING * 2,
      'horizontal',
      view
    );

    // add scroll listening. paper doesn't have a wheel event handler
    canvas.onwheel = (event: WheelEvent) => {
      if (!scrollingVapp.hovering) {
        scrollbar.onScroll(event);
      } else {
        // TODO: better way of doing this vs specifically targeting an item we setup. needs to be able to listen on
        //  hover automatically. how to pass canvas events to inner tools - emit, observables, subscription?
        scrollingVapp.setScrollListening(event);
      }
    };

    // canvas.onmouseenter = () => {
    //   scrollbar.activateDefaultTool();
    //   scrollbar.visible = true;
    // };
    // canvas.onmouseleave = () => {
    //   scrollbar.visible = false;
    // };
  }
}
