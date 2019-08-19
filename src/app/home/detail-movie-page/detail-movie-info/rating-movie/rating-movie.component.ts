import { Component, OnInit, Input } from '@angular/core';
import { AveragePipe } from 'src/app/_core/pipes/average.pipe';
import { DecimalPipe } from '@angular/common';
import { ShareDataService } from 'src/app/_core/shared/services/share-data.service';
import { StorageService } from 'src/app/_core/services/storage.service';
import { ActivatedRoute } from '@angular/router';
interface Rating {
  maPhim: number;
  taiKhoan: string;
  hinhAnh: string;
  hoTen: string;
  binhLuan: string;
  danhGia: number;
  ngayGio: string;
}

@Component({
  selector: 'app-rating-movie',
  templateUrl: './rating-movie.component.html',
  styleUrls: ['./rating-movie.component.scss'],
  providers: [AveragePipe, DecimalPipe]
})
export class RatingMovieComponent implements OnInit {

  movieID: number;
  ratingStar: number = -1;
  ratingComment: string = '';
  statusLogin: boolean = false;
  user: any;
  showRating: number = 3;
  averageRating: number = 0;
  avatarUser: string = 'assets/img/avatar-user.jpg';
  listLocalStorageRating: Rating[] = [];
  listRatingFilter:  Rating[] = [];
  listRating: Rating[] = [
    { maPhim: 0, taiKhoan: "nguyenlinh", hinhAnh: "assets/img/avatar-1.jpg", hoTen: "Nguyễn Linh", binhLuan: "À phim có 2 after-credit, mình thấy lúc mình đi xem thì mọi người về hết rồi chỉ có bọn mình ở lại xem hết thôi. Các bạn là fan thì nhớ nán lại tầm 10-15 phút để xem nhé, after-credit giới thiệu cho những phần sau đấy ạ :))", danhGia: 3, ngayGio: "2019-07-20T13:00:00.000Z" },
    { maPhim: 0, taiKhoan: "kanzenmisuki", hinhAnh: "assets/img/avatar-2.jpg", hoTen: "Kanzen Misuki", binhLuan: "Phim hay, hành động kỹ xảo mãn nhãn. Nội dung thì cũng tạm chứ chưa đặc sắc lắm, ổn với 1 bộ phim solo.", danhGia: 4, ngayGio: "2019-07-18T13:00:00.000Z" },
    { maPhim: 0, taiKhoan: "punnguyen", hinhAnh: "assets/img/avatar-3.jpg", hoTen: "Pun", binhLuan: "Cảm nhận của mình là phim này quá đỉnh luôn, từ diễn xuất, nội dung đến kỹ xảo hành động, phim hấp dẫn lôi cuốn từ đầu đến cuối, hài hước lãng mạn, tình cảm quá dễ thương luôn.", danhGia: 5, ngayGio: "2019-07-17T13:00:00.000Z" },
    { maPhim: 0, taiKhoan: "hai_tran", hinhAnh: "assets/img/avatar-4.jpg", hoTen: "Hải Trần", binhLuan: "Phim tạm ổn, khá đáng xem, không hay bằng phần trước, hết biết viết gì cho đủ 60 ký tự", danhGia: 4, ngayGio: "2019-07-16T13:00:00.000Z" },
    { maPhim: 0, taiKhoan: "to_nguyen", hinhAnh: "assets/img/avatar-5.jpg", hoTen: "Tố Tố", binhLuan: "Cú lừa thôi, kỹ xảo ok..", danhGia: 3, ngayGio: "2019-07-15T13:00:00.000Z" },
    { maPhim: 0, taiKhoan: "lenguyentam", hinhAnh: "assets/img/avatar-6.jpg", hoTen: "Lê Nguyên Tâm", binhLuan: "Hành động mãn nhãn nhưng nội dung chưa được thuyết phục cho lắm. Nói chung là đáp ứng nhu cầu giải trí.", danhGia: 4, ngayGio: "2019-07-20T14:00:00.000Z" },
    { maPhim: 0, taiKhoan: "tragiang", hinhAnh: "assets/img/avatar-7.jpg", hoTen: "Tra Giang", binhLuan: "Phim rất vui, coi cười bể rạp. Nên xách mông ra rạp xem, làm sao cho đủ 60 kí tự nhỉ", danhGia: 4, ngayGio: "2019-07-14T13:00:00.000Z" },
    { maPhim: 0, taiKhoan: "truongthanhnhan", hinhAnh: "assets/img/avatar-8.jpg", hoTen: "Thành Trương Nhân", binhLuan: "Phim hay. khai thác yếu tố ảo giác ảo ảnh rất mới lạ. diễn viên giỏi, diễn đạt tròn tâm lý nhân vật", danhGia: 4, ngayGio: "2019-07-14T13:00:00.000Z" },
    { maPhim: 0, taiKhoan: "phungphan", hinhAnh: "assets/img/avatar-9.jpg", hoTen: "Phụng Phan", binhLuan: "Nội dung xem hay nhưng nhiều chỗ ko logic lắm", danhGia: 2, ngayGio: "2019-07-13T13:00:00.000Z" },
    { maPhim: 0, taiKhoan: "nguyenhung", hinhAnh: "assets/img/avatar-10.jpg", hoTen: "Nguyễn Hưng", binhLuan: "Phim rất hay, nội dung phim ổn và kỉ xảo rất tuyệt, ảo vl=))", danhGia: 3, ngayGio: "2019-07-13T13:00:00.000Z" },
    { maPhim: 0, taiKhoan: "nguyenvan", hinhAnh: "assets/img/avatar-1.jpg", hoTen: "Nguyễn Văn", binhLuan: "Phim hay, ok", danhGia: 4, ngayGio: "2019-07-12T13:00:00.000Z" },
    { maPhim: 0, taiKhoan: "nguyenhong", hinhAnh: "assets/img/avatar-2.jpg", hoTen: "Nguyễn Hồng Thanh", binhLuan: "Phim hay, nhiều khúc ý tưởng nội dung và hiệu ứng sáng tạo. Mấy cảnh quay ở các điểm nổi tiếng châu Âu đẹp ngất ngây! Tổng thể phim cũng chưa thực sự kịch tính lắm :)", danhGia: 5, ngayGio: "2019-07-12T13:00:00.000Z" },
    { maPhim: 0, taiKhoan: "hunter_tran", hinhAnh: "assets/img/avatar-3.jpg", hoTen: "Hunter", binhLuan: "Phim khá ổn kỹ xão của marvel thì khỏi nói tới,kịch bản có một chút bất ngờ tí", danhGia: 4, ngayGio: "2019-07-12T13:00:00.000Z" },
    { maPhim: 0, taiKhoan: "NguyenThanhNgan", hinhAnh: "assets/img/avatar-4.jpg", hoTen: "Nguyễn Thanh Ngân", binhLuan: "Phim hay ngoài mong đợi, đầu phim chiếu đoạn tưởng niệm các Avengers đã hy sinh trên nền nhạc của Whitney Houston gây xúc động mạnh.", danhGia: 4, ngayGio: "2019-07-11T13:00:00.000Z" },
    { maPhim: 0, taiKhoan: "thachnguyen", hinhAnh: "assets/img/avatar-5.jpg", hoTen: "Thạch Sanh", binhLuan: "Phim xem giải trí tạm đc", danhGia: 4, ngayGio: "2019-07-11T13:00:00.000Z" },
    { maPhim: 0, taiKhoan: "kalle_nguyen", hinhAnh: "assets/img/avatar-6.jpg", hoTen: "Kal Le", binhLuan: "Phim cho teen thì hợp chứ mình k thấy hợp, cả fim chỉ ngồi xem thg nhóc nó dỗi hết ng nọ đến ng kia, xem phát bực", danhGia: 3, ngayGio: "2019-07-10T13:00:00.000Z" },
    { maPhim: 0, taiKhoan: "phankhoi", hinhAnh: "assets/img/avatar-7.jpg", hoTen: "Phan Khôi", binhLuan: "Phim hay! Nên xem :) Thích after credit. Hóng phần tiếp theo. Kaka", danhGia: 4, ngayGio: "2019-07-10T13:00:00.000Z" },
    { maPhim: 0, taiKhoan: "nguyennguyen", hinhAnh: "assets/img/avatar-8.jpg", hoTen: "Người Lạ", binhLuan: "Chỉ chú trọng về kỹ xảo thay vì nội dung. kịch bản không thuyết phục, vai phản diện làm chưa tới", danhGia: 3, ngayGio: "2019-07-09T13:00:00.000Z" },
    { maPhim: 0, taiKhoan: "nguyenthinu", hinhAnh: "assets/img/avatar-9.jpg", hoTen: "Nguyễn Thị Nụ", binhLuan: "Phim hay! Mặc dù yêu cầu xem phim hơi cao nhưng phim như vậy là đã đủ cao trào để xem rồi", danhGia: 4, ngayGio: "2019-07-09T13:00:00.000Z" },
    { maPhim: 0, taiKhoan: "honganh", hinhAnh: "assets/img/avatar-10.jpg", hoTen: "Hồng Anh", binhLuan: "Phim hay và rất giải trí. có nhiều tình tiết xoắn não. nên xem", danhGia: 4, ngayGio: "2019-07-09T13:00:00.000Z" },
    { maPhim: 0, taiKhoan: "nguyenhoa", hinhAnh: "assets/img/avatar-1.jpg", hoTen: "Hoa Nguyễn", binhLuan: "Phim hay và ý nghĩa. Lột tả được tâm trạng rất bình thường của một cậu bé nhưng lại phải mang một áp lực và kỳ vọng quá lớn.", danhGia: 5, ngayGio: "2019-07-09T13:00:00.000Z" },
    { maPhim: 0, taiKhoan: "trungnguyen", hinhAnh: "assets/img/avatar-2.jpg", hoTen: "Trung Đzai", binhLuan: "Phim hay lắm các bạn uiii. Vừa cute vừa kịch tính và after credit siêu đỉnh", danhGia: 4, ngayGio: "2019-07-08T13:11:00.000Z" },
    { maPhim: 0, taiKhoan: "QuynhPhuong", hinhAnh: "assets/img/avatar-3.jpg", hoTen: "Quỳnh Phương", binhLuan: "Phim cực kì hay luôn ạ . Nhân vật dễ thương và mạch phim liên kết . Các pha hành động cốt truyện đều okay", danhGia: 5, ngayGio: "2019-07-06T13:35:00.000Z" },
    { maPhim: 0, taiKhoan: "jinbin1106", hinhAnh: "assets/img/avatar-4.jpg", hoTen: "Jin Bin", binhLuan: "Phim hay và hài hước. Lại hóng típ phần tiếp theo thôi.", danhGia: 4, ngayGio: "2019-07-06T13:00:00.000Z" }
  ];

  constructor(
    private averagePipe: AveragePipe,
    private decimalPipe: DecimalPipe,
    private shareDataService: ShareDataService,
    private storageService: StorageService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getListRating();
    this.getUser();

    this.storageService.watchStorage().subscribe((data: string) => {
      if (data === "UserLogin") {
        this.getUser();
      }
    })
  }

  submitRating() {
    const ratingitem = {
      maPhim: this.movieID,
      taiKhoan: this.user.taiKhoan,
      hinhAnh: this.avatarUser,
      hoTen: this.user.hoTen,
      binhLuan: this.ratingComment,
      danhGia: this.ratingStar,
      ngayGio: new Date().toISOString()
    };
    this.listLocalStorageRating.push(ratingitem);
    localStorage.setItem("ListRatingMovie", JSON.stringify(this.listLocalStorageRating));
    this.getListRating();
    this.ratingComment = '';
    this.ratingStar = -1;
  }

  getListRating() {
    this.movieID = parseInt(this.activatedRoute.snapshot.paramMap.get("id"));
    if (this.movieID) {
      if (!localStorage.getItem("ListRatingMovie")) {
        this.listLocalStorageRating = this.listRating;
      }
      else {
        this.listLocalStorageRating = JSON.parse(localStorage.getItem("ListRatingMovie"));
      }
      this.listRatingFilter = this.filterRating(this.listLocalStorageRating);
      this.calAverageRating(this.listRatingFilter);
    }
  }

  filterRating(list) {
    return list.filter(item => item.maPhim === 0 || item.maPhim === this.movieID);
  }

  getUser() {
    if (localStorage.getItem("UserLogin") != null) {
      this.statusLogin = true;
      this.user = JSON.parse(localStorage.getItem("UserLogin"));
    }
    else { this.statusLogin = false; }
  }

  onRatingClick(rating) {
    this.ratingStar = rating;
  }

  commentMovie(value) {
    this.ratingComment = value;
  }

  viewMore() {
    this.showRating += 5;
  }

  calAverageRating(data) {
    let avg = this.decimalPipe.transform(this.averagePipe.transform(data, 'danhGia'), '1.1-1');
    if (avg) {
      this.averageRating = Number(avg);
    }
    this.shareDataService.sharingAvgRating(this.averageRating);
    this.shareDataService.sharingCountRating(data.length);
  }

}