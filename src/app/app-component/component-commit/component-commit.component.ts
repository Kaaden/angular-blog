import { Component, OnInit } from '@angular/core';
import { AppService } from "../../app-services"
import { NzMessageService } from 'ng-zorro-antd';
@Component({
    selector: 'app-component-commit',
    templateUrl: './component-commit.component.html',
    styleUrls: ['./component-commit.component.less']
})
export class commitComponent implements OnInit {
    gitId: string = ""
    gitUser: any = ""
    interId: any = ""
    value: string = ""
    constructor(
        private service: AppService,
        private message: NzMessageService
    ) { }
    ngOnInit() {
        this.getUserId()
    }
    ngOnDestroy() {
        clearInterval(this.interId)
    }

    login() {
        let key = this.makeKey()
        window.sessionStorage.setItem("key", key)
        window.localStorage.clear()
        window.open('https://github.com/login/oauth/authorize\?client_id=a81d2df07a5f4265c4a0', '', 'width=600,height=500,left=10, top=10,toolbar=no, status=no, menubar=no, resizable=yes, scrollbars=yes');
    }
    getUserId(): void {
        clearInterval(this.interId)
        let id = window.localStorage.getItem("gitId")
        if (!id) {
            this.interId = setInterval(() => {
                let gid = window.localStorage.getItem("gitId")
                if (gid) {
                    this.gitId = gid
                    clearInterval(this.interId)
                }
            }, 100)
        } else {
            this.gitId = id
            this.service.getGit(id).subscribe(
                (data) => {
                    if (data.isok) {
                        this.gitUser = data.data
                    }
                },
                (error: Error) => {
                    this.gitUser = ""
                    this.gitId = ""
                    this.message.error("请重新登陆")
                })
        }
    }

    makeKey() {
        const str = "qwertyuiopasdfghjklzxcvbnm0123456789QWERTYUIOPASDFGHJKLZXCVBNM"
        const len = str.length
        let _d = new Date()
        let strMath = ""
        for (let i = 0; i < 4; i++) {
            let math = Math.floor(Math.random() * len - 1)
            if (math < 0) {
                math = 0
            }
            strMath += str.substr(math, 1)
        }
        let dataMath = _d.getTime() + strMath
        return dataMath
    }
}