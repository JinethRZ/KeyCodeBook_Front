import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/*Routes→Variable que permite crear una constante de tipo Routes*/

import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './Components/menu/menu.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { LoginComponent } from './Components/login/login.component';
import { CreateBookComponent } from './Components/create-book/create-book.component';
import { ListBookComponent } from './Components/list-book/list-book.component';

import { AuthGuard } from './Guards/auth.guard';
import { CreateGenreComponent } from './Components/create-genre/create-genre.component';

const routesApp: Routes = [ //La constante routesApp va a ser un arreglo de objetos.
  { path: '', component: HomeComponent }, //''→ruta que carga inicialmente la aplicación.
  { path: 'sign-up', component: SignUpComponent }, //'sign-up'→ es como escribir localhost:4200/sign-up para luego mostrar el componente de registros.
  { path: 'login', component: LoginComponent }, 
  { path: 'create-book', canActivate: [AuthGuard], data: {only: 'Admin'}, component: CreateBookComponent },
  { path: 'list-book', canActivate: [AuthGuard], component: ListBookComponent },
  { path: 'create-genre', canActivate: [AuthGuard], data: {only: 'Admin'}, component: CreateGenreComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    SignUpComponent,
    LoginComponent,
    CreateBookComponent,
    ListBookComponent,
    CreateGenreComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routesApp),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
