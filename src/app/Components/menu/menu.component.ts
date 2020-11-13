import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../../Services/storage.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  user
  permission;
  constructor(
    private storageService: StorageService,
    private router: Router,
  ) {
    this.storageService.auth$.subscribe(
      (userAuth) => {
        this.user = userAuth
      }
    )
   }

  ngOnInit(): void {
  }

  destroySession(){
    this.storageService.removeSession()
    this.router.navigate(['/'])
  }

/*validate_permission(){ 
    if (user.role == 'Empresa'){
      if (user.plan == 'Free'){
        this.permission = 'e-free'
      }else{
        this.permission = 'e-prem'
      }
    } else if (user.role == 'User'){
      if (user.plan == 'Free'){
        this.permission = 'u-free'
      }else{
        this.permission = 'u-prem'
      }
    }
    return permission    
  }*/   
}