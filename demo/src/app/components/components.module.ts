import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VmBasicDemoComponent } from './vm-basic-demo-component/vm-basic-demo.component';
import { ComponentsPageComponent } from './components-page/components-page.component';
import { ComponentsRoutingModule } from './components-routing.module';

import { FormsModule } from '@angular/forms';
import { DemoComponent } from './demo-component/demo.component';
import { VmPageComponent } from './vm-page-component/vm-page.component';
import { VmCreateDemoComponent } from './vm-create-demo-component/vm-create-demo.component';
import { VmDeleteDemoComponent } from './vm-delete-demo-component/vm-delete-demo.component';
import { VappPageComponent } from './vapp-page-component/vapp-page.component';
import { VappBasicDemoComponent } from './vapp-basic-demo-component/vapp-basic-demo.component';
import { MiscPageComponent } from './misc-page-component/misc-page.component';
import { MiscScrollbarHorizontalDemoComponent } from
    './misc-scrollbar-demo-component/misc-scrollbar-horizontal-demo.component';
import { MiscScrollbarVerticalDemoComponent } from
    './misc-scrollbar-demo-component/misc-scrollbar-vertical-demo.component';
import { AnimationPageComponent } from './animation-page-component/animation-page.component';
import { AnimationVappRenameComponent } from './animation-vapp-rename-component/animation-vapp-rename.component';
import { AnimationVappRenameLongComponent } from
    './animation-vapp-rename-component/animation-vapp-rename-long.component';
import { AnimationVappRenameShortComponent } from
    './animation-vapp-rename-component/animation-vapp-rename-short.component';
import { AnimationVappNetworkCreationBridgedComponent } from
    './animation-vapp-network-creation-component/animation-vapp-network-creation-bridged.component';
import { AnimationVappNetworkCreationIsolatedComponent } from
    './animation-vapp-network-creation-component/animation-vapp-network-creation-isolated.component';
import { AnimationVappNetworkCreationNatRoutedComponent } from
    './animation-vapp-network-creation-component/animation-vapp-network-creation-nat-routed.component';
import { SandboxPageComponent } from './sandbox-page-component/sandbox-page.component';
import { SandboxDemoComponent } from './sandbox-demo-component/sandbox-demo.component';

@NgModule({
  declarations: [
    VmPageComponent,
    VmCreateDemoComponent,
    VmDeleteDemoComponent,
    VmBasicDemoComponent,
    ComponentsPageComponent,
    DemoComponent,
    VappPageComponent,
    VappBasicDemoComponent,
    MiscPageComponent,
    MiscScrollbarHorizontalDemoComponent,
    MiscScrollbarVerticalDemoComponent,
    SandboxPageComponent,
    SandboxDemoComponent,
    AnimationPageComponent,
    AnimationVappRenameComponent,
    AnimationVappRenameLongComponent,
    AnimationVappRenameShortComponent,
    AnimationVappNetworkCreationBridgedComponent,
    AnimationVappNetworkCreationIsolatedComponent,
    AnimationVappNetworkCreationNatRoutedComponent
  ],
  imports: [
    ComponentsRoutingModule,
    CommonModule,
    FormsModule
  ],
  exports: []
})
export class ComponentsModule {
}
