import { Component, OnInit } from '@angular/core';
import { AlertService } from './alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  message:any;
  isOpen:boolean = false;

  constructor(private alertService: AlertService) { }

  ngOnInit(): void {
    this.alertService.clear();
    this.alertService.alertMessage$.subscribe(message => {
      if(message){
        console.log(message)
        this.message = message;
        this.isOpen = true;
      }
      
      setTimeout(() => {
        this.close();   
      }, 6000)
    })
  }

  close(){
    this.isOpen = !this.isOpen;
    console.log('clicked');
  }

}
