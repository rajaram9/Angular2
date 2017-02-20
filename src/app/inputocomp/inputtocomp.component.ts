import {Component,Input} from '@angular/core';
@Component({
    selector:'inputtocomp',
    templateUrl:'./inputtocomp.html'
})

export class InputtocompComponent{
@Input() title1:any;
}