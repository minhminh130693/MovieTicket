import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-movie',
  templateUrl: './review-movie.component.html',
  styleUrls: ['./review-movie.component.scss']
})
export class ReviewMovieComponent implements OnInit {

  showReview: number = 6;
  showBlog: number = 6;
  listReviewMovie: any = [
    { maReview: 0, tieuDe: "[Review] Người Nhện: Marvel Học Tập Hướng Đen Tối Của DC?", noiDung: "Nếu cho rằng Avengers: Endgame là đỉnh cao những cú troll của Marvel thì trò lừa từ đầu đến cuối Spider-Man: Far From Home sẽ hoàn toàn làm bạn 'đứng hình'.", hinhAnh: "assets/img/review-1.jpg", danhGiaReview: 8.7, phanHoi: 272 },
    { maReview: 1, tieuDe: "[Review] Toy Story 4: Phim Hoạt Hình Thôi Mà, Có Cần Phải Hay Vậy Không!", noiDung: "Xem phim hoạt hình thì chỉ cần vui là được! Cũng đúng, nhỉ? Nhưng, không chỉ mỗi cảm xúc đó, Toy Story 4 là một câu chuyện vô cùng cảm động và sâu sắc đến nỗi có thể lấy đi được nước mắt của rất nhiều, rất nhiều khán giả lớn tuổi.", hinhAnh: "assets/img/review-2.jpg", danhGiaReview: 8.3, phanHoi: 97 },
    { maReview: 2, tieuDe: "[Preview] Spider-Man Far From Home: 'Gấu' Mới, Sứ Mệnh Mới!", noiDung: "Giai đoạn 3 hoành tráng và thành công rực rỡ của vũ trụ điện ảnh Marvel sắp khép lại với chương cuối cùng mang tên: Spider-Man: Far From Home.", hinhAnh: "assets/img/review-3.jpg", danhGiaReview: 0, phanHoi: 0 },
    { maReview: 3, tieuDe: "[Review] Men In Black International: Nữ Quyền 'Phá Đảo' Thế Giới!", noiDung: "Khi cơn bão nữ quyền “càn quét” đến vũ trụ Đặc Vụ Áo Đen, chúng ta có Men In Black: International. Mà đáng ra, nên đặt tên là… Women In Black.", hinhAnh: "assets/img/review-4.jpg", danhGiaReview: 6.7, phanHoi: 132 },
    { maReview: 4, tieuDe: "[Review] Ký Sinh Trùng - Đỉnh Cao Của Điện Ảnh Hàn Quốc ", noiDung: "Với lối kể chuyện thông minh và kịch bản đầy nút thắt, Ký Sinh Trùng xứng đáng là đỉnh cao của điện ảnh Hàn Quốc trong nhiều năm trở lại đây với giải Cành Cọ Vàng danh giá tại Cannes 2019.", hinhAnh: "assets/img/review-5.jpg", danhGiaReview: 8.5, phanHoi: 75 },
    { maReview: 5, tieuDe: "[Review] Annabelle: Ác Quỷ Trở Về - 'Chị Beo' Đã Trở Lại Và Lợi Hại Hơn Gấp Trăm Lần", noiDung: "Sau khi gieo rắc nỗi kinh hoàng vòng quanh thế giới thì Annabelle cuối cùng cũng đã “về nhà” trong phần phim này. Nhưng lần này, chị không đi một mình mà có cả một binh đoàn ma quỷ theo sau...", hinhAnh: "assets/img/review-6.jpg", danhGiaReview: 6, phanHoi: 15 },
    { maReview: 6, tieuDe: "[Review] Toy Story 4 - Cả Bầu Trời Kí Ức Tuổi Thơ Bỗng Chốc Thu Bé Lại Bằng Một Bộ Phim", noiDung: "Gắn bó với tuổi thơ của hàng triệu thế hệ khán giả trên thế giới, Toy Story đã trở lại với một chuyến phiêu lưu mới và những bài học ý nghĩa cũ không phai nhòa theo năm tháng.", hinhAnh: "assets/img/review-7.jpg", danhGiaReview: 9.25, phanHoi: 38 },
    { maReview: 7, tieuDe: "[Preview] Men In Black: International - Chán Bảo Vệ Asgard, Thor Cùng Valkyrie 'Quẩy Tưng' Tổ Chức Áo Đen", noiDung: "Tuy không quá xuất sắc nhưng Men in Black: International vẫn giữ được cái chất hài hước đặc trưng của thương hiệu nhờ sự kết hợp của Tessa Thompson và Chris Hemsworth.", hinhAnh: "assets/img/review-8.jpg", danhGiaReview: 7.84, phanHoi: 47 },
    { maReview: 8, tieuDe: "[Preview] Pokémon Detective Pikachu - Khi Deadpool Kết Hợp Với Pikachu", noiDung: "Vẻ ngoài dễ thương cực kì nhưng lại sở hữu chất giọng “bựa” cùng những câu thoại “lầy” vô đối chính là thứ vũ khí chết người của Pokémon Detective Pikachu.", hinhAnh: "assets/img/review-9.jpg", danhGiaReview: 0, phanHoi: 0 },
    { maReview: 9, tieuDe: "[Review] The Hustle - Thật Nực Cười Kẻ Bị Lừa Lại Muốn Đi Lừa Người Khác", noiDung: "Hài hước và “xoắn não” là những gì mà The Hustle chiêu đãi khán giả xuyên suốt thời lượng hơn 90 phút phim.", hinhAnh: "assets/img/review-10.jpg", danhGiaReview: 6.8, phanHoi: 15 },
    { maReview: 10, tieuDe: "[Review] Avengers: Endgame - Cái Kết Toàn Vẹn Cho Chặng Đường 11 Năm Của MCU", noiDung: "​Hoành tráng, kịch tính và cảm xúc là những gì mà người xem ấn tượng sau 3 tiếng ngồi trong rạp với Avengers: Endgame.", hinhAnh: "assets/img/review-11.jpg", danhGiaReview: 8.92, phanHoi: 168 },
    { maReview: 11, tieuDe: "[Preview] Captain Marvel - Cô Gái Có Đôi Tay Vàng Của Làng Siêu Anh Hùng", noiDung: "Captain Marvel là bước đệm an toàn cho siêu bom tấn Avengers: Endgame sắp ra mắt.", hinhAnh: "assets/img/review-12.jpg", danhGiaReview: 0, phanHoi: 0 },
    { maReview: 12, tieuDe: "[Review] Hai Phượng: Phim Hành Động Việt Máu Lửa Nhất Kể Từ Dòng Máu Anh Hùng", noiDung: "Sau đúng một con giáp, điện ảnh Việt mới lại ghi dấu với một bộ phim đáng để trầm trồ, bàn luận. Riêng Ngô Thanh Vân, cô đã viết nên đỉnh cao mới cho sự nghiệp diễn xuất của mình.", hinhAnh: "assets/img/review-13.jpg", danhGiaReview: 9.14, phanHoi: 93 },
    { maReview: 13, tieuDe: "[Review] Sinh Nhật Chết Chóc 2: Vén Màn Bí Ẩn Về Vòng Lặp Tử Thần", noiDung: "Cách mở rộng câu chuyện vừa có ưu và nhược điểm. Việc lựa chọn cách lý giải vòng lặp theo hướng khoa học giúp đơn giản hóa tình tiết, phù hợp với kế hoạch làm bộ ba phim.", hinhAnh: "assets/img/review-14.jpg", danhGiaReview: 6.21, phanHoi: 17 },
    { maReview: 14, tieuDe: "[Preview] Cua Lại Vợ Bầu - Tưởng ‘Hài Nhảm’ Mà Duyên Ra Trò", noiDung: "Cua Lại Vợ Bầu đã phá vỡ định kiến về những bộ phim vào dịp Tết chỉ toàn là “hài nhảm” nhờ những phút giây gây cười sảng khoái và những cảm xúc sâu lắng từ một chuyện tình đã hơn 7 năm.", hinhAnh: "assets/img/review-15.jpg", danhGiaReview: 0, phanHoi: 0 },
    { maReview: 15, tieuDe: "[Review] Trạng Quỳnh - Khai Bút Đầu Xuân Cho Bức Tranh Phim Cổ Trang Việt Nam", noiDung: "Tái hiện lại giai thoại về Trạng Quỳnh - một nhân vật nổi tiếng chốn dân gian từ lâu đã có ảnh hưởng trong lòng người dân Việt Nam, bộ phim mang đến một màu sắc mới, thổi hồn vào những câu chuyện và tạo được sự khác biệt so với các phim mùa Tết.", hinhAnh: "assets/img/review-16.jpg", danhGiaReview: 8.68, phanHoi: 67 },
    { maReview: 16, tieuDe: "[Review] Alita: Thiên Thần Chiến Binh – Siêu Phẩm 3D Mãn Nhãn Nhất Sau Aquaman", noiDung: "Với sự “chống lưng” của phù thủy James Cameron, Alita: Thiên Thần Chiến Binh xứng đáng là phim chuyển thể từ manga hay nhất từ trước đến nay của Hollywood.", hinhAnh: "assets/img/review-17.jpg", danhGiaReview: 7.93, phanHoi: 38 },
    { maReview: 17, tieuDe: "[Preview] Bí Kíp Luyện Rồng 3: Hồi Kết Trọn Vẹn Cho Tình Bạn Của Hiccup Và Răng Sún", noiDung: "Loạt phim hoạt hình được yêu mến 9 năm qua đã khép lại với sự trưởng thành của các nhân vật cùng một cái kết đẹp cho tất cả.", hinhAnh: "assets/img/review-18.jpg", danhGiaReview: 0, phanHoi: 0 },
    { maReview: 18, tieuDe: "[Review] Dark Phoenix: Cái Kết Ngọt Ngào Cho Magneto & Giáo Sư X", noiDung: "Mười ba năm sau X-Men: The Last Stand, dù dòng thời gian đã bị Wolverine thay đổi, phượng hoàng trỗi dậy tiếp tục được lựa chọn làm sự kiện kết thúc chuỗi phim Dị Nhân.", hinhAnh: "assets/img/review-19.jpg", danhGiaReview: 0, phanHoi: 0 },
    { maReview: 19, tieuDe: "[Preview] Dark Phoenix: Tạm Biệt Đế Chế Dị Nhân", noiDung: "Khi The New Mutants vẫn chưa biết số phận ra sao, Dark Phoenix được xem là bộ phim kết thúc đế chế X-Men của Fox.", hinhAnh: "assets/img/review-20.jpg", danhGiaReview: 7, phanHoi: 7 },
    { maReview: 20, tieuDe: "[Review] Aladdin: Món Ăn Lạ Giữa 'Đại Tiệc' Siêu Anh Hùng", noiDung: "Đầy màu sắc, hài hước và một thần đèn chẳng hề thua kém bản hoạt hình huyền thoại, Aladdin sẽ là cơn gió lạ sau khoảng thời gian khán giả bị “dội bom” bởi siêu anh hùng DC & Marvel.", hinhAnh: "assets/img/review-21.jpg", danhGiaReview: 6.44, phanHoi: 9 },
    { maReview: 21, tieuDe: "[Review] John Wick 3: Nếu Có, Hãy Trao “Oscar Thể Loại Hành Động” Cho Bộ Phim Này", noiDung: "Nếu như Oscar có một hạng mục để vinh danh thể loại hành động, chắc chắn, tượng vàng đó sẽ thuộc về John Wick: Chapter 3 – Parabellum. Và có lẽ, sẽ rất khó để có một ứng viên khác – bây giờ và mai sau – có thể bước qua được sự xuất sắc của Keanu Reeves và series phim hành động này.", hinhAnh: "assets/img/review-22.jpg", danhGiaReview: 9.45, phanHoi: 11 },
    { maReview: 22, tieuDe: "[Review] Avengers Endgame: Cái Kết Không Thể Nào Tuyệt Vời Hơn Cho Một Thập Kỷ Vĩ Đại", noiDung: "Hơn 3 tiếng đồng hồ của Avengers: Endgame chúng ta có gì? Đó không chỉ là một dự án điện ảnh quan trọng của Marvel, đó còn là tuổi thơ, giấc mơ hay thậm chí là lý tưởng sống của hàng triệu fan hâm mộ trên thế giới. Sau này, lại một thập kỷ hoặc nhiều năm hơn nữa trôi qua, khi tổng kết lại những điều tuyệt vời mà cuộc đời các bạn đã may mắn được chứng kiến, có lẽ, Avengers: Endgame sẽ là một trong số đó chăng?!", hinhAnh: "assets/img/review-23.jpg", danhGiaReview: 6.68, phanHoi: 25 },
    { maReview: 23, tieuDe: "[Review] Lật Mặt Nhà Có Khách: “Lầy Lội” Và Kinh Dị", noiDung: "Sau một năm, vợ chồng Lý Hải – Minh Hà trở lại màn ảnh rộng với phần phim mới thuộc series Lật Mặt. Liệu bước đi tiếp theo của vị đạo diễn tay ngang này sẽ thành công như lần trước chứ?!", hinhAnh: "assets/img/review-24.jpg", danhGiaReview: 6.4, phanHoi: 52 }
  ];


  listBlogMovie: any = [
    { maBlog: 0, tieuDe: "Chuyện “Kinh Dị” Đằng Sau Ống Kính Annabelle Comes Home", noiDung: "Chẳng còn bao lâu nữa chúng ta sẽ được gặp lại Annabelle trên màn ảnh rộng. Trước đó hãy cùng điểm qua một vài câu chuyện hậu trường khá thú vị xung quanh bộ phim kinh dị này nhé.", hinhAnh: "assets/img/blog-1.jpg" },
    { maBlog: 1, tieuDe: "Thần Sấm Thor: Chẳng Còn Gì Để Mất!", noiDung: "Có lẽ các fan Thor lạc quan nhất cũng không ngờ rằng thần Sấm sẽ “gượng dậy” và trở lại mạnh mẽ sau cú flop Thor: The Dark World – bộ phim bị đánh giá là phim tệ nhất vũ trụ điện ảnh Marvel từ trước đến nay.", hinhAnh: "assets/img/blog-2.jpg" },
    { maBlog: 2, tieuDe: "Godzilla Và Những Điều Bạn Chưa Biết", noiDung: "Trước khi đại chiến diễn ra, cùng tìm hiểu mọi thông tin về Godzilla nào.", hinhAnh: "assets/img/blog-3.jpg" },
    { maBlog: 3, tieuDe: "Happy Death Day 2U: Chết Hoài, Chết Nữa, Chết Mãi!", noiDung: "Cô nàng xui xẻo Tree Gelbman lại phải tiếp tục chết rồi lại chết trong Happy Death Day 2U!", hinhAnh: "assets/img/blog-4.jpg" },
    { maBlog: 4, tieuDe: "100% Cà Chua Tươi, Ký Sinh Trùng Xứng Đáng Là Bộ Phim Hay Nhất Của Bong Joon Ho", noiDung: "Thắng giải Cành Cọ Vàng, tác phẩm nhận được tràng pháo tay dài tận 8 phút tại liên hoan phim quốc tế.", hinhAnh: "assets/img/blog-5.jpg" },
    { maBlog: 5, tieuDe: "Người Tuyết Yeti Chưa Bao Giờ Dễ Thương Như Thế Trong Everest: Người Tuyết Bé Nhỏ", noiDung: "Sau Răng Sún, 'chiến binh' người tuyết của DreamWorks liệu có mang đến thành công tiếp theo?", hinhAnh: "assets/img/blog-6.jpg" },
    { maBlog: 6, tieuDe: "Ngày X-Men - 20 Năm Thương Hiệu Dị Nhân Xuất Hiện Trên Màn Ảnh Rộng", noiDung: "X-Men không chỉ là một thương hiệu siêu anh hùng hấp dẫn bậc nhất thế giới mà còn là một phần của tuổi thơ khi đã tồn tại gần được 20 năm.", hinhAnh: "assets/img/blog-7.jpg" },
    { maBlog: 7, tieuDe: "Biệt Đội 'Thú Cưng' Tổng Tấn Công Màn Bạc Năm Nay Gồm Có Những Ai?", noiDung: "Bên cạnh những binh đoàn siêu nhân, quái thú hay ác ma thì biệt đội thú cưng cũng không kém phần đông đảo, hay thậm chí độ đáng yêu và sức mạnh của chúng còn khiến các người hùng màn ảnh phải 'lép vế'.", hinhAnh: "assets/img/blog-8.jpg" },
    { maBlog: 8, tieuDe: "Vừa Thoát Khỏi 'Mê Cung', Kaya Scodelario Tiếp Tục Chạy Thục Mạng Vì Thảm Hoạ Cá Sấu", noiDung: "Qua đoạn phim 'chào sân', nhịp phim đầy kịch tính đã đem đến cho khán giả những trải nghiệm siêu nghẹt thở, hứa hẹn sẽ là tác phẩm không thể bỏ lỡ với các 'mọt phim' trên thị trường phim hè năm 2019.", hinhAnh: "assets/img/blog-9.jpg" },
    { maBlog: 9, tieuDe: "Lượm Ngay 45 Quả Trứng Phục Sinh Cực Ý Nghĩa Ttrong Avengers: Endgame Nào!", noiDung: "Với bộ phim có thời lượng dài 3 tiếng này, những quả trứng ấy lại đặc biệt hơn bao giờ hết, vì nó mang nhiều ý nghĩa hơn, nhiều tình cảm hơn mà nhà làm phim dành tặng cho biệt đội Avengers đời đầu.", hinhAnh: "assets/img/blog-10.jpg" },
    { maBlog: 10, tieuDe: "Mỹ Nhân ‘Sunny’ Yoo Ho Jeong Trở Lại Màn Ảnh Với Vai Bà Mẹ Idol", noiDung: "Điều tuyệt vời của Đóa Hồng Của Tôi không chỉ đến từ câu chuyện tình yêu nhiều tiếng cười và cả nước mắt của người mẹ Rose Hong hay từ hành trình chinh phục ước mơ và khám phá tình yêu tuổi hồng của người con gái, mà còn đến từ những ca khúc đầy cảm xúc và sâu lắng của bộ phim. Đóa Hồng Của Tôi mang sắc màu hồng mơ màng, hoài cổ như những giấc mơ đan xen trong quá khứ và hiện tại của các nhân vật.", hinhAnh: "assets/img/blog-11.jpg" },
    { maBlog: 11, tieuDe: "Captain Marvel Là Phim Siêu Anh Hùng Mở Màn Ăn Khách Thứ Hai Lịch Sử", noiDung: "Bất chấp anti-fan, Captain Marvel vẫn càn quét phòng vé tuần qua, doanh thu chỉ chịu thua kém Infinity War.", hinhAnh: "assets/img/blog-12.jpg" },
    { maBlog: 12, tieuDe: "Iron Man Tony Stark: Công Thần Sáng Lập MCU", noiDung: "Từ một nhân vật hạng B chẳng mấy ai biết đến, Iron Man Tony Stark đã trở thành siêu anh hùng nổi danh hàng đầu thế giới, có phần lấn át cả những Superman, Batman, Spider-Man trong thập kỷ vừa qua", hinhAnh: "assets/img/blog-13.jpg" },
    { maBlog: 13, tieuDe: "Alita Battle Angel: Siêu Phẩm Mới Từ Nhà Làm Phim Avatar", noiDung: "TVà bộ phim hành động, phiêu lưu, tình cảm Alita: Battle Angel là tác phẩm mới nhất đóng mác James Cameron - nhà làm phim lừng danh đứng sau các siêu phẩm Avatar, Titanic.", hinhAnh: "assets/img/blog-14.jpg" },
    { maBlog: 14, tieuDe: "Các Boss Mèo Từng 'Phá Đảo' Màn Ảnh Rộng", noiDung: "Mèo không chỉ phá đảo Internet mà đã làm mưa làm gió màn ảnh rộng xưa nay. Hãy cùng điểm qua các boss nổi danh nhất thế giới điện ảnh!", hinhAnh: "assets/img/blog-15.jpg" },
    { maBlog: 15, tieuDe: "Captain Marvel Thừa Sức 'Cân' Thanos!", noiDung: "'Anh khoai tím' sẽ gặp phải đối thủ sở hữu sức mạnh vô cùng, đủ sức cho hắn “ăn hành” như cách hắn “làm gỏi” biệt đội Avengers. Đó là một phụ nữ.", hinhAnh: "assets/img/blog-16.jpg" },
    { maBlog: 16, tieuDe: "How to Train Your Dragon 3: Mọi Điều Bạn Cần Biết Trước Khi Xem Phần Cuối Cùng", noiDung: "Chuyến phiêu lưu của Hiccup và Răng Sún sẽ đi đến hồi kết trong phần cuối mang tên How to Train Your Dragon: The Hidden World. Cùng chúng tôi nhìn lại một số điểm chú ý trong hành trình đáng nhớ của bộ đôi này nhé.", hinhAnh: "assets/img/blog-17.jpg" },
    { maBlog: 17, tieuDe: "Nick Fury: Trụ Cột Tinh Thần Của Các Avengers", noiDung: "Không có sức mạnh bẩm sinh, chẳng được tiêm huyết thanh siêu năng lực, giữa vụ trụ siêu anh hùng Marvel, Nicholas Joseph Fury chỉ cầm súng nã đạn là thuộc hàng bình thường, thậm chí là tầm thường nhất. Thế nhưng, người đàn ông này lại là trụ cột tinh thần cho các siêu anh hùng, hậu phương hùng mạnh của biệt đội Avengers.", hinhAnh: "assets/img/blog-18.jpg" },
    { maBlog: 18, tieuDe: "Vũ Trụ Điện Ảnh Marvel Sẽ Ra Sao Sau Avengers: Endgame?", noiDung: "Trong thời gian chờ đợi bom tấn này phá kỷ lục huyền thoại Avatar, hãy cùng ngẫm lại những gì vũ trụ Marvel đang sở hữu sau Hồi Kết.", hinhAnh: "assets/img/blog-19.jpg" },
    { maBlog: 19, tieuDe: "Hawkeye: Có Tỏa Sáng Như Lời MCU Đã Hứa?", noiDung: "Từng khiến chiếc tàu bay hiện đại bậc nhất của S.H.I.L.E.D suýt rơi ở The Avengers (2012), chẳng ai hiểu nổi tại sao càng ngày Hawkeye lại càng yếu ớt thảm thương.", hinhAnh: "assets/img/blog-20.jpg" },
    { maBlog: 20, tieuDe: "Black Widow: Nữ Siêu Anh Hùng Ảnh Hưởng Nhất MCU", noiDung: "Nữ siêu anh hùng duy nhất thuộc nhóm Avengers đầu tiên- Black Widow luôn được cả nhà sản xuất lẫn các fan dành rất nhiều tình cảm. Thủ vai nàng điệp viên lại là nữ minh tinh người Mỹ sexy nhất hành tinh Scarlett Johansson, chẳng có gì ngạc nhiên khi Natasha Romanoff sở hữu sức mạnh yếu ớt giữa dàn siêu năng lực lại được hâm mộ cuồng nhiệt đến thế.", hinhAnh: "assets/img/blog-21.jpg" },
    { maBlog: 21, tieuDe: "Hành Trình Của Gã Khổng Lồ Xanh Hulk", noiDung: "Tại vũ trụ điện ảnh Marvel, hiếm có nhân vật nào lận đận như Bruce Banner/ Hulk. Chưa tới mười năm, vai này đã đổi đến ba người. “Hulk” 2003 Eric Bana và “Hulk” 2008 Edward Norton đều là những diễn viên đẹp trai và thực lực hàng đầu Hollywood. Tuy nhiên, cuối cùng chỉ Mark Ruffalo trụ lại với nhân vật dài lâu, suốt sáu bộ phim từ The Avengers 2012 đến nay.", hinhAnh: "assets/img/blog-22.jpg" },
    { maBlog: 22, tieuDe: "Captain America: Rút Lui Bình Yên Hay Hy Sinh Ở Phút Cuối Cùng?", noiDung: "Từ anh thanh niên dáng nhỏ thó nhưng gan to “Tôi có thể đánh nhau cả ngày.” tới Captain America thủ lĩnh Avengers là quãng đường rất dài Steve Rogers đã trải qua.", hinhAnh: "assets/img/blog-23.jpg" },
    { maBlog: 23, tieuDe: "Trạng Quỳnh Và Những “Lần Đầu Tiên” Đầy Đáng Nhớ", noiDung: "Trạng Quỳnh là một trong những dự án gây chú ý vào mùa Tết năm nay, không chỉ vì phim được thực hiện bởi một ekip nổi tiếng, mà còn vì chính tác phẩm đã đánh dấu nhiều cột mốc đầu tiên đáng nhớ cho mỗi diễn viên nói riêng và điện ảnh Việt nói chung.", hinhAnh: "assets/img/blog-24.jpg" }
  ];

  constructor() { }

  ngOnInit() {
    this.getlistReviewMovie();
    this.getlistBlogMovie();
  }

  getlistReviewMovie() {
    return this.listReviewMovie;
  }

  getlistBlogMovie() {
    return this.listBlogMovie;
  }

  viewMore(value) {
    if (value === 'review') {
      this.showReview += 6;
    }
    else if (value === 'blog') {
      this.showBlog += 6;
    }
  }
}
