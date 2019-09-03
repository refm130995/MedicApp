import {
  Component
} from '@angular/core';
import {
  IonicPage,
  ModalController,
  NavController
} from 'ionic-angular';
import {
  ListProvider
} from '../../providers/list/list';

@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {
  currentItems: any = [];
  page = 0;
  scroll: Boolean = false;
  public searchTerm: string = "";
  public items: any = [];
  constructor(public navCtrl: NavController, public service: ListProvider, public modalCtrl: ModalController) {

  }


  ionViewDidLoad() {
   this.GetData();
  }

  
  
  GetData(event?:any) {
    this.service.GetOcuppations(this.page).share().subscribe((result) => {
      if (this.page > 0) {
        var data = result['specialitys'];
        if (data.length > 0) {
          for (var i in data) {
            this.currentItems.push(data[i]);
          }
          this.items = this.currentItems;
        } else {
          this.scroll = true;
        }
        this.page++;
      } else {
        this.currentItems = result['specialitys'];
        this.items = this.currentItems;
        this.page++;
      }
      if (event) {
        event.complete();
      }
    })
  }
  
  setFilteredItems() {
    this.currentItems = this.filterItems(this.searchTerm);
  }
  
  filterItems(searchTerm) {
    return this.items.filter(item => {
      return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }
  openItem(item: any) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }

  searchBySpeciality(item: any) {
    this.navCtrl.push('ListNamesPage', {
      speciality: item
    });
  }
  /**
   * Funciones del perfil Admin.
   */
  deleteItem(item) {
    /*    this.items.delete(item); */
  }
  
    addItem() {
      let addModal = this.modalCtrl.create('ItemCreatePage');
      addModal.onDidDismiss(item => {
        if (item) {
          /*   this.items.add(item); */
        }
      })
      addModal.present();
    }
}