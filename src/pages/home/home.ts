import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  @ViewChild(Slides) private slides: Slides;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.slideInit();
  }

  slideInit() {
    this.slides.effect = 'coverflow';
    this.slides.centeredSlides = true;
    this.slides.slidesPerView = 2;
    this.slides.spaceBetween = 15;

    this.slides.coverflow = {
      rotate: 0,
      stretch: 0,
      depth: 50,
      modifier: 1,
      slideShadows: false,
    }
  }
}
