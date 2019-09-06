// tslint:disable
import { OperatingSystem, Vnic } from 'iland-sdk';

// could add Entity which everything but Vnics will inherit from
// export interface EntityData{
//   name: string;
//   uuid: string;
// }

export interface NetworkData {
  uuid: string;
  name: string;
  fence_mode: FenceModeType;
}

export interface VappNetworkData {
  uuid: string;
  name: string;
  vapp_uuid: string;
  fence_mode: FenceModeType;
}

let vappNetwork = {
  uuid: '',
  name: 'A',
  vapp_uuid: '',
  fence_mode: 'BRIDGED'
};


// NetworkData fence_mode
export type FenceModeType = 'BRIDGED' | 'NAT_ROUTED' | 'ISOLATED';

// has many VappNetworks, has many vms
// has Vnics through Vms ??
export interface VappData {
  uuid: string;
  name: string;
  vapp_networks: Array<VappNetworkData>;
  vms: Array<VmData>;
}

// belongs to VappData
// has many Vnics, has OperatingSystem
export interface VmData {
  uuid: string;
  name: string;
  vapp_uuid: string;
  operatingSystem: OperatingSystem;
  vnics: Array<VnicData>;
}

// belongs to Vm
export interface VnicData {
  vnic_id: number;
  network_name: string;
  is_connected: boolean;
}

// GENERAL NOTES
  // vapp edge isn't explicit. you'll be able to tell from network.fence_mode. vDC edge is an explicit type
  // vnic = virtual network interface card. can have up to 10

// vApp network types
  //  bridged - direct connection to org-vdc
  //  NAT routed - connected through edge => fence_mode: NAT_ROUTED
  //  isolated - not connected to org-vdc

// networks that aren't connected to anything
// vnic disconnected and not attached to anything

// edge design - no name and has a generic 'vApp Edge' label, but the bottom part is the vapp network name

// ADDITIONAL EDGE CASES
  // vApps can have up to 10 vnics
  // there can be no vnics at all
  // multiple edges - when there is one edge, it has a generic vApp Edge label.
  //    other edges can just be the square icon without text label
  // edges when there are multiple vnics/networks

// STATES - think about transitions to new position and what other elements are included in state changes
  // add/remove vm
  // add/remove vapp
  // add/remove vnic
  // add/remove network

  // renaming ANYTHING - network, vm, vapp
  // vnic can move networks


// Future Feature - VM Sorting/Order
  // most used
  // filterable by cpu usages, etc. may be able to use FerUI
  // based on network connections
