import { Component, Input } from '@angular/core';
import { AppService } from '../app.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  TareaL="";
  TareaMa="";
  TareaMi="";
  TareaJ="";
  TareaV="";
  TareaS="";
  TareaD="";

  userName: String= "";
  constructor(private appService: AppService, private router:Router, private activedRouter:ActivatedRoute,private menuCtrl: MenuController) {
    this.appService.getUserName.subscribe(u=>{this.userName=u
    console.log("funciono "+u)})

    


    this.appService.getTareaLunes.subscribe(u=>{this.TareaL=u
      console.log("funciono tarea Lunes "+u)})

    this.appService.getTareaMartes.subscribe(u=>{this.TareaMa=u
      console.log("funciono tarea Martes "+u)})

    
    this.appService.getTareaMiercoles.subscribe(u=>{this.TareaMi=u
      console.log("funciono tarea Lunes "+u)})

    this.appService.getTareaJueves.subscribe(u=>{this.TareaJ=u
      console.log("funciono tarea Martes "+u)})

    
    this.appService.getTareaViernes.subscribe(u=>{this.TareaV=u
      console.log("funciono tarea Lunes "+u)})

    this.appService.getTareaSabado.subscribe(u=>{this.TareaS=u
      console.log("funciono tarea Martes "+u)})
  

    this.appService.getTareaDomingo.subscribe(u=>{this.TareaD=u
      console.log("funciono tarea Lunes "+u)})
  
  




    // this.activedRouter.queryParams.subscribe(params => {
    //   if (this.router.getCurrentNavigation()?.extras.state) {
    //     this.TareaL = this.router.getCurrentNavigation()?.extras?.state?.['tareaLunes'];
    //     this.TareaMa = this.router.getCurrentNavigation()?.extras?.state?.['tareaMartes'];
    //   }
    // });




    // this.activedRouter.queryParams.subscribe(param =>{
    //   if(this.router.getCurrentNavigation()?.extras.state){
    //     this.TareaL = this.router.getCurrentNavigation()?.
    //     extras?.state?.['tareaLunes'];
    //   }

    // })


    // this.activedRouter.queryParams.subscribe(param =>{
    //   if(this.router.getCurrentNavigation()?.extras.state){
    //     this.TareaMa = this.router.getCurrentNavigation()?.
    //     extras?.state?.['tareaMartes'];
    //   }

    // })



  }

  ngOnInit() {
    this.menuCtrl.enable(true)
  }


}
