import { Injectable, Injector } from '@angular/core';
import { StateContext } from '@lcu/common';
import { EmailInviteModel } from '../models/email-invite.model';

@Injectable({
    providedIn: 'root'
})
export class EmailInviteManagerContext extends StateContext<EmailInviteModel> {

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
    
    protected loadStateKey(): string {
        return 'main';
    }

    protected loadStateName(): string {
        return 'email-invite';
    }
}
