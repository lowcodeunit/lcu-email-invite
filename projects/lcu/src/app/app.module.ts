import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FathymSharedModule, LCUServiceSettings } from '@lcu/common';
import { environment } from '../environments/environment';
import { LcuEmailInviteModule } from '@lowcodeunit/lcu-email-invite-common';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FathymSharedModule,
    LcuEmailInviteModule.forRoot()
  ],
  providers: [
    {
      provide: LCUServiceSettings,
      useValue: FathymSharedModule.DefaultServiceSettings(environment)
    }
  ],
  exports: [LcuEmailInviteModule]
})
export class AppModule {}
