import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController } from 'ionic-angular';
import { ListProvider } from '../../providers/list/list';


@IonicPage()
@Component({
  selector: 'page-list-names',
  templateUrl: 'list-names.html',
})
export class ListNamesPage {
  private currentItems: any = [];
  private page = 0;
  public scroll: Boolean = false;
  public searchTerm: string = "";
  public items: any = [];
  public hospital: any = null; 
  private speciality: any = null;
  constructor(public navCtrl: NavController, public service: ListProvider, public modalCtrl: ModalController, private navParams: NavParams, private toastCtrl: ToastController) {
    this.speciality = this.navParams.get('speciality');
    this.hospital = this.navParams.get('hospital');
  }

  ionViewDidLoad() {
    this.GetData();
   }
   
  GetData(event?:any) {
    this.service.GetDoctorsBy(this.page, this.hospital, this.speciality).share().subscribe((result) => {
      if (this.page > 0) {
        var data = result['doctors'];
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
        this.currentItems = result['doctors'];
        this.items = this.currentItems;
        this.page++;
        if(result['doctors'].length == 0){
          const toast = this.toastCtrl.create({
            message: 'No se encontró ningún Doctor asociado',
            duration: 3000,
            position:'bottom' 
          });
          toast.present();
          this.navCtrl.pop();
        } 
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
      return item.firstname.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }
  openItem(item: any) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }
}
