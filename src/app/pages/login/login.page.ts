import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  password;
  email;

  constructor(
    private nav: NavController,
    private toast: ToastController
  ) { }

  ngOnInit() {
  }

  validate(){
    if(this.email === "aluno@ifsp.edu.br" && this.password=== '12345678'){
      //redireciona para a home
      this.nav.navigateForward('home');
    } else {
      //exibe mensagem de erro
      this.showError();
    }
  }

  private async showError(){
    const item = await this.toast.create({
      message: 'Dados de acesso incorretos',
      duration: 3000
    });

    item.present();
  }

}
