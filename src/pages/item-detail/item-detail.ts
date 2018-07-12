import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';

import { Items } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage {
  item: any;

  constructor(public navCtrl: NavController, navParams: NavParams, items: Items, public modalCtrl: ModalController) {
    this.item = navParams.get('item') || items.defaultItem;
  }

  /**
   * Prompt the user to add a new item. This shows our ItemCreatePage in a
   * modal and then adds the new item to our data source if the user created one.
   */
  addItem(itemType: any) {
    let addModal = this.modalCtrl.create('ItemCreatePage',  {itemType: itemType});
    // habría que enviar el item

    addModal.onDidDismiss(item => {
      if (item) {
        this.item.history.push({'value': this.item.value, 'date': this.item.date});
        console.log(this.item.history);
        this.item.value= item.value;
        this.item.date= item.date;
      }
    })
    addModal.present();
  }

}
