import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-file',
  templateUrl: './file.page.html',
  styleUrls: ['./file.page.scss'],
})
export class FilePage implements OnInit {

  data: any = [];
  data_faculties: any = [];
  showDetails: boolean[] = new Array(1000).fill(false);
  dataUrl = 'https://api.jsonbin.io/v3/b/65dc773fdc74654018aa03a2';
  loading: any;

  constructor(public loadingController:LoadingController) { }

  async load() {
    this.loading = await this.loadingController.create ({
      spinner: "bubbles",
      message: 'Loading...'
    });

    await this.loading.present();

    fetch(this.dataUrl).then(res => res.json())
    .then(json => {
      this.data = json;
      this.data = this.data.record;
      let i = 0;
      console.log(this.data);
      while(this.data[i] != undefined) {
        this.data_faculties.push(this.data[i]);
        i++;
      }
      console.log(this.data_faculties);
      this.loading.dismiss();
    })
  }

  toggleDetails(i:number)
  {
    if(this.showDetails[i])
    {
      this.showDetails[i] = false;
    }

    else
    {
      this.showDetails[i] = true;
    }
  }

  getColor(original: any, name: any) {
    let name_original = original.toString();
    let name_input = name.toString();
    return name_original == name_input ? 'green' : '';
  }

  ngOnInit() {
  }

}
