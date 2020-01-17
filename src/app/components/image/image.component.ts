import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  @Input() id: string;
  @Input() class: string;
  @Input() source: string;
  @Input() alttext: string;
  @Input() width: string;
  @Input() height: string;
  @Input() usemap: string;
  @Input() filter: string;
  @Input() filterDimension: string;

  @ViewChild('images') el: ElementRef;

  constructor() { }

  ngOnInit() {

    if(typeof this.usemap !== "undefined"){
      this.usemap = '#' + this.usemap;
    }

  }

  ngAfterViewInit() {

    if (this.filter == "blur") {
      this.el.nativeElement.style.filter = "blur(" + this.filterDimension + ")";
    }
    else if (this.filter == "brightness") {
      this.el.nativeElement.style.filter = "brightness(" + this.filterDimension + ")";
    }
    else if (this.filter == "contrast") {
      this.el.nativeElement.style.filter = "contrast(" + this.filterDimension + ")";
    }
    else if (this.filter == "drop-shadow") {
      this.el.nativeElement.style.filter = "drop-shadow(" + this.filterDimension + ")";
    }
    else if (this.filter == "grayscale") {
      this.el.nativeElement.style.filter = "grayscale(" + this.filterDimension + ")";
    }
    else if (this.filter == "hue-rotate") {
      this.el.nativeElement.style.filter = "hue-rotate(" + this.filterDimension + ")";
    }
    else if (this.filter == "invert") {
      this.el.nativeElement.style.filter = "invert(" + this.filterDimension + ")";
    }
    else if (this.filter == "opacity") {
      this.el.nativeElement.style.filter = "opacity(" + this.filterDimension + ")";
    }
    else if (this.filter == "saturate") {
      this.el.nativeElement.style.filter = "saturate(" + this.filterDimension + ")";
    }
    else if (this.filter == "sepia") {
      this.el.nativeElement.style.filter = "sepia(" + this.filterDimension + ")";
    }
    else {
      this.el.nativeElement.style.filter = "none";
    }

  }

}
