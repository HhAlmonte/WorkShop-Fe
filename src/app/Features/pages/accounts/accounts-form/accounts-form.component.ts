import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Accounts } from 'src/app/Shared/models/Dtos/accounts.models';
import { accountService } from 'src/app/Shared/services/accounts.service';

@Component({
  selector: 'app-accounts-form',
  templateUrl: './accounts-form.component.html',
  styleUrls: ['./accounts-form.component.scss']
})
export class AccountsFormComponent implements OnInit {
  public form : FormGroup = new FormGroup([]);

  constructor(private accountService: accountService) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  public submit() : void{
    const account : Accounts = {
      ...this.form.value
    } as Accounts;
    this.accountService.post(account).subscribe(() => {
      alert('Se creó correctamente');
    },(data) =>{
      this.resetForm();
      alert(data);
    });
  }

  private initializeForm():void {
    this.form = new FormGroup({
      accountNumber: new FormControl('', [Validators.required]),
      accountType: new FormControl('', [Validators.required]),
      balance: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required]),
      userId: new FormControl('', [Validators.required])
    });
  }

  private resetForm():void{
    this.form.reset();
  }
}
