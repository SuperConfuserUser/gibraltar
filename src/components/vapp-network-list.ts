import * as paper from 'paper';
import { VappNetworkData, VappNetworkComponent } from './vapp-network.component';
import { EdgeComponent } from './edge';
import { DEFAULT_STROKE_STYLE } from '../constants/styles';
import { DEFAULT_STROKE_WIDTH, CONNECTOR_SIZE, LABEL_HEIGHT, VAPP_NETWORK_RIGHT_MARGIN, LABEL_BOTTOM_PADDING }
  from '../constants/dimensions';

/**
 * Virtual Application Network Visual Component.
 */
export class VappNetworkListComponent extends paper.Group {
  private _networksByName: { [name: string]: VappNetworkComponent } = {};
  private networkPathList: VappNetworkComponent[] = [];
  private isolatedNetworkCount = 0;

  constructor(private vappNetworks: VappNetworkData[], private _point: paper.Point = new paper.Point(0, 0)) {
    super();
    this.applyMatrix = false;
    this.position = this._point;

    const origin = new paper.Path.Circle({
      position: this.position,
      radius: 0,
      parent: this
    });

    // 1st loop - build paths and edges
    let edgeNetworksCount = 0;
    this.vappNetworks.forEach((networkData, index) => {
      const network = new VappNetworkComponent(networkData, new paper.Point(20 * index, 0));
      // TODO: create positionXByUuid to pass to vnics or filter in a method?
      this._networksByName[networkData.name] = network;
      this.networkPathList.push(network);
      this.insertChild(0, network);
      // EDGES
      if (networkData.fence_mode === 'NAT_ROUTED') {
        edgeNetworksCount++;
        // TODO: extract this out
        const pointX = network.position.x - Math.ceil(CONNECTOR_SIZE / 2) - 10 + DEFAULT_STROKE_WIDTH;
        const pointY = (LABEL_HEIGHT + LABEL_BOTTOM_PADDING + DEFAULT_STROKE_WIDTH) * edgeNetworksCount
          + LABEL_BOTTOM_PADDING;
        this.addChild(new EdgeComponent(networkData, new paper.Point(pointX, pointY)));
        network.path.add(new paper.Point(0, pointY));
      } else if (networkData.fence_mode === 'ISOLATED') {
        this.isolatedNetworkCount++;
      }
    });
  }

  get networksByName(): any {
    return this._networksByName;
  }

  // 2nd loop - add top external segment and internal segment
  setTopAndBottomSegments(maxLengthByNetworkName: { [name: string]: paper.Point }) {
    this.networkPathList.forEach((network) => {
      // top segment above vApp background
      network.setTopSegmentAndConnection(this.isolatedNetworkCount);
      // bottom segment within vApp to the lowest VNIC or disconnected if it has no VNICs
      if (maxLengthByNetworkName[network.data.name]) {
        network.setMaxLength(maxLengthByNetworkName[network.data.name].y);
      } else {
        network.setDisconnected();
      }
      network.addMargin();
      if (network.data.fence_mode === 'ISOLATED') {
        this.isolatedNetworkCount--;
      }
    });
    // for (const name in this._networksByName) {
    //   const network = this._networksByName[name];
    //   // top segment above vApp background
    //   network.setTopSegmentAndConnection(this.isolatedNetworkCount);
    //   // bottom segment within vApp to the lowest VNIC or disconnected if it has no VNICs
    //   if (maxLengthByNetworkName[name]) {
    //     network.setMaxLength(maxLengthByNetworkName[name].y);
    //   } else {
    //     network.setDisconnected();
    //   }
    //   if (network.vappNetwork.fence_mode === 'ISOLATED') {
    //     this.isolatedNetworkCount--;
    //   }
    // }
  }

  // 3rd loop if scrolling enabled
  cloneVmListSegments(splitPositionY: number) {
    const clones = new paper.Group();
    clones.applyMatrix = false;
    clones.position = this._point;
    this.networkPathList.forEach((network) => {
      // add new point at the top of vmList
      network.path.add(new paper.Point(0, splitPositionY));
      const segments = network.path.segments;
      // clone last segment and remove the original
      const clonedSeg = new paper.Path.Line({
        from: segments[3].point,
        to: segments[4].point,
        style: DEFAULT_STROKE_STYLE,
        parent: clones
      });
      segments[3].remove();
    });
    return clones;
  }
}
