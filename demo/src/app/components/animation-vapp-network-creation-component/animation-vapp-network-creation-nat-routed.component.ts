import { AfterViewInit, Component, ViewChild } from '@angular/core';
import * as paper from 'paper';
import { DemoComponent } from '../demo-component/demo.component';
import { VappData, VappComponent } from '../../../../../src/components/vapp';
import { placeholderArrayOfVappData } from '../../constants/vapp-basic-placeholder-data';
import { ScrollbarComponent } from '../../../../../src/components/scrollbar';
import { CANVAS_BACKGROUND_COLOR } from '../../../../../src/constants/colors';
import { CONNECTOR_SIZE, DEFAULT_SCROLLBAR_THICKNESS } from '../../../../../src/constants/dimensions';

@Component({
  selector: 'animation-vapp-network-creation-nat-routed',
  template: `
	  <demo label="VApp Network Creation - Nat-Routed" height="353"
          description="Create new nat-routed vApp Network A) when it's the only nat-routed one and B) when there are multiple."></demo>
  ` })
export class AnimationVappNetworkCreationNatRoutedComponent implements AfterViewInit {

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
    // const vapps: Array<VappData> = placeholderArrayOfVappData;

    // isolate specific ones
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
            name: '172.16.55.0 Failover Network 1',
            vapp_uuid: '',
            fence_mode: 'NAT_ROUTED'
          }
        ],
        vms: []
      },
      {
        uuid: '',
        name: 'BC Test vApp',
        vapp_networks: [
          {
            uuid: '0',
            name: '172.16.55.0 Failover Network 1',
            vapp_uuid: '',
            fence_mode: 'NAT_ROUTED'
          },
          {
            uuid: '1',
            name: '172.16.55.0 Failover Network 2',
            vapp_uuid: '',
            fence_mode: 'NAT_ROUTED'
          }
        ],
        vms: []
      },
      {
        uuid: '',
        name: 'BC Test vApp',
        vapp_networks: [
          {
            uuid: '0',
            name: '172.16.55.0 Failover Network 1',
            vapp_uuid: '',
            fence_mode: 'NAT_ROUTED'
          },
          {
            uuid: '1',
            name: '172.16.55.0 Failover Network 2',
            vapp_uuid: '',
            fence_mode: 'NAT_ROUTED'
          },
          {
            uuid: '2',
            name: '172.16.55.0 Failover Network 3',
            vapp_uuid: '',
            fence_mode: 'NAT_ROUTED'
          }
        ],
        vms: []
      }
    ];

    const content = new paper.Group({ applyMatrix: false });
    // content.pivot = content.bounds.topLeft;
    // content.applyMatrix = false;

    // render vapp array
    // VappListComponent. vapp data, base alignment height
    // const vapps = new VappListComponent(vapps, 59);

    vapps.forEach((vappData, index) => {
      // TODO: set an origin, so don't need to hit a conditional for all of them?
      const position = index !== 0
        // 59 - tallest point, 11 - connector size?
        ? new paper.Point(content.lastChild.bounds.right, VIEW_PADDING + 59 + Math.ceil(CONNECTOR_SIZE / 2))
        : new paper.Point(VIEW_PADDING, VIEW_PADDING + 59 + 11 / 2);
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
