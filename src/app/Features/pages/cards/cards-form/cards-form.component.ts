import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Card } from 'src/app/Shared/models/Dtos/card.models';
import { cardService } from 'src/app/Shared/services/cards.service';

@Component({
  selector: 'app-cards-form',
  templateUrl: './cards-form.component.html',
  styleUrls: ['./cards-form.component.scss']
})
export class CardsFormComponent implements OnInit {

  public form : FormGroup = new FormGroup([]);

  constructor(public cardService: cardService) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  submit(): void{
    const card: Card = {
      ...this.form.value
    } as Card;

    this.cardService.post(card).subscribe(() =>{
      alert('Se creó correctamente');
      this.resetForm();
    },(data)=> {
      alert(data)
      this.resetForm();
    });
  }

  private initializeForm(): void{
    this.form = new FormGroup({
      cardNumber: new FormControl('', [Validators.required]),
      cardType: new FormControl(0, [Validators.required]),
      status: new FormControl(0, [Validators.required]),
      ammount: new FormControl(0, [Validators.required]),
      balance: new FormControl(0, [Validators.required]),
      userId: new FormControl(0, [Validators.required])
    });
  };

  private resetForm() : void {
    this.form.reset();
  }
}
