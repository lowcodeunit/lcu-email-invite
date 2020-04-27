import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'lcu-email-invite',
  templateUrl: './email-invite.component.html',
  styleUrls: ['./email-invite.component.scss']
})
export class EmailInviteComponent implements OnInit {
public InviteForm: FormGroup;

public EmailTemplate: FormGroup;

@Input('button-color')
public ButtonColor: string;

@Input('button-hover-color')
public ButtonHoverColor: string;

@Input('button-text')
public ButtonText: string;

@Input('button-text-color')
public ButtonTextColor: string;

@Input('input-background-color')
public InputBackgroundColor: string;

@Input('input-width')
public InputWidth: string;

// @Input('title')
// public Title: string;

@Input('text-color')
public TextColor: string;

@Input('placeholder')
public Placeholder: string;

@Input('input-height')
public InputHeight: string;

@Output('invite-clicked')
public InviteClicked: EventEmitter<any>;

public MasterButtonColor: string;

  constructor() {
    this.InviteClicked = new EventEmitter<any>();
  }

  public ngOnInit(): void { 
    this.setDefaults();
    this.MasterButtonColor = this.ButtonColor;
    this.InviteForm = new FormGroup({
      emailInvite: new FormControl('', {validators:[Validators.required, Validators.email]})
    })

    this.EmailTemplate = new FormGroup({
      title: new FormControl('', {validators:[Validators.required]}),
      subTitle: new FormControl('', {validators:[Validators.required]}),
      messageBody: new FormControl('', {validators:[Validators.required]}),
    })
  }
  public Invite(){
    let emailCheck:string = this.InviteForm.value.emailInvite;
    let emails: Array<string> = new Array<string>();
    if(emailCheck.includes(",")){
      let tempEmails: Array<string> = emailCheck.split(",");
      tempEmails.forEach(em =>{
        let temp = em.trim();
        emails.push(temp);
      })
    }
    else{
      emails.push(this.InviteForm.value.emailInvite);
    }

    this.InviteClicked.emit(emails);
  }

  // public emailIsValid() {
  //   let email = this.InviteForm.value.emailInvite;
  //   return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  // }
public ButtonMouseEnter(){
  this.ButtonColor = this.ButtonHoverColor;
}
public ButtonMouseLeave(){
  this.ButtonColor = this.MasterButtonColor;
}
  protected setDefaults(){
    if(!this.ButtonColor){
      this.ButtonColor = "grey";
    }
    if(!this.ButtonHoverColor){
      this.ButtonHoverColor = "red";
    }
    if(!this.ButtonTextColor){
      this.ButtonTextColor = "white";
    }

    if(!this.ButtonText){
      this.ButtonText = "Send"
    }
    // if(!this.Title){
    //   this.Title = "List Emails"
    // }

    if(!this.InputBackgroundColor){
      this.InputBackgroundColor = "white";
    }
    if(!this.InputWidth){
      this.InputWidth = "200px"
    }
    if(!this.InputHeight){
      this.InputHeight = "35px"
    }
    if(!this.TextColor){
      this.TextColor = "grey"
    }

  if(!this.Placeholder){
    this.Placeholder = "Enter email address"
  }
  }


}
