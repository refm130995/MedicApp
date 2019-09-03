import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ListProvider } from '../../providers/list/list';

@IonicPage()
@Component({
  selector: 'page-hospital',
  templateUrl: 'hospital.html',
})
export class HospitalPage {
  private currentItems: any = [];
  private page = 0;
  public scroll: Boolean = false;
  public searchTerm: string = "";
  public items: any = [];
  constructor(public navCtrl: NavController, public service: ListProvider, public modalCtrl: ModalController, private navParams: NavParams) {
   
  }

  ionViewDidLoad() {
    this.GetData();
   }
   
  GetData(event?:any) {
    this.service.GetHospitals(this.page).share().subscribe((result) => {
      if (this.page > 0) {
        var data = result['hospital'];
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
        this.currentItems = result['hospital'];
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

  searchByHospital(item: any) {
    this.navCtrl.push('ListNamesPage', {
      hospital: item
    });
  }
}
