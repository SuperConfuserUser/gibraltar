import { AfterViewInit, Component, ViewChild } from '@angular/core';
import * as paper from 'paper';
import { DemoComponent } from '../demo-component/demo.component';
import { VappData, VappComponent } from '../../../../../src/components/vapp';
import { placeholderArrayOfVappData } from '../../constants/vapp-basic-placeholder-data';
import { ScrollbarComponent } from '../../../../../src/components/scrollbar';
import { CANVAS_BACKGROUND_COLOR } from '../../../../../src/constants/colors';
import { CONNECTOR_SIZE, DEFAULT_SCROLLBAR_THICKNESS } from '../../../../../src/constants/dimensions';

@Component({
  selector: 'animation-vapp-network-creation-bridged',
  template: `
	  <demo label="VApp Network Creation - Bridged" height="195"
          description="Create new bridged vApp Network."></demo>
  ` })
export class AnimationVappNetworkCreationBridgedComponent implements AfterViewInit {

  @ViewChild(DemoComponent)
  demo: DemoComponent;

  ngAfterViewInit() {
    // sets up Paper Project
    const proj = this.demo.getProject();
    proj.activate();
    const canvas = this.demo.canvas.nativeElement;
    this.demo.backgroundColor = CANVAS_BACKGROUND_COLOR;
    const view = paper.view;

    const VIEW_PADDING = 30;

    const vapps: Array<VappData> = [
      {
        uuid: '',
        name: 'Coke RES & BURST',
        vapp_networks: [],
        vms: []
      },
      {
        uuid: '',
        name: 'Coke RES & BURST',
        vapp_networks: [
          {
            uuid: '0',
            name: 'A',
            vapp_uuid: '',
            fence_mode: 'BRIDGED'
          }
        ],
        vms: []
      }
    ];

    const content = new paper.Group({ applyMatrix: false });
    const origin = new paper.Path.Circle({
      position: new paper.Point(VIEW_PADDING, VIEW_PADDING + 59 + Math.ceil(CONNECTOR_SIZE / 2)),
      radius: 0,
      parent: content
    });

    vapps.forEach((vappData, index) => {
      const position = new paper.Point(
        content.lastChild.bounds.right,
        VIEW_PADDING + 59 + Math.ceil(CONNECTOR_SIZE / 2));
      content.addChild(new VappComponent(vappData, position));
    });

    (content.lastChild as VappComponent).margin.right = 0;

    // create scrollbar
    const scrollbar = new ScrollbarComponent({
      content: content,
      containerBounds: view.bounds,
      contentOffsetEnd: VIEW_PADDING
    },
      new paper.Point(VIEW_PADDING, view.size.height - DEFAULT_SCROLLBAR_THICKNESS - 10),
      view.bounds.width - VIEW_PADDING * 2
    );

    // add scroll listening. paper doesn't have a wheel event handler
    canvas.onwheel = (event: WheelEvent) => {
      scrollbar.onScroll(event);
    };
  }
}
