import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WorkShop-Fe';
  Peoples:Person[]=[];
  Person:Person = this.SetDefaultPerson();

  SetDefaultPerson(){
    return{
      id: 0,
      nombre: "",
      apellido: "",
      edad: 0,
      city: ""
    }
  }

  cities = {
    "1": "Bogota",
    "2": "Medellin",
    "3": "Cali",
    "4": "Barranquilla",
  }

  setData(event:any, field:string){
    let data = event.target.value;
    switch(field){
      case "nombre":
        this.Person.nombre = data;
        break;
      case "apellido":
        this.Person.apellido = data;
        break;
      case "edad":
        this.Person.edad = data;
        break;
      case "city":
        this.Person.city = data;
        break;
    }
  }

  setElement(element:Person){
    this.Person = element;
  }

  getLastIndex(){
    if(!this.Peoples.length){
      return 0;
    }

    let elementsAmount = this.Peoples.length;
    return this.Peoples[elementsAmount - 1].id;
  }

  Validator(){
    const blankElement = this.SetDefaultPerson();

    let invalid = this.Person.nombre == blankElement.nombre ||
                  this.Person.apellido == blankElement.apellido ||
                  this.Person.edad == blankElement.edad ||
                  this.Person.city == blankElement.city;
    return invalid;
  }

  Add(){
    if(this.Validator()){
      alert("Todos los campos son obligatorios");
    }

    this.Person.id = this.getLastIndex() + 1;
    this.Peoples.push(this.Person);
    this.Person = this.SetDefaultPerson();
  }

  Delete(){
    let index = this.Peoples.findIndex(x => x.id == this.Person.id);
    this.Peoples.splice(index, 1);
    this.Person = this.SetDefaultPerson();
  }

  Update(){
    let index = this.Peoples.findIndex(x => x.id == this.Person.id);
    this.Peoples[index] = this.Person;
    this.Person = this.SetDefaultPerson();
  }
}

export interface Person{
  id:number;
  nombre: string;
  apellido: string;
  edad: number;
  city: string;
}

