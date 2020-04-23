import { Component} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  private showCertificado = false;
  private showContato = false;
  private showProjetos = false;
  public selectedItem: string;


  constructor(
    private snackBar: MatSnackBar,

  ){}

  
  CurriculumAlert(){
    this.snackBar.open("Em Breve", "",{ duration: 5000 });
  }

  mudaCor(a){

     if(a == "proj"){
      this.showProjetos = true;
      this.showContato = false;
      this.showCertificado = false;
     }


  }

  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
