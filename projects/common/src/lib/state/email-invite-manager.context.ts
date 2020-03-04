import { Injectable, Injector } from '@angular/core';
import { StateManagerContext } from '@lcu/common';
import { EmailInviteModel } from '../models/email-invite.model';

@Injectable({
    providedIn: 'root'
})
export class EmailInviteManagerContext extends StateManagerContext<EmailInviteModel> {

    protected State: EmailInviteModel;

    constructor(protected injector: Injector) {
        super(injector);
    }

    public GetEmailInviteById(id: number): void {
        this.State.Loading = true;

        this.Execute({
            Arguments: {
                EmailInviteId: id
            },
            Type: 'get-email-invite-by-id'
        });
    }
    
    protected async loadStateKey() {
        return 'main';
    }

    protected async loadStateName() {
        return 'email-invite';
    }
}
