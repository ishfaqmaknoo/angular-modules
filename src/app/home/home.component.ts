import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { AlertService } from '../alert/alert.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  options = {
    autoClose:false,
    keepAfterRouteChange: true
  }

  constructor(private alertService: AlertService, private router: Router, private routes:ActivatedRoute){}
  
  ngOnInit(){}

  success(){
    this.router.events.subscribe(event=>{
      if(event instanceof NavigationEnd){
        console.log(event.url)
      }
    })
    this.alertService.success('This post is updated successfully')
    this.router.navigate(["/contact"],{relativeTo: this.routes})
    console.log('alert called in process');
  }

  warning(){
    this.alertService.error('This post have some warning')
  }

  error(){
    this.alertService.error('this post have some error')
  }
}
