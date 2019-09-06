import { Component } from '@angular/core';

@Component({
  selector: 'animation-request-page',
  template: `
    <div id="animation-request-page">
      <animation-vapp-rename></animation-vapp-rename>
      <animation-vapp-rename-long></animation-vapp-rename-long>
      <animation-vapp-rename-short></animation-vapp-rename-short>
      <animation-vapp-network-creation-bridged></animation-vapp-network-creation-bridged>
      <animation-vapp-network-creation-nat-routed></animation-vapp-network-creation-nat-routed>
      <animation-vapp-network-creation-isolated></animation-vapp-network-creation-isolated>
    </div>
  `
})
export class AnimationPageComponent {
}
