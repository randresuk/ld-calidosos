import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-info',
  templateUrl: './products-info.component.html',
  styleUrls: ['./products-info.component.scss']
})
export class ProductsInfoComponent implements OnInit {

  ngOnInit() {
    this.updateSlides();
    this.onResize(<any>{ target: window });

    if (this.slides.length < 4) {
      this.setSlides = this.slides.length;
      this.start = 0;
    }
  }

  private updateSlides() {
    if (this.start + this.setSlides > this.slides.length) {
      this.start = this.slides.length - this.setSlides;
    }
  }

  basicData = {
    username: "Luis",
    fullName: "Luis Carlos Sarmiento",
    IdentificationId: "1020392834"
  };

  slides = [
    {
      productName: "Banco occidente Card",
      id: "3778 1098345 50098",
      expirationDate: "10/27",
      ccv: "233"
    },
    {
      productName: "Banco AV Villas Card",
      id: "3998 9748345 10898",
      expirationDate: "11/24",
      ccv: "133"
    },
    {
      productName: "Banco Popular Card",
      id: "3778 1098345 50098",
      expirationDate: "12/27",
      ccv: "233"
    },
    {
      productName: "Banco Bogotá Card",
      id: "3998 9748345 10898",
      expirationDate: "11/26",
      ccv: "133"
    },
    {
      productName: "Master Card",
      id: "3778 1098345 50098",
      expirationDate: "10/30",
      ccv: "233"
    },
    {
      productName: "Visa Card",
      id: "3998 9748345 10898",
      expirationDate: "08/24",
      ccv: "133"
    }
  ]
  products: string[] = [];
  start = 0;
  setSlides = 1;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    const target = event.target as Window;
    console.log(target.innerWidth, 'target.innerWidth')
    this.setSlides = this.calculateSlides(target.innerWidth);
    this.updateSlides();
  }

  scroll(direction: number): void {
    this.start += direction;

    if (this.start < 0) {
      this.start = 0;
    } else if (this.start + this.setSlides > this.slides.length) {
      this.start = this.slides.length - this.setSlides;
    }
  }

  calculateSlides(value: number): number {
    if (value < 700) {
      return 1;
    } else if (value >= 700 && value < 1000) {
      return 2;
    } else if (value >= 1000 && value < 1200) {
      return 3;
    } else {
      return 4;
    }
  }

  addItem(slide: any) {
    this.products.push(slide.name);
  }

  removeItem(index: number) {
    this.products.splice(index, 1);
  }
}


