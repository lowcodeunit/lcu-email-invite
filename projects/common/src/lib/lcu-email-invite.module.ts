import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FathymSharedModule, MaterialModule } from '@lcu/common';
import { EmailInviteService } from './services/email-invite.service';
import { EmailInviteComponent } from './controls/email-invite/email-invite.component';
import { EmailInviteDirective } from './directives/email-invite.directive';

@NgModule({
  declarations: [EmailInviteComponent, EmailInviteDirective],
  imports: [
    FathymSharedModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule
  ],
  exports: [EmailInviteComponent, EmailInviteDirective],
  entryComponents: []
})
export class LcuEmailInviteModule {
  static forRoot(): ModuleWithProviders <LcuEmailInviteModule>{
    return {
      ngModule: LcuEmailInviteModule,
      providers: [EmailInviteService]
    };
  }
}
