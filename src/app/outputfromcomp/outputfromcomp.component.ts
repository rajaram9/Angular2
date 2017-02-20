import {Component,Output,EventEmitter,OnInit} from '@angular/core';
 @Component({
  selector:'outputfromcomp',
  templateUrl:'./outputfromcomp.html',
 })
 export class OutputfromcompComponent implements OnInit
 {
  @Output() itemoutput=new EventEmitter();
  constructor()
  {   
     
  }
   ngOnInit() {
        this.itemoutput.emit("this is my out put");
   }
 }