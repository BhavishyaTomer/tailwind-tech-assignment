import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isMenuOpen = false;
  menuIcon = 'menu';

  onToggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.menuIcon = this.isMenuOpen ? 'close' : 'menu';
  }
}
