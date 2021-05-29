import { NavController, ToastController } from '@ionic/angular';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private nav: NavController,
    private toast: ToastController,
  ) { }

  login(user){
    if (user.email === 'aluno@ifsp.edu.br' && user.password === '12345678'){
      // redireciona para a home
      this.nav.navigateForward('home');
    } else {
      // exibe mensagem de erro
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

  createUser(user){

  }

  recoverPass(email){

  }
}
