import imageSlider from "../../assets/images/bg-ketoangiakhang-4.jpg";
import ImageGioiThieu from "../../assets/images/visao-ketoan-giakhang.jpg";

const initialState = {
  thongTin: {
    soDienThoai: "(+84) 934 895 060",
    diaChi: "01 LTN, P.Hòa Cường Bắc, Q.Hải Châu, Tp.Đà Nẵng",
    email: "phuocdt.mmo@gmail.com",
    website: "wwww.ketoangiakhang.net",
    location:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.4037262143424!2d108.21559241536086!3d16.044526144360063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219c1a7ff7fbf%3A0x19ce750fd3fa1bd5!2zQ2h1bmcgY8awIFZpbkNvbSwgMDEgTMOqIFRoYW5oIE5naOG7iywgSG_DoCBDxrDhu51uZyBC4bqvYywgSOG6o2kgQ2jDonUsIMSQw6AgTuG6tW5nIDU1MDAwMCwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1584785504972!5m2!1sen!2s",
  },
  menuNavBar: [
    {
      link: "/",
      name: "Trang chủ",
    },
    {
      link: "/gioi-thieu",
      name: "Giới thiệu",
    },
    {
      link: "/dich-vu",
      name: "Dịch vụ",
      children: [
        {
          link: "/dich-vu/ke-toan-tron-goi",
          image: require("../../assets/images/icon-ke-toan.png"),
          name: "Dịch vụ kế toán trọn gói",
          content:
            "Chúng tôi nhận làm dịch vụ kế toán trọn gói cho doanh nghiệp, chi phí thấp, chất lượng cao, ổn định và chuyên nghiệp.",
        },
        {
          link: "/dich-vu/thanh-lap-cong-ty",
          image: require("../../assets/images/icon-thanh-lap-cty.png"),
          name: "Thành lập công ty",
          content:
            "Gia Khang chuyên cung cấp dịch vụ thành lập công ty trọn gói cho doanh nghiệp Việt Nam và doanh nghiệp nước ngoài tại Việt Nam.",
        },
        {
          link: "/dich-vu/thanh-lap-doanh-nghiep",
          image: require("../../assets/images/icon-thanh-lap-cty.png"),
          name: "Thành lập doanh nghiệp",
          content:
            "Gia Khang chuyên cung cấp dịch vụ thành lập doanh nghiệp trọn gói cho doanh nghiệp Việt Nam và doanh nghiệp nước ngoài tại Việt Nam.",
        },
        {
          link: "/dich-vu/giay-phep-dau-tu",
          image: require("../../assets/images/icon-thanh-lap-cty.png"),
          name: "Giấy phép đầu tư",
          content:
            "Xin cấp giấy chứng nhận đầu tư cho doanh nghiệp nước ngoài tại Việt Nam, đảm bảo làm thủ tục nhanh chóng, an toàn với chi phí dịch vụ thấp nhất.",
        },
        {
          link: "/dich-vu/quyet-toan-thue-nam",
          image: require("../../assets/images/icon-quyet-toan-thue-nam.png"),
          name: "Dịch vụ quyết toán thuế năm",
          content:
            "Nhận làm dịch vụ quyết toán thuế TNDN cuối năm, kê khai quyết toán thuế thu nhập doanh nghiệp cuối năm, gở rối sổ sách kế toán cuối năm.",
        },
        {
          link: "/dich-vu/bao-cao-thue",
          image: require("../../assets/images/icon-tax.png"),
          name: "Dịch vụ báo cáo thuế",
          content:
            "Hàng tháng, hàng quý phải làm những báo cáo thuế gì để nộp cho cơ quan thuế. Bạn hãy yên tâm, đã có nhân viên chúng tôi lo.",
        },
      ],
    },
    {
      link: "/bang-gia",
      name: "Bảng giá",
    },
    {
      link: "/tu-van-ke-toan",
      name: "Tư vấn kế toán",
      children: [
        {
          link: "/tu-van-ke-toan/quan-1",
          image: null,
          name: "Tư vấn kế toán Quận 1",
          content:
            "Chúng tôi nhận làm dịch vụ kế toán trọn gói cho doanh nghiệp, chi phí thấp, chất lượng cao, ổn định và chuyên nghiệp.",
        },
        {
          link: "/tu-van-ke-toan/quan-2",
          image: null,
          name: "Tư vấn kế toán Quận 2",
          content:
            "Chúng tôi nhận làm dịch vụ kế toán trọn gói cho doanh nghiệp, chi phí thấp, chất lượng cao, ổn định và chuyên nghiệp.",
        },
        {
          link: "/tu-van-ke-toan/quan-3",
          image: null,
          name: "Tư vấn kế toán Quận 3",
          content:
            "Chúng tôi nhận làm dịch vụ kế toán trọn gói cho doanh nghiệp, chi phí thấp, chất lượng cao, ổn định và chuyên nghiệp.",
        },
        {
          link: "/tu-van-ke-toan/quan-4",
          image: null,
          name: "Tư vấn kế toán Quận 4",
          content:
            "Chúng tôi nhận làm dịch vụ kế toán trọn gói cho doanh nghiệp, chi phí thấp, chất lượng cao, ổn định và chuyên nghiệp.",
        },
        {
          link: "/tu-van-ke-toan/quan-5",
          image: null,
          name: "Tư vấn kế toán Quận 5",
          content:
            "Chúng tôi nhận làm dịch vụ kế toán trọn gói cho doanh nghiệp, chi phí thấp, chất lượng cao, ổn định và chuyên nghiệp.",
        },
        {
          link: "/tu-van-ke-toan/quan-6",
          image: null,
          name: "Tư vấn kế toán Quận 6",
          content:
            "Chúng tôi nhận làm dịch vụ kế toán trọn gói cho doanh nghiệp, chi phí thấp, chất lượng cao, ổn định và chuyên nghiệp.",
        },
        {
          link: "/tu-van-ke-toan/quan-7",
          image: null,
          name: "Tư vấn kế toán Quận 7",
          content:
            "Chúng tôi nhận làm dịch vụ kế toán trọn gói cho doanh nghiệp, chi phí thấp, chất lượng cao, ổn định và chuyên nghiệp.",
        },
        {
          link: "/tu-van-ke-toan/quan-8",
          image: null,
          name: "Tư vấn kế toán Quận 8",
          content:
            "Chúng tôi nhận làm dịch vụ kế toán trọn gói cho doanh nghiệp, chi phí thấp, chất lượng cao, ổn định và chuyên nghiệp.",
        },
        {
          link: "/tu-van-ke-toan/quan-9",
          image: null,
          name: "Tư vấn kế toán Quận 9",
          content:
            "Chúng tôi nhận làm dịch vụ kế toán trọn gói cho doanh nghiệp, chi phí thấp, chất lượng cao, ổn định và chuyên nghiệp.",
        },
        {
          link: "/tu-van-ke-toan/quan-10",
          image: null,
          name: "Tư vấn kế toán Quận 10",
          content:
            "Chúng tôi nhận làm dịch vụ kế toán trọn gói cho doanh nghiệp, chi phí thấp, chất lượng cao, ổn định và chuyên nghiệp.",
        },
        {
          link: "/tu-van-ke-toan/quan-11",
          image: null,
          name: "Tư vấn kế toán Quận 11",
          content:
            "Chúng tôi nhận làm dịch vụ kế toán trọn gói cho doanh nghiệp, chi phí thấp, chất lượng cao, ổn định và chuyên nghiệp.",
        },
        {
          link: "/tu-van-ke-toan/quan-12",
          image: null,
          name: "Tư vấn kế toán Quận 12",
          content:
            "Chúng tôi nhận làm dịch vụ kế toán trọn gói cho doanh nghiệp, chi phí thấp, chất lượng cao, ổn định và chuyên nghiệp.",
        },
        {
          link: "/tu-van-ke-toan/quan-go-vap",
          image: null,
          name: "Tư vấn kế toán Quận Gò Vấp",
          content:
            "Chúng tôi nhận làm dịch vụ kế toán trọn gói cho doanh nghiệp, chi phí thấp, chất lượng cao, ổn định và chuyên nghiệp.",
        },
        {
          link: "/tu-van-ke-toan/quan-tan-binh",
          image: null,
          name: "Tư vấn kế toán Quận Tân Bình",
          content:
            "Chúng tôi nhận làm dịch vụ kế toán trọn gói cho doanh nghiệp, chi phí thấp, chất lượng cao, ổn định và chuyên nghiệp.",
        },
        {
          link: "/tu-van-ke-toan/quan-phu-nhuan",
          image: null,
          name: "Tư vấn kế toán Quận Phú Nhuận",
          content:
            "Chúng tôi nhận làm dịch vụ kế toán trọn gói cho doanh nghiệp, chi phí thấp, chất lượng cao, ổn định và chuyên nghiệp.",
        },
        {
          link: "/tu-van-ke-toan/quan-binh-thanh",
          image: null,
          name: "Tư vấn kế toán Quận Bình Thạnh",
          content:
            "Chúng tôi nhận làm dịch vụ kế toán trọn gói cho doanh nghiệp, chi phí thấp, chất lượng cao, ổn định và chuyên nghiệp.",
        },
        {
          link: "/tu-van-ke-toan/quan-tan-phu",
          image: null,
          name: "Tư vấn kế toán Quận Tân Phú",
          content:
            "Chúng tôi nhận làm dịch vụ kế toán trọn gói cho doanh nghiệp, chi phí thấp, chất lượng cao, ổn định và chuyên nghiệp.",
        },
        {
          link: "/tu-van-ke-toan/quan-thu-duc",
          image: null,
          name: "Tư vấn kế toán Quận Thủ Đức",
          content:
            "Chúng tôi nhận làm dịch vụ kế toán trọn gói cho doanh nghiệp, chi phí thấp, chất lượng cao, ổn định và chuyên nghiệp.",
        },
        {
          link: "/tu-van-ke-toan/quan-nha-be",
          image: null,
          name: "Tư vấn kế toán Quận Nhà Bè",
          content:
            "Chúng tôi nhận làm dịch vụ kế toán trọn gói cho doanh nghiệp, chi phí thấp, chất lượng cao, ổn định và chuyên nghiệp.",
        },
        {
          link: "/tu-van-ke-toan/quan-binh-tan",
          image: null,
          name: "Tư vấn kế toán Quận Bình Tân",
          content:
            "Chúng tôi nhận làm dịch vụ kế toán trọn gói cho doanh nghiệp, chi phí thấp, chất lượng cao, ổn định và chuyên nghiệp.",
        },
        {
          link: "/tu-van-ke-toan/quan-cu-chi",
          image: null,
          name: "Tư vấn kế toán Quận Củ Chi",
          content:
            "Chúng tôi nhận làm dịch vụ kế toán trọn gói cho doanh nghiệp, chi phí thấp, chất lượng cao, ổn định và chuyên nghiệp.",
        },
        {
          link: "/tu-van-ke-toan/quan-hoc-mon",
          image: null,
          name: "Tư vấn kế toán Quận Hóc Môn",
          content:
            "Chúng tôi nhận làm dịch vụ kế toán trọn gói cho doanh nghiệp, chi phí thấp, chất lượng cao, ổn định và chuyên nghiệp.",
        },
        {
          link: "/tu-van-ke-toan/quan-binh-chanh",
          image: null,
          name: "Tư vấn kế toán Quận Bình Chánh",
          content:
            "Chúng tôi nhận làm dịch vụ kế toán trọn gói cho doanh nghiệp, chi phí thấp, chất lượng cao, ổn định và chuyên nghiệp.",
        },
      ],
    },
    {
      link: "/tu-van-thanh-lap-cong-ty",
      name: "Tư vấn thành lập công ty",
      children: [
        {
          link: "/tu-van-thanh-lap-cong-ty/xin-giay-phep-dau-tu-va-thu-tuc-can-biet",
          image: null,
          name: "Xin giấy phép đầu tư - Hồ sơ và Thủ tục cần biết",
          content:
            "Chúng tôi nhận làm dịch vụ kế toán trọn gói cho doanh nghiệp, chi phí thấp, chất lượng cao, ổn định và chuyên nghiệp.",
        },
        {
          link: "/tu-van-thanh-lap-cong-ty/nhung-luu-y-truoc-khi-thanh-lap-cong-ty-tai-quan-1",
          image: null,
          name: "Những lưu ý trước khi thành lập công ty tại quận 1",
          content:
            "Chúng tôi nhận làm dịch vụ kế toán trọn gói cho doanh nghiệp, chi phí thấp, chất lượng cao, ổn định và chuyên nghiệp.",
        },
        {
          link: "/tu-van-thanh-lap-cong-ty/nhung-luu-y-khi-thanh-lap-doanh-nghiep-tai-quan-2",
          image: null,
          name: "Những lưu ý khi thành lập doanh nghiệp tại quận 2",
          content:
            "Chúng tôi nhận làm dịch vụ kế toán trọn gói cho doanh nghiệp, chi phí thấp, chất lượng cao, ổn định và chuyên nghiệp.",
        },
        {
          link: "/tu-van-thanh-lap-cong-ty/nhung-dieu-can-luu-y-khi-thanh-lap-cong-ty-tai-quan-3",
          image: null,
          name: "Những điều cần lưu ý khi thành lập công ty tại quận 3",
          content:
            "Chúng tôi nhận làm dịch vụ kế toán trọn gói cho doanh nghiệp, chi phí thấp, chất lượng cao, ổn định và chuyên nghiệp.",
        },
        {
          link: "/tu-van-thanh-lap-cong-ty/cac-buoc-thanh-lap-cong-ty-tai-quan-4",
          image: null,
          name: "Các bước thành lập công ty tại quận 4",
          content:
            "Chúng tôi nhận làm dịch vụ kế toán trọn gói cho doanh nghiệp, chi phí thấp, chất lượng cao, ổn định và chuyên nghiệp.",
        },
        {
          link: "/tu-van-thanh-lap-cong-ty/thanh-lap-doanh-nghiep-quan-5-dang-ky-o-dau",
          image: null,
          name: "Thành lập doanh nghiệp quận 5 đăng ký ở đâu?",
          content:
            "Chúng tôi nhận làm dịch vụ kế toán trọn gói cho doanh nghiệp, chi phí thấp, chất lượng cao, ổn định và chuyên nghiệp.",
        },
        {
          link: "/tu-van-thanh-lap-cong-ty/nhung-dieu-can-biet-khi-thanh-lap-cong-ty-tai-quan-6",
          image: null,
          name: "Những điều cần biết khi thành lập công ty tại quận 6",
          content:
            "Chúng tôi nhận làm dịch vụ kế toán trọn gói cho doanh nghiệp, chi phí thấp, chất lượng cao, ổn định và chuyên nghiệp.",
        },
        {
          link: "/tu-van-thanh-lap-cong-ty/ho-so-thanh-lap-cong-ty-tai-quan-7",
          image: null,
          name: "Hồ sơ để thành lập công ty tại quận 7",
          content:
            "Chúng tôi nhận làm dịch vụ kế toán trọn gói cho doanh nghiệp, chi phí thấp, chất lượng cao, ổn định và chuyên nghiệp.",
        },
        {
          link: "/tu-van-thanh-lap-cong-ty/thu-tuc-thanh-lap-doanh-nghiep-tu-nhan-tai-quan-9",
          image: null,
          name: "Thủ tục thành lập doanh nghiệp tư nhân tại quận 9",
          content:
            "Chúng tôi nhận làm dịch vụ kế toán trọn gói cho doanh nghiệp, chi phí thấp, chất lượng cao, ổn định và chuyên nghiệp.",
        },
        {
          link: "/tu-van-thanh-lap-cong-ty/kinh-nghiem-thanh-lap-cong-ty-tai-quan-10",
          image: null,
          name: "Kinh nghiệm thành lập công ty tại quận 10",
          content:
            "Chúng tôi nhận làm dịch vụ kế toán trọn gói cho doanh nghiệp, chi phí thấp, chất lượng cao, ổn định và chuyên nghiệp.",
        },
        {
          link: "/tu-van-thanh-lap-cong-ty/thanh-lap-cong-ty-tai-quan-11",
          image: null,
          name: "Thành lập công ty tại quận 11",
          content:
            "Chúng tôi nhận làm dịch vụ kế toán trọn gói cho doanh nghiệp, chi phí thấp, chất lượng cao, ổn định và chuyên nghiệp.",
        },
        {
          link: "/tu-van-thanh-lap-cong-ty/giay-phep-dau-tu-va-giay-phep-kinh-doanh-quan-12",
          image: null,
          name: "Giấy phép đầu tư - Giấy phép kinh doanh quận 12",
          content:
            "Chúng tôi nhận làm dịch vụ kế toán trọn gói cho doanh nghiệp, chi phí thấp, chất lượng cao, ổn định và chuyên nghiệp.",
        },
        {
          link: "/tu-van-thanh-lap-cong-ty/dich-vu-thanh-lap-cong-ty-tai-quan-thu-duc",
          image: null,
          name: "Dịch vụ thành lập công ty tại quận Thủ Đức",
          content:
            "Chúng tôi nhận làm dịch vụ kế toán trọn gói cho doanh nghiệp, chi phí thấp, chất lượng cao, ổn định và chuyên nghiệp.",
        },
        {
          link: "/tu-van-thanh-lap-cong-ty/giay-phep-dau-tu-quan-go-vap",
          image: null,
          name: "Giấy phép đầu tư quận Gò Vấp",
          content:
            "Chúng tôi nhận làm dịch vụ kế toán trọn gói cho doanh nghiệp, chi phí thấp, chất lượng cao, ổn định và chuyên nghiệp.",
        },
        {
          link: "/tu-van-thanh-lap-cong-ty/thu-tuc-xin-giay-phep-dau-tu-quan-phu-nhuan",
          image: null,
          name: "Thủ tục xin giấy phép đầu tư quận Phú Nhuận",
          content:
            "Chúng tôi nhận làm dịch vụ kế toán trọn gói cho doanh nghiệp, chi phí thấp, chất lượng cao, ổn định và chuyên nghiệp.",
        },
        {
          link: "/tu-van-thanh-lap-cong-ty/cac-truong-hop-dang-ky-dau-tu-tai-quan-binh-thanh",
          image: null,
          name: "Các trường hợp đăng ký đầu tư tại quận Bình Thạnh",
          content:
            "Chúng tôi nhận làm dịch vụ kế toán trọn gói cho doanh nghiệp, chi phí thấp, chất lượng cao, ổn định và chuyên nghiệp.",
        },
        {
          link: "/tu-van-thanh-lap-cong-ty/quan-phu-nhuan",
          image: null,
          name: "Tư vấn kế toán Quận Phú Nhuận",
          content:
            "Chúng tôi nhận làm dịch vụ kế toán trọn gói cho doanh nghiệp, chi phí thấp, chất lượng cao, ổn định và chuyên nghiệp.",
        },
        {
          link: "/tu-van-thanh-lap-cong-ty/giay-chung-nhan-dang-ky-dau-tu-quan-binh-tan",
          image: null,
          name: "Giấy chứng nhận đăng ký đầu tư quận Bình Tân",
          content:
            "Chúng tôi nhận làm dịch vụ kế toán trọn gói cho doanh nghiệp, chi phí thấp, chất lượng cao, ổn định và chuyên nghiệp.",
        },
        {
          link: "/tu-van-thanh-lap-cong-ty/dieu-chinh-giay-chung-nhan-dau-tu-quan-tan-binh",
          image: null,
          name: "Điều chỉnh giấy chứng nhận đầu tư quận Tân Bình",
          content:
            "Chúng tôi nhận làm dịch vụ kế toán trọn gói cho doanh nghiệp, chi phí thấp, chất lượng cao, ổn định và chuyên nghiệp.",
        },
        {
          link: "/tu-van-thanh-lap-cong-ty/giay-chung-nhan-dau-tu-nuoc-ngoai-tai-quan-tan-phu",
          image: null,
          name: "Giấy chứng nhận đầu tư nước ngoài tại quận Tân Phú",
          content:
            "Chúng tôi nhận làm dịch vụ kế toán trọn gói cho doanh nghiệp, chi phí thấp, chất lượng cao, ổn định và chuyên nghiệp.",
        },
        {
          link: "/tu-van-thanh-lap-cong-ty/cap-giay-phep-nha-thau-nuoc-ngoai-quan-phu-nhuan",
          image: null,
          name: "Cấp giấy phép nhà thầu nước ngoài quận Phú Nhuận",
          content:
            "Chúng tôi nhận làm dịch vụ kế toán trọn gói cho doanh nghiệp, chi phí thấp, chất lượng cao, ổn định và chuyên nghiệp.",
        },
        {
          link: "/tu-van-thanh-lap-cong-ty/giay-chung-nhan-dang-ky-dau-tu-tai-huyen-binh-chanh",
          image: null,
          name: "Giấy chứng nhận đăng ký đầu tư tại huyện Bình Chánh",
          content:
            "Chúng tôi nhận làm dịch vụ kế toán trọn gói cho doanh nghiệp, chi phí thấp, chất lượng cao, ổn định và chuyên nghiệp.",
        },
        {
          link: "/tu-van-thanh-lap-cong-ty/xin-giay-phep-dau-tu-nuoc-ngoai-huyen-nha-be",
          image: null,
          name: "Xin giấy phép đầu tư nước ngoài huyện Nhà Bè",
          content:
            "Chúng tôi nhận làm dịch vụ kế toán trọn gói cho doanh nghiệp, chi phí thấp, chất lượng cao, ổn định và chuyên nghiệp.",
        },
        {
          link: "/tu-van-thanh-lap-cong-ty/cap-giay-chung-nhan-dang-ky-dau-tu-huyen-cu-chi",
          image: null,
          name: "Cấp giấy chứng nhận đăng ký đầu từ huyện Củ Chi",
          content:
            "Chúng tôi nhận làm dịch vụ kế toán trọn gói cho doanh nghiệp, chi phí thấp, chất lượng cao, ổn định và chuyên nghiệp.",
        },
        {
          link: "/tu-van-thanh-lap-cong-ty/thanh-lap-co-so-giao-duc-huyen-can-gio",
          image: null,
          name: "Thành lập cơ sơ giáo dục huyện Cần Giờ",
          content:
            "Chúng tôi nhận làm dịch vụ kế toán trọn gói cho doanh nghiệp, chi phí thấp, chất lượng cao, ổn định và chuyên nghiệp.",
        }
      ],
    },
    {
      link: "/cam-nang",
      name: "Cẩm nang",
      children: [
        {
          link: "/cam-nang/1",
          image: require("../../assets/images/y-nghia-logo.jpg"),
          name: "Quy định về hóa đơn điện tử",
          content: `Hóa đơn điện tử là một hình thức thanh toán điện tử.
            Phương pháp lập hoá đơn điện tử được sử dụng bởi các đối tác kinh doanh,
            chẳng hạn như khách hàng và nhà cung cấp, để trình bày và kiểm tra các tài liệu giao dịch
            giữa nhau và đảm bảo các điều khoản của thỏa thuận thương mại của họ được đáp ứng. Các tài liệu này bao gồm hóa đơn,
            đơn đặt hàng, ghi nợ, ghi chú tín dụng, điều khoản thanh toán và hướng dẫn, và phiếu chuyển tiền.
            Lập hóa đơn điện tử bao gồm một số công nghệ khác nhau và các lựa chọn nhập cảnh và được sử dụng như một từ khóa
            để mô tả bất kỳ phương pháp nào mà một hóa đơn được trình bày bằng điện tử cho khách hàng để thanh toán`,
        },
        {
          link: "/cam-nang/2",
          image: require("../../assets/images/thiet-ke-letterhead-cho-cong-ty.jpg"),
          name: "10 bí quyết thiết kế letterhead cho công ty",
          content: `Letterhead là một trong những ấn phẩm không thể thiếu khi bắt đầu xây dựng hệ thống nhận diện thương hiệu,
            được dùng để trao đổi thông tin giữa công ty và khách hàng với nhau. Hôm nay,
            RGB sẽ chia sẻ cho các bạn 10 bí quyết thiết kế letterhead một cách chuyên nghiệp và thu hút.`,
        },
        {
          link: "/cam-nang/3",
          image: require("../../assets/images/y-nghia-logo.jpg"),
          name: "Thông điệp logo qua các thương hiệu",
          content: `Nếu tên thương hiệu được thay đổi thành những câu chữ khác nhau,
            bạn sẽ vẫn nhận diện được bao nhiêu trong số những thương hiệu đó?
            Hãy cũng RGB đến với đoạn video độc đáo dưới đây để khám phá khả năng nhận biết
            thương hiệu và vai trò của logo trong việc định vị thương hiệu nhé!
            Mục đích của đoạn clip này khi được tung ra chính là đề cao tầm quan trọng
            của các thương hiệu nổi tiếng từ đó giải thích điều thiết yếu của việc xây dựng thương hiệu.`,
        },
      ],
    },
    {
      link: "/lien-he",
      name: "Liên hệ",
    },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
