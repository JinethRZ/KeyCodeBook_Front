import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup //Permite indicarle a Angular que el formulario debe aplicar a las validaciones se que crearán.

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {
    this.validator()//Función "validators"
  }

  ngOnInit(): void {
  }

  validator() {
    this.signUpForm = this.formBuilder.group({
      firstName: ['', Validators.required], //Que la primera vez que se cargue sea vacío y que se valide con validators.required
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['User', Validators.required],
      birthDate: [''],
      age: [''],
    })
  }

  saveUser() {
    if (this.signUpForm.valid) {
      this.userService.createUser(this.signUpForm.value).subscribe(
        (userCreated) => {
          console.log(userCreated)
          alert('Usuario creado correctamente.')
        },
        (error) => {
          console.error('Tuvimos un error→', error)
        }
      )
    } else {
      alert('El formulario no es válido.')
    }
  }

}