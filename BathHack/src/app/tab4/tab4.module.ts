import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab4Page } from './tab4.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


import { Tab4PageRoutingModule } from './tab4-routing.module';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab4PageRoutingModule
  ],
  declarations: [Tab4Page]
})
export class Tab4PageModule {}
