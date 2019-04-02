import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BgAvatar } from "./app-main"
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root',
})
export class AppService {
    private httpUrl = 'http://kaaden.orrzt.com/';  // URL to web api
    constructor(private http: HttpClient) { }

    getBing(): Observable<BgAvatar> {
        const url = this.httpUrl + "getBing"
        return this.http.post<BgAvatar>(url, "", httpOptions)
    }
}