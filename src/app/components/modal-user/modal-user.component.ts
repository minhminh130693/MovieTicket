import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataService } from 'src/app/_core/services/data.service';
import { StorageService } from 'src/app/_core/services/storage.service';
import { User } from 'src/app/_core/models/user';
declare var $: any;

@Component({
  selector: 'app-modal-user',
  templateUrl: './modal-user.component.html',
  styleUrls: ['./modal-user.component.scss']
})
export class ModalUserComponent implements OnInit {

  @ViewChild('closeModal', { static: false }) closeModal: ElementRef;

  errorLoginUser: string = '';
  errorSignUpUser: string = '';
  statusLogin: boolean = false;
  statusSignUp: boolean = false;
  hidePasswordSignUp: boolean = false;
  hidePasswordLogin: boolean = false;

  constructor(private dataService: DataService,
    private storageService: StorageService
  ) { }

  ngOnInit() {
    $(document).ready(() => {
      $(".info__item .btn").click(() => {
        $(".container").toggleClass("modal__login");
      });

      $(".modal__button-user").click(() => {
        $(".container").toggleClass("modal__login");
      });
    });
  }

  login(formLogin) {
    const objUserLogin = {
      taiKhoan: formLogin.value.username,
      matKhau: formLogin.value.password
    }

    const uri = `api/QuanLyNguoiDung/DangNhap`;
    this.dataService.post(uri, objUserLogin).subscribe(
      (data: any) => {
        this.storageService.setItem("UserLogin", JSON.stringify(data));
        this.statusLogin = true;
        this.errorLoginUser = '';
        this.closeModal.nativeElement.click();
        formLogin.resetForm({});
      },
      err => {
        this.errorLoginUser = err;
      })
  }

  signUp(formSignUp) {
    const objUserSignUp: User = {
      taiKhoan: formSignUp.value.userName,
      matKhau: formSignUp.value.pass,
      email: formSignUp.value.email,
      soDt: formSignUp.value.phone,
      maNhom: "GP02",
      maLoaiNguoiDung: "KhachHang",
      hoTen: formSignUp.value.fullName
    }

    const uri = "api/QuanLyNguoiDung/DangKy";
    this.dataService.post(uri, objUserSignUp).subscribe(
      (data: any) => {
        if (data) {
          this.statusSignUp = true;
          formSignUp.resetForm({});
          this.errorSignUpUser = '';
        }
      },
      err => {
        this.errorSignUpUser = err;
      })
  }

  clickLoginForm() {
    if (this.statusSignUp) {
      this.statusSignUp = false;
    }
  }

  showPass(name, value) {
    if (name === 'SignUp') {
      this.hidePasswordSignUp = value;
    } else if (name === 'Login') {
      this.hidePasswordLogin = value;
    }
  }

  closeModalUser() {
    $(document).ready(() => {
      $("#modalUser").on('hide.bs.modal', () => {
        if (this.statusSignUp) {
          $('#buttonLogin').click();
        }
      });
    })
  }
}
