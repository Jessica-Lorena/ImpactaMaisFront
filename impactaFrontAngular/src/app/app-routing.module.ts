import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SobreComponent } from './sobre/sobre.component';
import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LogadoComponent } from './logado/logado.component';
import { FeedComponent } from './feed/feed.component';
import { DoacaoComponent } from './doacao/doacao.component';
import { HospitalComponent } from './hospital/hospital.component';
import { PutPostagemComponent } from './put-postagem/put-postagem.component';
import { PutHospitalComponent } from './put-hospital/put-hospital.component';
import { DeleteHospitalComponent } from './delete-hospital/delete-hospital.component';
import { DeletePostagemComponent } from './delete-postagem/delete-postagem.component';


const routes: Routes = [
  { path: '', redirectTo: 'home' , pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'sobre', component: SobreComponent},
  { path: 'contato', component: ContatoComponent},
  { path: 'login', component: LoginComponent},
  { path: 'cadastro', component: CadastroComponent},
  { path: 'logado', component: LogadoComponent},
  { path: 'feed', component: FeedComponent },
  { path: 'doacao', component: DoacaoComponent },
  { path: 'hospital', component: HospitalComponent },
  { path: 'editar-post/:id', component: PutPostagemComponent},
  { path: 'delete-post/:id', component: DeletePostagemComponent},
  { path: 'editar-hospital/:id', component: PutHospitalComponent},
  { path: 'delete-hospital/:id', component: DeleteHospitalComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
