import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'curriculum';
 
  

  constructor(
    private snackBar: MatSnackBar,
  ){}

  CurriculumAlert(){
    this.snackBar.open("Em Breve", "",{ duration: 5000 });
  }
}
