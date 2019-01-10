import { Component, EventEmitter, Output } from '@angular/core';

@Component ({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  @Output() selectedPage = new EventEmitter<string>();

  onSelect(pageSelected: string) {

    this.selectedPage.emit(pageSelected);
  }
}
