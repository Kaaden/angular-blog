
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import qs from "qs"
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/x-www-form-urlencoded"
  })
};
const HOST: string = "http://kaaden.orrzt.com:80/";
// const Host: string = "http://127.0.0.1:4000/"
const addr = {
  bing: HOST + "getBing",
  config: HOST + "getConfig",
  content: HOST + "getContent",
  tag: HOST + "getTags",
  user: HOST + "getUser",
  detail: HOST + "getDetail",
  token: HOST + "getToken_access",
  gitUser: HOST + "getGitUser",
  getComment: HOST + "getComment",
  addComment: HOST + "addComment",
  addReplay: HOST + "addReplay",
  findComment: HOST + "findComment",
  changeDz: HOST + "changeDz",
  findDzCount: HOST + "findDzCount",
  updateView: HOST + "updateView",
  findImg: HOST + "findImg"
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
    return this.http.post<Service>(addr.content, qs.stringify({
      status: 1,
      pageSize: 10,
      pageindex,
    }), httpOptions)
  }
  getTags() {
    return this.http.post<Service>(addr.tag, "", httpOptions);
  }
  getUser() {
    return this.http.post<Service>(addr.user, "", httpOptions);
  }
  getDetail(id: number) {
    return this.http.post<Service>(addr.detail, qs.stringify({ id }), httpOptions)
  }
  getAccess_Token(code: any, key: any) {
    return this.http.post<Service>(addr.token, qs.stringify({ code, key }), httpOptions)
  }
  getGit(id: string) {
    return this.http.post<Service>(addr.gitUser, qs.stringify({ id }), httpOptions)
  }
  getComment(pageindex: number, contentId: any) {
    return this.http.post<Service>(addr.getComment, qs.stringify({
      pageSize: 5,
      pageindex,
      contentId,
    }), httpOptions)
  }
  addComment(para: any) {
    return this.http.post<Service>(addr.addComment, qs.stringify({ ...para }), httpOptions)
  }
  addReplay(para: any) {
    return this.http.post<Service>(addr.addReplay, qs.stringify({ ...para }), httpOptions)
  }
  findComment(id: any) {
    return this.http.post<Service>(addr.findComment, qs.stringify({ id }), httpOptions)
  }
  changeDz(para: any) {
    return this.http.post<Service>(addr.changeDz, qs.stringify({ ...para }), httpOptions)
  }
  findDzCount(para: any) {
    return this.http.post<Service>(addr.findDzCount, qs.stringify({ ...para }), httpOptions)
  }
  updateView() {
    return this.http.post<Service>(addr.updateView, null, httpOptions)
  }
  findImg() {
    return this.http.post<Service>(addr.findImg, null, httpOptions)
  }
}
