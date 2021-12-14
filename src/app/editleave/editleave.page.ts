import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DatahelperService } from '../provider/datahelper.service';
import { FormGroup, Validators , FormControl , FormBuilder } from '@angular/forms';
import { UtilsService } from '../provider/utils.service';
import firebase from 'firebase';
@Component({
  selector: 'app-editleave',
  templateUrl: './editleave.page.html',
  styleUrls: ['./editleave.page.scss'],
})
export class EditleavePage implements OnInit {

  leave:any=[];
  public editleave:FormGroup ;
  constructor(public navCtrl:NavController,public dataHelper:DatahelperService ,public _fb:FormBuilder,public utils:UtilsService) { }

  ngOnInit() {
    this.editleave = this._fb.group({
      title: ['', Validators.compose([
        Validators.required,
      ])],
      description: ['', Validators.compose([
        Validators.required,
      ])],
    
    })
  }


  devBack(){
    this.navCtrl.pop();
  }
}
