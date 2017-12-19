import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as $ from "jquery";
import "slick-carousel";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(public navCtrl: NavController) {   
    
   
  

        $(document).on("click",function(){
          console.log("Hola");
        });

  }
  ionViewDidLoad(){
    $(".myCarousel").slick();
    $('.center').slick({
      centerMode: true,
        centerPadding: '50px',
        slidesToShow: 3,
        adaptiveHeight: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '0px',
              slidesToShow: 3
            }
          }
        ]
      });
  }

  

}

