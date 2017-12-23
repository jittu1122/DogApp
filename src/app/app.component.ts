import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  imageD = {};
  selectedBreed = '';
  breedsA: {};
  constructor(private http: HttpClient) {
  }
  ngOnInit(): void {
    this.imageD = {status: "success", message: "../assets/dog_icon-1.png"};
    this.http.get('https://dog.ceo/api/breeds/list').subscribe(data => {
      this.breedsA = data;
    });
   /* this.getName('akita');*/
  }
  getImage(BrName) {
    this.http.get('https://dog.ceo/api/breed/' + BrName + '/images/random').subscribe(data2 => {
      this.imageD = data2;
      this.selectedBreed = BrName;
    });
  }
  /*getName(BreedName){
    this.http.get('https://dog.ceo/api/breed/' + BreedName + '/list').subscribe(data2 => {
      for (var n = 1; n <= data2.message.length; n++) {
        ifTrue(data2.message[n-1]){
          console.log(data2.message[n-1] + '/' + BreedName);
        }else{
          console.log(BreedName);
        }

      }
    });
  }*/

}

