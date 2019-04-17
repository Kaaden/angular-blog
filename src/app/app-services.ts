
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/x-www-form-urlencoded"
  })
};
// const Host: string = "http://kaaden.orrzt.com/";
const Host: string = "http://127.0.0.1:80/"
const addr = {
  bing: Host + "getBing",
  config: Host + "getConfig",
  content: Host + "getContent",
  tag: Host + "getTags",
  user: Host + "getUser",
  detail: Host + "getDetail",
  token: Host + "getToken_access",
  gitUser: Host + "getGitUser"
};
// 定义请求类型
class Service {
  isok: boolean;
  data: any;
}

@Injectable({
  providedIn: "root"
})
export class AppService {
  constructor(private http: HttpClient) { }

  getBing(): Observable<Service> {
    return this.http.post<Service>(addr.bing, "", httpOptions);
  }
  getConfig(): Observable<Service> {
    return this.http.post<Service>(addr.config, { status: true }, httpOptions);
  }
  getContent(pageindex: number): Observable<Service> {

    return this.http.post<Service>(addr.content, {
      status: 1,
      pageSize: 10,
      pageindex,
    });
  }
  getTags() {
    return this.http.post<Service>(addr.tag, "");
  }
  getUser() {
    return this.http.post<Service>(addr.user, "");
  }
  getDetail(id: number) {
    return this.http.post<Service>(addr.detail, { id })
  }
  getAccess_Token(code: any, key: any) {
    return this.http.post<Service>(addr.token, { code, key })
  }
  getGit(id:string) {
    return this.http.post<Service>(addr.gitUser, { id })
  }
}
