import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService} from '../Services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private storageService: StorageService,
    private router: Router
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.storageService.getToken() != null){
      console.log(route.data.only)
      const infoUser = this.storageService.dataUser()
      if ((infoUser.role == 'Admin' && route.data.only == 'Admin') || !route.data.only){
        return true
      }else{
        alert('No tiene permisos para ingresar a esta página.')
        this.router.navigate(['/'])
        return false
      }
    }else{
      alert('Debe iniciar sesión.')
      this.router.navigate(['/login'])
      return false
    }
  }
  
}
