import { VappData } from '../../../../src/components/vapp';

/**
 * Placeholder data for the Vapp Static Demo
 */

  // 0. one edge
  // 1. isolated network
  // 2. multiple isolated networks
  // 3. multiple connected networks
  // 4. no networks
  // 5. vapp with network but no vnics or vms connected
  // 6. disconnected vnics
  // 7. A LOT of disconnected vnics - width edge case
  // 8. has no networks or vnics, but has a vm
  // 9. disconnected vnic on connected network
  // 10. multiple edges
  // 11. scrollbar enabled with edge
  // 12. scrollbar enabled without edge
  // 13. vms with max amount of vnics - width edge case
  // 14. a lot of vms attached to their own network - width edge case
  // 15. mixed lengths - vnic connections
  // 16. mixed connected and disconnected vnics
  // 17. nat-routed vApp network with no VMs and VNICs
  // 18. vapp with no vApp networks or VMs
export const placeholderArrayOfVappData: Array<VappData> = [
  // 12. scrollbar enabled without edge
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
    vms: [
      {
        uuid: '',
        name: 'Alert Resource Non Regression VM',
        vapp_uuid: '',
        operatingSystem: 'windows7Guest',
        vnics: [
          {
            vnic_id: 0,
            network_name: 'A',
            is_connected: true
          }
        ]
      },
      {
        uuid: '',
        name: 'AutomatedSecurityTest1',
        vapp_uuid: '',
        operatingSystem: 'windows7Guest',
        vnics: [
          {
            vnic_id: 0,
            network_name: 'A',
            is_connected: true
          }
        ]
      },
      {
        uuid: '',
        name: 'CatalogResourceNonRegression1',
        vapp_uuid: '',
        operatingSystem: 'ubuntu64Guest',
        vnics: [
          {
            vnic_id: 0,
            network_name: 'A',
            is_connected: true
          }
        ]
      },
      {
        uuid: '',
        name: 'lin-hytrust-01',
        vapp_uuid: '',
        operatingSystem: 'windows7Guest',
        vnics: [
          {
            vnic_id: 0,
            network_name: 'A',
            is_connected: true
          }
        ]
      },
      {
        uuid: '',
        name: 'Alert Resource Non Regression VM',
        vapp_uuid: '',
        operatingSystem: 'windows7Guest',
        vnics: [
          {
            vnic_id: 0,
            network_name: 'A',
            is_connected: true
          }
        ]
      },
      {
        uuid: '',
        name: 'AutomatedSecurityTest1',
        vapp_uuid: '',
        operatingSystem: 'windows7Guest',
        vnics: [
          {
            vnic_id: 0,
            network_name: 'A',
            is_connected: true
          }
        ]
      },
      {
        uuid: '',
        name: 'CatalogResourceNonRegression1',
        vapp_uuid: '',
        operatingSystem: 'ubuntu64Guest',
        vnics: [
          {
            vnic_id: 0,
            network_name: 'A',
            is_connected: true
          }
        ]
      },
      {
        uuid: '',
        name: 'lin-hytrust-01',
        vapp_uuid: '',
        operatingSystem: 'windows7Guest',
        vnics: [
          {
            vnic_id: 0,
            network_name: 'A',
            is_connected: true
          }
        ]
      },
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
          }
        ]
      },
      {
        uuid: '',
        name: 'Alert Resource Non Regression VM',
        vapp_uuid: '',
        operatingSystem: 'windows7Guest',
        vnics: [
          {
            vnic_id: 0,
            network_name: 'A',
            is_connected: true
          }
        ]
      },
      {
        uuid: '',
        name: 'AutomatedSecurityTest1',
        vapp_uuid: '',
        operatingSystem: 'windows7Guest',
        vnics: [
          {
            vnic_id: 0,
            network_name: 'A',
            is_connected: true
          }
        ]
      },
      {
        uuid: '',
        name: 'CatalogResourceNonRegression1',
        vapp_uuid: '',
        operatingSystem: 'ubuntu64Guest',
        vnics: [
          {
            vnic_id: 0,
            network_name: 'A',
            is_connected: true
          }
        ]
      },
      {
        uuid: '',
        name: 'lin-hytrust-01',
        vapp_uuid: '',
        operatingSystem: 'windows7Guest',
        vnics: [
          {
            vnic_id: 0,
            network_name: 'A',
            is_connected: true
          }
        ]
      },
      {
        uuid: '',
        name: 'Alert Resource Non Regression VM',
        vapp_uuid: '',
        operatingSystem: 'windows7Guest',
        vnics: [
          {
            vnic_id: 0,
            network_name: 'A',
            is_connected: true
          }
        ]
      },
      {
        uuid: '',
        name: 'AutomatedSecurityTest1',
        vapp_uuid: '',
        operatingSystem: 'windows7Guest',
        vnics: [
          {
            vnic_id: 0,
            network_name: 'A',
            is_connected: true
          }
        ]
      },
      {
        uuid: '',
        name: 'CatalogResourceNonRegression1',
        vapp_uuid: '',
        operatingSystem: 'windows7Guest',
        vnics: [
          {
            vnic_id: 0,
            network_name: 'A',
            is_connected: true
          }
        ]
      },
      {
        uuid: '',
        name: 'CatalogResourceNonRegression1',
        vapp_uuid: '',
        operatingSystem: 'ubuntu64Guest',
        vnics: [
          {
            vnic_id: 0,
            network_name: 'A',
            is_connected: true
          }
        ]
      },
      {
        uuid: '',
        name: 'lin-hytrust-01',
        vapp_uuid: '',
        operatingSystem: 'windows7Guest',
        vnics: [
          {
            vnic_id: 0,
            network_name: 'A',
            is_connected: true
          }
        ]
      },
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
          }
        ]
      },
      {
        uuid: '',
        name: 'Alert Resource Non Regression VM',
        vapp_uuid: '',
        operatingSystem: 'windows7Guest',
        vnics: [
          {
            vnic_id: 0,
            network_name: 'A',
            is_connected: true
          }
        ]
      },
      {
        uuid: '',
        name: 'AutomatedSecurityTest1',
        vapp_uuid: '',
        operatingSystem: 'windows7Guest',
        vnics: [
          {
            vnic_id: 0,
            network_name: 'A',
            is_connected: true
          }
        ]
      },
      {
        uuid: '',
        name: 'CatalogResourceNonRegression1',
        vapp_uuid: '',
        operatingSystem: 'ubuntu64Guest',
        vnics: [
          {
            vnic_id: 0,
            network_name: 'A',
            is_connected: true
          }
        ]
      },
      {
        uuid: '',
        name: 'lin-hytrust-01',
        vapp_uuid: '',
        operatingSystem: 'windows7Guest',
        vnics: [
          {
            vnic_id: 0,
            network_name: 'A',
            is_connected: true
          }
        ]
      },
      {
        uuid: '',
        name: 'Alert Resource Non Regression VM',
        vapp_uuid: '',
        operatingSystem: 'windows7Guest',
        vnics: [
          {
            vnic_id: 0,
            network_name: 'A',
            is_connected: true
          }
        ]
      },
      {
        uuid: '',
        name: 'AutomatedSecurityTest1',
        vapp_uuid: '',
        operatingSystem: 'windows7Guest',
        vnics: [
          {
            vnic_id: 0,
            network_name: 'A',
            is_connected: true
          }
        ]
      },
      {
        uuid: '',
        name: 'CatalogResourceNonRegression1',
        vapp_uuid: '',
        operatingSystem: 'ubuntu64Guest',
        vnics: [
          {
            vnic_id: 0,
            network_name: 'A',
            is_connected: true
          }
        ]
      },
      {
        uuid: '',
        name: 'lin-hytrust-01',
        vapp_uuid: '',
        operatingSystem: 'windows7Guest',
        vnics: [
          {
            vnic_id: 0,
            network_name: 'A',
            is_connected: true
          }
        ]
      },
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
          }
        ]
      }
    ]
  },
  // 18. vapp with no vApp networks or VMs
  {
    uuid: '',
    name: 'Coke RES & BURST',
    vapp_networks: [],
    vms: []
  },
  // 17. nat-routed vApp network with no VMs and VNICs
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
  // 0. one edge
  {
    uuid: '',
    name: 'Coke RES & BURST',
    vapp_networks: [
      {
        uuid: '0',
        name: '172.16.55.0 Failover Network',
        vapp_uuid: '',
        fence_mode: 'NAT_ROUTED'
      }
    ],
    vms: [
      {
        uuid: '',
        name: 'lin-hytrust-01',
        vapp_uuid: '',
        operatingSystem: 'windows7Guest',
        vnics: [
          {
            vnic_id: 0,
            network_name: '172.16.55.0 Failover Network',
            is_connected: true
          }
        ]
      },
      {
        uuid: '',
        name: 'Alert Resource Non Regression VM',
        vapp_uuid: '',
        operatingSystem: 'windows7Guest',
        vnics: [
          {
            vnic_id: 1,
            network_name: '172.16.55.0 Failover Network',
            is_connected: true
          }
        ]
      },
      {
        uuid: '',
        name: 'AutomatedSecurityTest1',
        vapp_uuid: '',
        operatingSystem: 'windows7Guest',
        vnics: [
          {
            vnic_id: 2,
            network_name: '172.16.55.0 Failover Network',
            is_connected: true
          }
        ]
      },
      {
        uuid: '',
        name: 'CatalogResourceNonRegression1',
        vapp_uuid: '',
        operatingSystem: 'ubuntu64Guest',
        vnics: [
          {
            vnic_id: 3,
            network_name: '172.16.55.0 Failover Network',
            is_connected: true
          }
        ]
      },
      {
        uuid: '',
        name: 'lin-hytrust-01',
        vapp_uuid: '',
        operatingSystem: 'windows7Guest',
        vnics: [
          {
            vnic_id: 4,
            network_name: '172.16.55.0 Failover Network',
            is_connected: true
          }
        ]
      },
      {
        uuid: '',
        name: 'windows-as-01',
        vapp_uuid: '',
        operatingSystem: 'ubuntu64Guest',
        vnics: [
          {
            vnic_id: 5,
            network_name: '172.16.55.0 Failover Network',
            is_connected: true
          }
        ]
      }
    ]
  },
  // 1. isolated network
  {
    uuid: '',
    name: 'BC Test vApp',
    vapp_networks: [
      {
        uuid: '0',
        name: 'JTRAN 172.16.100.0/24',
        vapp_uuid: '',
        fence_mode: 'ISOLATED'
      }
    ],
    vms: [
      {
        uuid: '',
        name: 'AutomatedSecurityTest1',
        vapp_uuid: '',
        operatingSystem: 'windows7Guest',
        vnics: [
          {
            vnic_id: 0,
            network_name: 'JTRAN 172.16.100.0/24',
            is_connected: true
          }
        ]
      }
    ]
  },
  // 5. vapp with network but no vnics or vms connected
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
  },
  // 2. multiple isolated networks
  {
    uuid: '',
    name: 'BC Test vApp',
    vapp_networks: [
      {
        uuid: '0',
        name: 'JTRAN 172.16.100.0/24',
        vapp_uuid: '',
        fence_mode: 'ISOLATED'
      },
      {
        uuid: '1',
        name: 'JTRAN 172.16.100.0/24 2',
        vapp_uuid: '',
        fence_mode: 'ISOLATED'
      }
    ],
    vms: [
      {
        uuid: '',
        name: 'AutomatedSecurityTest1',
        vapp_uuid: '',
        operatingSystem: 'windows7Guest',
        vnics: [
          {
            vnic_id: 0,
            network_name: 'JTRAN 172.16.100.0/24',
            is_connected: true
          },
          {
            vnic_id: 0,
            network_name: 'JTRAN 172.16.100.0/24 2',
            is_connected: true
          }
        ]
      }
    ]
  },
  // 3. has two connected vapp_networks and one vm
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
  },
  // 4. no networks
  {
    uuid: '',
    name: 'Delete me build',
    vapp_networks: [],
    vms: [
      {
        uuid: '',
        name: 'Delete me VMs Lin',
        vapp_uuid: '',
        operatingSystem: 'windows7Guest',
        vnics: [
          {
            vnic_id: 0,
            network_name: '',
            is_connected: false
          }
        ]
      }
    ]
  },
  // 6. disconnected vnics
  {
    uuid: '',
    name: 'BC Test vApp',
    vapp_networks: [
      {
        uuid: '0',
        name: 'A',
        vapp_uuid: '',
        fence_mode: 'BRIDGED'
      }
    ],
    vms: [
      {
        uuid: '',
        name: 'AutomatedSecurityTest1',
        vapp_uuid: '',
        operatingSystem: 'windows7Guest',
        vnics: [
          {
            vnic_id: 0,
            network_name: 'A',
            is_connected: true
          },
          {
            vnic_id: 1,
            network_name: '',
            is_connected: false
          },
          {
            vnic_id: 2,
            network_name: '',
            is_connected: false
          }
        ]
      }
    ]
  },
  // 7. A LOT of disconnected vnics - width edge case
  {
    uuid: '',
    name: 'BC Test vApp',
    vapp_networks: [
      {
        uuid: '0',
        name: 'A',
        vapp_uuid: '',
        fence_mode: 'BRIDGED'
      }
    ],
    vms: [
      {
        uuid: '',
        name: 'AutomatedSecurityTest1',
        vapp_uuid: '',
        operatingSystem: 'windows7Guest',
        vnics: [
          {
            vnic_id: 0,
            network_name: 'A',
            is_connected: true
          },
          {
            vnic_id: 1,
            network_name: '',
            is_connected: false
          },
          {
            vnic_id: 2,
            network_name: '',
            is_connected: false
          },
          {
            vnic_id: 3,
            network_name: '',
            is_connected: false
          },
          {
            vnic_id: 4,
            network_name: '',
            is_connected: false
          },
          {
            vnic_id: 5,
            network_name: '',
            is_connected: false
          },
          {
            vnic_id: 6,
            network_name: '',
            is_connected: false
          },
          {
            vnic_id: 7,
            network_name: '',
            is_connected: false
          },
          {
            vnic_id: 8,
            network_name: '',
            is_connected: false
          },
          {
            vnic_id: 9,
            network_name: '',
            is_connected: false
          }
        ]
      }
    ]
  },
  // 8. has no networks or vnics, but has a vm
  {
    uuid: '',
    name: 'BC Test vApp',
    vapp_networks: [],
    vms: [
      {
        uuid: '0',
        name: 'AutomatedSecurityTest1',
        vapp_uuid: '',
        operatingSystem: 'windows7Guest',
        vnics: []
      }
    ]
  },
  // 9. disconnected vnic on connected network
  {
    uuid: '',
    name: 'BC Test vApp',
    vapp_networks: [
      {
        uuid: '0',
        name: 'A',
        vapp_uuid: '',
        fence_mode: 'BRIDGED'
      }
    ],
    vms: [
      {
        uuid: '',
        name: 'AutomatedSecurityTest1',
        vapp_uuid: '',
        operatingSystem: 'windows7Guest',
        vnics: [
          {
            vnic_id: 0,
            network_name: 'A',
            is_connected: false
          }
        ]
      }
    ]
  },
  // 10. multiple edges
  {
    uuid: '',
    name: 'Coke RES & BURST',
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
    vms: [
      {
        uuid: '',
        name: 'lin-hytrust-01',
        vapp_uuid: '',
        operatingSystem: 'windows7Guest',
        vnics: [
          {
            vnic_id: 0,
            network_name: '172.16.55.0 Failover Network 1',
            is_connected: true
          },
          {
            vnic_id: 1,
            network_name: '172.16.55.0 Failover Network 2',
            is_connected: true
          },
          {
            vnic_id: 2,
            network_name: '172.16.55.0 Failover Network 3',
            is_connected: true
          }
        ]
      },
      {
        uuid: '',
        name: 'lin-hytrust-01',
        vapp_uuid: '',
        operatingSystem: 'windows7Guest',
        vnics: [
          {
            vnic_id: 0,
            network_name: '172.16.55.0 Failover Network 1',
            is_connected: true
          },
          {
            vnic_id: 1,
            network_name: '172.16.55.0 Failover Network 2',
            is_connected: true
          },
          {
            vnic_id: 2,
            network_name: '172.16.55.0 Failover Network 3',
            is_connected: true
          }
        ]
      },
      {
        uuid: '',
        name: 'lin-hytrust-01',
        vapp_uuid: '',
        operatingSystem: 'windows7Guest',
        vnics: [
          {
            vnic_id: 0,
            network_name: '172.16.55.0 Failover Network 1',
            is_connected: true
          },
          {
            vnic_id: 1,
            network_name: '172.16.55.0 Failover Network 2',
            is_connected: true
          },
          {
            vnic_id: 2,
            network_name: '172.16.55.0 Failover Network 3',
            is_connected: true
          }
        ]
      }
    ]
  },
  // // 11. scrollbar enabled with edge
  // {
  //   uuid: '',
  //   name: 'Coke RES & BURST',
  //   vapp_networks: [
  //     {
  //       uuid: '0',
  //       name: '172.16.55.0 Failover Network',
  //       vapp_uuid: '',
  //       fence_mode: 'NAT_ROUTED'
  //     }
  //   ],
  //   vms: [
  //     {
  //       uuid: '',
  //       name: 'Alert Resource Non Regression VM',
  //       vapp_uuid: '',
  //       operatingSystem: 'windows7Guest',
  //       vnics: [
  //         {
  //           vnic_id: 0,
  //           network_name: '172.16.55.0 Failover Network',
  //           is_connected: true
  //         }
  //       ]
  //     },
  //     {
  //       uuid: '',
  //       name: 'AutomatedSecurityTest1',
  //       vapp_uuid: '',
  //       operatingSystem: 'windows7Guest',
  //       vnics: [
  //         {
  //           vnic_id: 0,
  //           network_name: '172.16.55.0 Failover Network',
  //           is_connected: true
  //         }
  //       ]
  //     },
  //     {
  //       uuid: '',
  //       name: 'CatalogResourceNonRegression1',
  //       vapp_uuid: '',
  //       operatingSystem: 'ubuntu64Guest',
  //       vnics: [
  //         {
  //           vnic_id: 0,
  //           network_name: '172.16.55.0 Failover Network',
  //           is_connected: true
  //         }
  //       ]
  //     },
  //     {
  //       uuid: '',
  //       name: 'lin-hytrust-01',
  //       vapp_uuid: '',
  //       operatingSystem: 'windows7Guest',
  //       vnics: [
  //         {
  //           vnic_id: 0,
  //           network_name: '172.16.55.0 Failover Network',
  //           is_connected: true
  //         }
  //       ]
  //     },
  //     {
  //       uuid: '',
  //       name: 'Alert Resource Non Regression VM',
  //       vapp_uuid: '',
  //       operatingSystem: 'windows7Guest',
  //       vnics: [
  //         {
  //           vnic_id: 0,
  //           network_name: '172.16.55.0 Failover Network',
  //           is_connected: true
  //         }
  //       ]
  //     },
  //     {
  //       uuid: '',
  //       name: 'AutomatedSecurityTest1',
  //       vapp_uuid: '',
  //       operatingSystem: 'windows7Guest',
  //       vnics: [
  //         {
  //           vnic_id: 0,
  //           network_name: '172.16.55.0 Failover Network',
  //           is_connected: true
  //         }
  //       ]
  //     },
  //     {
  //       uuid: '',
  //       name: 'CatalogResourceNonRegression1',
  //       vapp_uuid: '',
  //       operatingSystem: 'ubuntu64Guest',
  //       vnics: [
  //         {
  //           vnic_id: 0,
  //           network_name: '172.16.55.0 Failover Network',
  //           is_connected: true
  //         }
  //       ]
  //     },
  //     {
  //       uuid: '',
  //       name: 'lin-hytrust-01',
  //       vapp_uuid: '',
  //       operatingSystem: 'windows7Guest',
  //       vnics: [
  //         {
  //           vnic_id: 0,
  //           network_name: '172.16.55.0 Failover Network',
  //           is_connected: true
  //         }
  //       ]
  //     },
  //     {
  //       uuid: '',
  //       name: 'windows-as-01',
  //       vapp_uuid: '',
  //       operatingSystem: 'ubuntu64Guest',
  //       vnics: [
  //         {
  //           vnic_id: 0,
  //           network_name: '172.16.55.0 Failover Network',
  //           is_connected: true
  //         }
  //       ]
  //     },
  //     {
  //       uuid: '',
  //       name: 'Alert Resource Non Regression VM',
  //       vapp_uuid: '',
  //       operatingSystem: 'windows7Guest',
  //       vnics: [
  //         {
  //           vnic_id: 0,
  //           network_name: '172.16.55.0 Failover Network',
  //           is_connected: true
  //         }
  //       ]
  //     },
  //     {
  //       uuid: '',
  //       name: 'AutomatedSecurityTest1',
  //       vapp_uuid: '',
  //       operatingSystem: 'windows7Guest',
  //       vnics: [
  //         {
  //           vnic_id: 0,
  //           network_name: '172.16.55.0 Failover Network',
  //           is_connected: true
  //         }
  //       ]
  //     },
  //     {
  //       uuid: '',
  //       name: 'CatalogResourceNonRegression1',
  //       vapp_uuid: '',
  //       operatingSystem: 'ubuntu64Guest',
  //       vnics: [
  //         {
  //           vnic_id: 0,
  //           network_name: '172.16.55.0 Failover Network',
  //           is_connected: true
  //         }
  //       ]
  //     },
  //     {
  //       uuid: '',
  //       name: 'lin-hytrust-01',
  //       vapp_uuid: '',
  //       operatingSystem: 'windows7Guest',
  //       vnics: [
  //         {
  //           vnic_id: 0,
  //           network_name: '172.16.55.0 Failover Network',
  //           is_connected: true
  //         }
  //       ]
  //     },
  //     {
  //       uuid: '',
  //       name: 'Alert Resource Non Regression VM',
  //       vapp_uuid: '',
  //       operatingSystem: 'windows7Guest',
  //       vnics: [
  //         {
  //           vnic_id: 0,
  //           network_name: '172.16.55.0 Failover Network',
  //           is_connected: true
  //         }
  //       ]
  //     },
  //     {
  //       uuid: '',
  //       name: 'AutomatedSecurityTest1',
  //       vapp_uuid: '',
  //       operatingSystem: 'windows7Guest',
  //       vnics: [
  //         {
  //           vnic_id: 0,
  //           network_name: '172.16.55.0 Failover Network',
  //           is_connected: true
  //         }
  //       ]
  //     },
  //     {
  //       uuid: '',
  //       name: 'CatalogResourceNonRegression1',
  //       vapp_uuid: '',
  //       operatingSystem: 'ubuntu64Guest',
  //       vnics: [
  //         {
  //           vnic_id: 0,
  //           network_name: '172.16.55.0 Failover Network',
  //           is_connected: true
  //         }
  //       ]
  //     },
  //     {
  //       uuid: '',
  //       name: 'lin-hytrust-01',
  //       vapp_uuid: '',
  //       operatingSystem: 'windows7Guest',
  //       vnics: [
  //         {
  //           vnic_id: 0,
  //           network_name: '172.16.55.0 Failover Network',
  //           is_connected: true
  //         }
  //       ]
  //     },
  //     {
  //       uuid: '',
  //       name: 'windows-as-01',
  //       vapp_uuid: '',
  //       operatingSystem: 'ubuntu64Guest',
  //       vnics: [
  //         {
  //           vnic_id: 0,
  //           network_name: '172.16.55.0 Failover Network',
  //           is_connected: true
  //         }
  //       ]
  //     },
  //     {
  //       uuid: '',
  //       name: 'Alert Resource Non Regression VM',
  //       vapp_uuid: '',
  //       operatingSystem: 'windows7Guest',
  //       vnics: [
  //         {
  //           vnic_id: 0,
  //           network_name: '172.16.55.0 Failover Network',
  //           is_connected: true
  //         }
  //       ]
  //     },
  //     {
  //       uuid: '',
  //       name: 'AutomatedSecurityTest1',
  //       vapp_uuid: '',
  //       operatingSystem: 'windows7Guest',
  //       vnics: [
  //         {
  //           vnic_id: 0,
  //           network_name: '172.16.55.0 Failover Network',
  //           is_connected: true
  //         }
  //       ]
  //     },
  //     {
  //       uuid: '',
  //       name: 'CatalogResourceNonRegression1',
  //       vapp_uuid: '',
  //       operatingSystem: 'ubuntu64Guest',
  //       vnics: [
  //         {
  //           vnic_id: 0,
  //           network_name: '172.16.55.0 Failover Network',
  //           is_connected: true
  //         }
  //       ]
  //     },
  //     {
  //       uuid: '',
  //       name: 'lin-hytrust-01',
  //       vapp_uuid: '',
  //       operatingSystem: 'windows7Guest',
  //       vnics: [
  //         {
  //           vnic_id: 0,
  //           network_name: '172.16.55.0 Failover Network',
  //           is_connected: true
  //         }
  //       ]
  //     },
  //     {
  //       uuid: '',
  //       name: 'Alert Resource Non Regression VM',
  //       vapp_uuid: '',
  //       operatingSystem: 'windows7Guest',
  //       vnics: [
  //         {
  //           vnic_id: 0,
  //           network_name: '172.16.55.0 Failover Network',
  //           is_connected: true
  //         }
  //       ]
  //     },
  //     {
  //       uuid: '',
  //       name: 'AutomatedSecurityTest1',
  //       vapp_uuid: '',
  //       operatingSystem: 'windows7Guest',
  //       vnics: [
  //         {
  //           vnic_id: 0,
  //           network_name: 'A',
  //           is_connected: true
  //         }
  //       ]
  //     },
  //     {
  //       uuid: '',
  //       name: 'CatalogResourceNonRegression1',
  //       vapp_uuid: '',
  //       operatingSystem: 'ubuntu64Guest',
  //       vnics: [
  //         {
  //           vnic_id: 0,
  //           network_name: '172.16.55.0 Failover Network',
  //           is_connected: true
  //         }
  //       ]
  //     },
  //     {
  //       uuid: '',
  //       name: 'lin-hytrust-01',
  //       vapp_uuid: '',
  //       operatingSystem: 'windows7Guest',
  //       vnics: [
  //         {
  //           vnic_id: 0,
  //           network_name: '172.16.55.0 Failover Network',
  //           is_connected: true
  //         }
  //       ]
  //     },
  //     {
  //       uuid: '',
  //       name: 'windows-as-01',
  //       vapp_uuid: '',
  //       operatingSystem: 'ubuntu64Guest',
  //       vnics: [
  //         {
  //           vnic_id: 0,
  //           network_name: 'A',
  //           is_connected: true
  //         }
  //       ]
  //     }
  //   ]
  // },
  // 13. vms with max amount of vnics - width edge case
  {
    uuid: '',
    name: 'BillingResourceNonRegressionoooo',
    vapp_networks: [
      {
        uuid: '0',
        name: '0',
        vapp_uuid: '',
        fence_mode: 'BRIDGED'
      },
      {
        uuid: '1',
        name: '1',
        vapp_uuid: '',
        fence_mode: 'BRIDGED'
      },
      {
        uuid: '2',
        name: '2',
        vapp_uuid: '',
        fence_mode: 'BRIDGED'
      },
      {
        uuid: '3',
        name: '3',
        vapp_uuid: '',
        fence_mode: 'BRIDGED'
      },
      {
        uuid: '4',
        name: '4',
        vapp_uuid: '',
        fence_mode: 'BRIDGED'
      },
      {
        uuid: '5',
        name: '5',
        vapp_uuid: '',
        fence_mode: 'BRIDGED'
      },
      {
        uuid: '6',
        name: '6',
        vapp_uuid: '',
        fence_mode: 'BRIDGED'
      },
      {
        uuid: '7',
        name: '7',
        vapp_uuid: '',
        fence_mode: 'BRIDGED'
      },
      {
        uuid: '8',
        name: '8',
        vapp_uuid: '',
        fence_mode: 'BRIDGED'
      },
      {
        uuid: '9',
        name: '9',
        vapp_uuid: '',
        fence_mode: 'BRIDGED'
      },
      {
        uuid: '10',
        name: '10',
        vapp_uuid: '',
        fence_mode: 'BRIDGED'
      },
      {
        uuid: '11',
        name: '11',
        vapp_uuid: '',
        fence_mode: 'BRIDGED'
      },
      {
        uuid: '12',
        name: '12',
        vapp_uuid: '',
        fence_mode: 'BRIDGED'
      },
      {
        uuid: '13',
        name: '13',
        vapp_uuid: '',
        fence_mode: 'BRIDGED'
      },
      {
        uuid: '14',
        name: '14',
        vapp_uuid: '',
        fence_mode: 'BRIDGED'
      },
      {
        uuid: '15',
        name: '15',
        vapp_uuid: '',
        fence_mode: 'BRIDGED'
      },
      {
        uuid: '16',
        name: '16',
        vapp_uuid: '',
        fence_mode: 'BRIDGED'
      },
      {
        uuid: '17',
        name: '17',
        vapp_uuid: '',
        fence_mode: 'BRIDGED'
      },
      {
        uuid: '18',
        name: '18',
        vapp_uuid: '',
        fence_mode: 'BRIDGED'
      },
      {
        uuid: '19',
        name: '19',
        vapp_uuid: '',
        fence_mode: 'BRIDGED'
      },
      {
        uuid: '20',
        name: '20',
        vapp_uuid: '',
        fence_mode: 'BRIDGED'
      },
      {
        uuid: '21',
        name: '21',
        vapp_uuid: '',
        fence_mode: 'BRIDGED'
      },
      {
        uuid: '22',
        name: '22',
        vapp_uuid: '',
        fence_mode: 'BRIDGED'
      },
      {
        uuid: '23',
        name: '23',
        vapp_uuid: '',
        fence_mode: 'BRIDGED'
      },
      {
        uuid: '24',
        name: '24',
        vapp_uuid: '',
        fence_mode: 'BRIDGED'
      },
      {
        uuid: '25',
        name: '25',
        vapp_uuid: '',
        fence_mode: 'BRIDGED'
      },
      {
        uuid: '26',
        name: '26',
        vapp_uuid: '',
        fence_mode: 'BRIDGED'
      },
      {
        uuid: '27',
        name: '27',
        vapp_uuid: '',
        fence_mode: 'BRIDGED'
      },
      {
        uuid: '28',
        name: '28',
        vapp_uuid: '',
        fence_mode: 'BRIDGED'
      },
      {
        uuid: '29',
        name: '29',
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
            network_name: '0',
            is_connected: true
          },
          {
            vnic_id: 1,
            network_name: '1',
            is_connected: true
          },
          {
            vnic_id: 2,
            network_name: '2',
            is_connected: true
          },
          {
            vnic_id: 3,
            network_name: '3',
            is_connected: true
          },
          {
            vnic_id: 4,
            network_name: '4',
            is_connected: true
          },
          {
            vnic_id: 5,
            network_name: '5',
            is_connected: true
          },
          {
            vnic_id: 6,
            network_name: '6',
            is_connected: true
          },
          {
            vnic_id: 7,
            network_name: '7',
            is_connected: true
          },
          {
            vnic_id: 8,
            network_name: '8',
            is_connected: true
          },
          {
            vnic_id: 9,
            network_name: '9',
            is_connected: true
          }
        ]
      },
      {
        uuid: '',
        name: 'AutomatedSecurityTest1',
        vapp_uuid: '',
        operatingSystem: 'windows7Guest',
        vnics: [
          {
            vnic_id: 0,
            network_name: '10',
            is_connected: true
          },
          {
            vnic_id: 1,
            network_name: '11',
            is_connected: true
          },
          {
            vnic_id: 2,
            network_name: '12',
            is_connected: true
          },
          {
            vnic_id: 3,
            network_name: '13',
            is_connected: true
          },
          {
            vnic_id: 4,
            network_name: '14',
            is_connected: true
          },
          {
            vnic_id: 5,
            network_name: '15',
            is_connected: true
          },
          {
            vnic_id: 6,
            network_name: '16',
            is_connected: true
          },
          {
            vnic_id: 7,
            network_name: '17',
            is_connected: true
          },
          {
            vnic_id: 8,
            network_name: '18',
            is_connected: true
          },
          {
            vnic_id: 9,
            network_name: '19',
            is_connected: true
          }
        ]
      },
      {
        uuid: '',
        name: 'AutomatedSecurityTest2',
        vapp_uuid: '',
        operatingSystem: 'windows7Guest',
        vnics: [
          {
            vnic_id: 0,
            network_name: '20',
            is_connected: true
          },
          {
            vnic_id: 1,
            network_name: '21',
            is_connected: true
          },
          {
            vnic_id: 2,
            network_name: '22',
            is_connected: true
          },
          {
            vnic_id: 3,
            network_name: '23',
            is_connected: true
          },
          {
            vnic_id: 4,
            network_name: '24',
            is_connected: true
          },
          {
            vnic_id: 5,
            network_name: '25',
            is_connected: true
          },
          {
            vnic_id: 6,
            network_name: '26',
            is_connected: true
          },
          {
            vnic_id: 7,
            network_name: '27',
            is_connected: true
          },
          {
            vnic_id: 8,
            network_name: '28',
            is_connected: true
          },
          {
            vnic_id: 9,
            network_name: '29',
            is_connected: true
          }
        ]
      }
    ]
  },
    // 14. a lot of vms attached to their own network - width edge case
  {
    uuid: '',
    name: 'BillingResourceNonRegressionoooo',
    vapp_networks: [
      {
        uuid: '0',
        name: '0',
        vapp_uuid: '',
        fence_mode: 'BRIDGED'
      },
      {
        uuid: '1',
        name: '1',
        vapp_uuid: '',
        fence_mode: 'BRIDGED'
      },
      {
        uuid: '2',
        name: '2',
        vapp_uuid: '',
        fence_mode: 'BRIDGED'
      },
      {
        uuid: '3',
        name: '3',
        vapp_uuid: '',
        fence_mode: 'BRIDGED'
      },
      {
        uuid: '4',
        name: '4',
        vapp_uuid: '',
        fence_mode: 'BRIDGED'
      },
      {
        uuid: '5',
        name: '5',
        vapp_uuid: '',
        fence_mode: 'BRIDGED'
      },
      {
        uuid: '6',
        name: '6',
        vapp_uuid: '',
        fence_mode: 'BRIDGED'
      },
      {
        uuid: '7',
        name: '7',
        vapp_uuid: '',
        fence_mode: 'BRIDGED'
      },
      {
        uuid: '8',
        name: '8',
        vapp_uuid: '',
        fence_mode: 'BRIDGED'
      },
      {
        uuid: '9',
        name: '9',
        vapp_uuid: '',
        fence_mode: 'BRIDGED'
      },
      {
        uuid: '10',
        name: '10',
        vapp_uuid: '',
        fence_mode: 'BRIDGED'
      },
      {
        uuid: '11',
        name: '11',
        vapp_uuid: '',
        fence_mode: 'BRIDGED'
      },
      {
        uuid: '12',
        name: '12',
        vapp_uuid: '',
        fence_mode: 'BRIDGED'
      }
    ],
    vms: [
      {
        uuid: '',
        name: 'Alert Resource Non Regression VM',
        vapp_uuid: '',
        operatingSystem: 'windows7Guest',
        vnics: [
          {
            vnic_id: 0,
            network_name: '0',
            is_connected: true
          }
        ]
      },
      {
        uuid: '',
        name: 'AutomatedSecurityTest1',
        vapp_uuid: '',
        operatingSystem: 'windows7Guest',
        vnics: [
          {
            vnic_id: 0,
            network_name: '1',
            is_connected: true
          }
        ]
      },
      {
        uuid: '',
        name: 'CatalogResourceNonRegression1',
        vapp_uuid: '',
        operatingSystem: 'ubuntu64Guest',
        vnics: [
          {
            vnic_id: 0,
            network_name: '2',
            is_connected: true
          }
        ]
      },
      {
        uuid: '',
        name: 'lin-hytrust-01',
        vapp_uuid: '',
        operatingSystem: 'windows7Guest',
        vnics: [
          {
            vnic_id: 0,
            network_name: '3',
            is_connected: true
          }
        ]
      },
      {
        uuid: '',
        name: 'Alert Resource Non Regression VM',
        vapp_uuid: '',
        operatingSystem: 'windows7Guest',
        vnics: [
          {
            vnic_id: 0,
            network_name: '4',
            is_connected: true
          }
        ]
      },
      {
        uuid: '',
        name: 'AutomatedSecurityTest1',
        vapp_uuid: '',
        operatingSystem: 'windows7Guest',
        vnics: [
          {
            vnic_id: 0,
            network_name: '5',
            is_connected: true
          }
        ]
      },
      {
        uuid: '',
        name: 'CatalogResourceNonRegression1',
        vapp_uuid: '',
        operatingSystem: 'ubuntu64Guest',
        vnics: [
          {
            vnic_id: 0,
            network_name: '6',
            is_connected: true
          }
        ]
      },
      {
        uuid: '',
        name: 'lin-hytrust-01',
        vapp_uuid: '',
        operatingSystem: 'windows7Guest',
        vnics: [
          {
            vnic_id: 0,
            network_name: '7',
            is_connected: true
          }
        ]
      },
      {
        uuid: '',
        name: 'windows-as-01',
        vapp_uuid: '',
        operatingSystem: 'ubuntu64Guest',
        vnics: [
          {
            vnic_id: 0,
            network_name: '8',
            is_connected: true
          }
        ]
      },
      {
        uuid: '',
        name: 'Alert Resource Non Regression VM',
        vapp_uuid: '',
        operatingSystem: 'windows7Guest',
        vnics: [
          {
            vnic_id: 0,
            network_name: '9',
            is_connected: true
          }
        ]
      },
      {
        uuid: '',
        name: 'AutomatedSecurityTest1',
        vapp_uuid: '',
        operatingSystem: 'windows7Guest',
        vnics: [
          {
            vnic_id: 0,
            network_name: '10',
            is_connected: true
          }
        ]
      },
      {
        uuid: '',
        name: 'CatalogResourceNonRegression1',
        vapp_uuid: '',
        operatingSystem: 'ubuntu64Guest',
        vnics: [
          {
            vnic_id: 0,
            network_name: '11',
            is_connected: true
          }
        ]
      },
      {
        uuid: '',
        name: 'lin-hytrust-01',
        vapp_uuid: '',
        operatingSystem: 'windows7Guest',
        vnics: [
          {
            vnic_id: 0,
            network_name: '12',
            is_connected: true
          }
        ]
      }
    ]
  },
    // 15. mixed lengths - vnic connections
  {
    uuid: '',
    name: 'BC Test vApp',
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
      },
      {
        uuid: '2',
        name: 'C',
        vapp_uuid: '',
        fence_mode: 'BRIDGED'
      },
      {
        uuid: '3',
        name: 'D',
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
      },
      {
        uuid: '',
        name: 'windows-as-02',
        vapp_uuid: '',
        operatingSystem: 'ubuntu64Guest',
        vnics: [
          {
            vnic_id: 0,
            network_name: 'C',
            is_connected: true
          }
        ]
      },
      {
        uuid: '',
        name: 'windows-as-03',
        vapp_uuid: '',
        operatingSystem: 'ubuntu64Guest',
        vnics: [
          {
            vnic_id: 0,
            network_name: 'B',
            is_connected: true
          },
          {
            vnic_id: 1,
            network_name: 'D',
            is_connected: true
          }
        ]
      }
    ]
  },
    // 16. mixed connected and disconnected vnics
  {
    uuid: '',
    name: 'BC Test vApp',
    vapp_networks: [
      {
        uuid: '1',
        name: 'A',
        vapp_uuid: '',
        fence_mode: 'BRIDGED'
      },
      {
        uuid: '2',
        name: 'B',
        vapp_uuid: '',
        fence_mode: 'BRIDGED'
      },
      {
        uuid: '3',
        name: 'C',
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
            network_name: '',
            is_connected: false
          },
          {
            vnic_id: 2,
            network_name: '',
            is_connected: false
          },
          {
            vnic_id: 3,
            network_name: '',
            is_connected: false
          }
        ]
      },
      {
        uuid: '',
        name: 'windows-as-02',
        vapp_uuid: '',
        operatingSystem: 'ubuntu64Guest',
        vnics: [
          {
            vnic_id: 0,
            network_name: 'B',
            is_connected: true
          },
          {
            vnic_id: 1,
            network_name: '',
            is_connected: false
          }
        ]
      },
      {
        uuid: '',
        name: 'windows-as-03',
        vapp_uuid: '',
        operatingSystem: 'ubuntu64Guest',
        vnics: [
          {
            vnic_id: 0,
            network_name: 'C',
            is_connected: true
          }
        ]
      }
    ]
  }
];
