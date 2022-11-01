import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/Shared/models/Dtos/user.models';
import { UserService } from 'src/app/Shared/services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  public form : FormGroup = new FormGroup([]);

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.form = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      birthDate: new FormControl('', [Validators.required]),
      idNumber: new FormControl('', [Validators.required]),
      status: new FormControl(0, [Validators.required]),
      address: new FormGroup({
        city: new FormControl('', [Validators.required]),
        street: new FormControl('', [Validators.required]),
        number: new FormControl('', [Validators.required]),
        state: new FormControl('', [Validators.required]),
        zip: new FormControl('', [Validators.required])
      })
    });
  }

  public createUser(): void{
    const user : User = {
      ...this.form.value
    } as User;

    this.userService.post(user).subscribe(()=>{
      alert('Se creó el usuario correctamente');
      this.resetForm();
    },()=>{
      alert('Error al crear el usuario');
      this.resetForm();
    });
  }

  private resetForm(): void {
    this.form.reset();
  }
}
