import { Component } from '@angular/core';
import { Hero } from './hero'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  }

  title = 'Data Binding Project Page';
  isDisable = false
  bttnText = !this.isDisable ? 'enabled' : 'disabled'
  enableOrDisable()  {
    this.isDisable = !this.isDisable
    this.bttnText = !this.isDisable ? 'enabled' : 'disabled'
  }
}
