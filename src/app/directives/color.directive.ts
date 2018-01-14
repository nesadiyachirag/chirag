import { Directive,ElementRef,OnInit } from "@angular/core";

@Directive({

    selector:'[changeColor]'
})
export class colorDirective implements OnInit{
constructor(private elmref:ElementRef){}

ngOnInit(){
    this.elmref.nativeElement.style.color='blue';
}

}