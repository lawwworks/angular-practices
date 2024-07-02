import { Component } from '@angular/core';

@Component({
  selector: 'two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css'],
})
export class TwoWayBindingComponent {
  searchText = 'Valorant';

  updateSearchText(event: any) {
    console.log(this.searchText);
    this.searchText = event.target.value;
  }
}
