import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/_core/services/storage.service';
import { ShareDataService } from 'src/app/_core/shared/services/share-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  scrollHeader: boolean = false;
  statusLogin: boolean = false;
  isHomePage: boolean = false;
  user: any = [];

  constructor(private storageService: StorageService, private shareDataService: ShareDataService, private router: Router) { }

  ngOnInit() {
    this.getUser();

    this.storageService.watchStorage().subscribe((data: string) => {
      if (data === "UserLogin") {
        this.getUser();
      }
    })
  }

  scrollTo(id) {
    this.shareDataService.shareIsHomePage.subscribe((data: any) => {
      this.isHomePage = data;
    })
    if (this.isHomePage) {
      document.querySelector('#' + id).scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      this.router.navigate(["/"]);
    }
  }

  getUser() {
    if (localStorage.getItem("UserLogin") != null) {
      this.statusLogin = true;
      this.user = JSON.parse(localStorage.getItem("UserLogin"));
    }
    else { this.statusLogin = false; }
  }

  logoutUser() {
    this.statusLogin = false;
    this.storageService.removeItem("UserLogin");
  }
}
