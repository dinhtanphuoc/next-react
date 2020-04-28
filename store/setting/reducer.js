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
    },
    {
      link: "/tu-van-thanh-lap-cong-ty",
      name: "Tư vấn thành lập công ty",
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
