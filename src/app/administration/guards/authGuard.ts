import { Injectable, NgModuleFactoryLoader } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router,
        private route: ActivatedRoute,
        private readonly loader: NgModuleFactoryLoader
        ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['login'], { 
            relativeTo: this.route,
            queryParams: { returnUrl: state.url } }
            );

            // this.loader.load('./administration/administration.module#AdministrationModule')
            // .then(factory => {
            //     this.router.navigate(['login']);
            // });
        return false;
    }
}