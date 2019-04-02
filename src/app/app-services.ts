import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};
const Host = "http://kaaden.orrzt.com/"
const addr = {
    bing: Host + "getBing",
    config: Host + "getConfig",
    content: Host + "getContent"
}
// 定义请求类型
class Service {
    url: string;
    isok: boolean;
    data: any;
    list: any[];
}

@Injectable({
    providedIn: 'root',
})
export class AppService {

    constructor(private http: HttpClient) { }

    getBing(): Observable<Service> {
        return this.http.post<Service>(addr.bing, "", httpOptions)
    }
    getConfig(): Observable<Service> {
        return this.http.post<Service>(addr.config, { status: true }, httpOptions)
    }
    getContent(pageindex: number): Observable<Service> {
        return this.http.post<Service>(addr.content, { status: 1, pageSize: 10, pageindex })
    }
}