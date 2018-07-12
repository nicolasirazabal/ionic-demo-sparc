import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "name": "Peso",
    "profilePic": "assets/img/medical/peso.png",
    "value": "83",
    "unity": "kg",
    "date": "",
    "history":[]
  };


  constructor() {
    let items = [
      {
        "name": "Peso",
        "profilePic": "assets/img/medical/peso.png",
        "value": "83",
        "unity": "kg",
        "date": "",
        "history":[]
      },
      {
        "name": "Cigarrillos",
        "profilePic": "assets/img/medical/cigarrillos.png",
        "value": "3",
        "unity": "por día",
        "date": "",
        "history":[],
        "info":"Consulte sobre prescripción de terapia de sustitución con nicotina y/o nortriptilina o amfebutamona (bupropion) en caso que no haya conseguido dejar de fumar."
      },
      {
        "name": "Colesterol",
        "profilePic": "assets/img/medical/colesterol.png",
        "value": "8",
        "unity": "mmol/l (milimoles por litro).",
        "date": "",
        "history":[]
      },
      {
        "name": "PAS (Presión Arterial Sistólica)",
        "profilePic": "assets/img/medical/pas.png",
        "value": "180",
        "unity": "mm Hg",
        "date": "",
        "history":[]
      }
    ];

    for (let item of items) {
      this.items.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
