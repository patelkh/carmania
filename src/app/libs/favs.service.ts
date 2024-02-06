import { Injectable } from "@angular/core";
import { CookieService } from 'ngx-cookie-service';

@Injectable({
    providedIn: 'root'
})
export class FavService {
    constructor(
        private cookieService: CookieService
    ){}

    checkFavState(postId: number){
        if(this.checkFavExists(postId)){
            return false;
        } else {
            return true; 
        }
    }

    getAllCookies() {
        if(this.cookieService.check('favs')) {
            return JSON.parse(this.cookieService.get('favs'));
        }else {
            this.cookieService.set('favs', '[]');
            return [];
        }
    }

    checkFavExists(postId: number) {
        const allCookies = this.getAllCookies();
        return allCookies.includes(postId);
   
    }

    onToggleFav(postId: number) {
        let state: boolean;
        const allCookies = JSON.parse(this.cookieService.get('favs'));
        //add if not in fav list 
        if(!this.checkFavExists(postId)) {
            allCookies.push(postId);
            state = true; 
        //remove from fav list
        }else {
            allCookies.splice(allCookies.indexOf(postId), 1)
            state = false; 
        }   
        this.cookieService.set('favs', JSON.stringify(allCookies));
        return state; 
    }



}