import { Component } from '@angular/core';

@Component({
  selector: 'prac',
  templateUrl: './prac.component.html',
  styleUrls: ['./prac.component.css'],
})
export class PracComponent {
  // name: string = 'Lawson';
  // age: number = 16;
  // isHidden: boolean = false;
  search: string = 'Mens Football';

  // changeAgeState() {
  //   this.isHidden = !this.isHidden;
  // }

  // inputValue(event: Event) {
  //   this.name = (event.target as HTMLInputElement).value;
  // }

  updateSearchText(event: any) {
    console.log(event.target);
  }
}
