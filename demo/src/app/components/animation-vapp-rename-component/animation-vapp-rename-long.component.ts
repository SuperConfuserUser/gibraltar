import { AfterViewInit, Component, ViewChild } from '@angular/core';
import * as paper from 'paper';
import { DemoComponent } from '../demo-component/demo.component';
import { VappData, VappComponent } from '../../../../../src/components/vapp';
import { placeholderArrayOfVappData } from '../../constants/vapp-basic-placeholder-data';
import { ScrollbarComponent } from '../../../../../src/components/scrollbar';
import { CANVAS_BACKGROUND_COLOR } from '../../../../../src/constants/colors';
import { CONNECTOR_SIZE, DEFAULT_SCROLLBAR_THICKNESS } from '../../../../../src/constants/dimensions';

@Component({
  selector: 'animation-vapp-rename-long',
  template: `
	  <demo label="VApp Rename - Long" height="251"
          description="Rename to longer name that changes current vApp background width."></demo>
  ` })
export class AnimationVappRenameLongComponent implements AfterViewInit {

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
        name: 'BillingResource',
        vapp_networks: [
          {
            uuid: '0',
            name: 'A',
            vapp_uuid: '',
            fence_mode: 'BRIDGED'
          },
          {
            uuid: '1',
            name: 'B',
            vapp_uuid: '',
            fence_mode: 'BRIDGED'
          }
        ],
        vms: [
          {
            uuid: '',
            name: 'windows-as-01',
            vapp_uuid: '',
            operatingSystem: 'ubuntu64Guest',
            vnics: [
              {
                vnic_id: 0,
                network_name: 'A',
                is_connected: true
              },
              {
                vnic_id: 1,
                network_name: 'B',
                is_connected: true
              }
            ]
          }
        ]
      },
      {
        uuid: '',
        name: 'BillingResourceNonRegressionoooo',
        vapp_networks: [
          {
            uuid: '0',
            name: 'A',
            vapp_uuid: '',
            fence_mode: 'BRIDGED'
          },
          {
            uuid: '1',
            name: 'B',
            vapp_uuid: '',
            fence_mode: 'BRIDGED'
          }
        ],
        vms: [
          {
            uuid: '',
            name: 'windows-as-01',
            vapp_uuid: '',
            operatingSystem: 'ubuntu64Guest',
            vnics: [
              {
                vnic_id: 0,
                network_name: 'A',
                is_connected: true
              },
              {
                vnic_id: 1,
                network_name: 'B',
                is_connected: true
              }
            ]
          }
        ]
      }
    ];

    const content = new paper.Group({ applyMatrix: false });
    const vAppTopLocation = 65;
    vapps.forEach((vappData, index) => {
      // TODO: set an origin, so don't need to hit a conditional for all of them?
      const position = index !== 0
        // 59 - tallest point, 11 - connector size?
        ? new paper.Point(content.lastChild.bounds.right, VIEW_PADDING + vAppTopLocation
          + Math.ceil(CONNECTOR_SIZE / 2))
        : new paper.Point(VIEW_PADDING, VIEW_PADDING + vAppTopLocation + 11 / 2);
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
