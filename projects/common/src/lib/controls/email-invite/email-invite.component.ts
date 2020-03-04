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

@Input('button-text')
public ButtonText: string;

@Input('input-background-color')
public InputBackgroundColor: string;

@Input('input-width')
public InputWidth: string;

@Input('title')
public Title: string;

@Input('text-color')
public TextColor: string;

@Input('placeholder')
public Placeholder: string;

@Input('input-height')
public InputHeight: string;

@Output('invite-clicked')
public InviteClicked: EventEmitter<any>;

  constructor() {
    this.InviteClicked = new EventEmitter<any>();
  }

  public ngOnInit(): void { 
    this.setDefaults();
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

  protected setDefaults(){
    if(!this.ButtonColor){
      this.ButtonColor = "primary";
    }

    if(!this.ButtonText){
      this.ButtonText = "Send"
    }
    if(!this.Title){
      this.Title = "List Emails"
    }

    if(!this.InputBackgroundColor){
      this.InputBackgroundColor = "white";
    }
    if(!this.InputWidth){
      this.InputWidth = "200px"
    }
    if(!this.InputHeight){
      this.InputHeight = "20px"
    }
    if(!this.TextColor){
      this.TextColor = "grey"
    }

  if(!this.Placeholder){
    this.Placeholder = "Enter Email Address"
  }
  }


}
