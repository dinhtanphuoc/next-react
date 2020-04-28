import imageSlider from "../../assets/images/bg-ketoangiakhang-4.jpg";
import ImageGioiThieu from "../../assets/images/visao-ketoan-giakhang.jpg";

const initialState = {
  dataSlider: [
    {
      image: imageSlider,
      active: true,
      title: "First slide label",
      content: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      image: imageSlider,
      title: "1111111111111",
      content: "Nul11la vit2222222222222augue mollis interdum.",
    },
    {
      image: imageSlider,
      title: "222222222",
      content: "Nul11la 333333333 mollis interdum.",
    },
  ],
  gioiThieu: {
    title: "Gia khang - chuyên nghiệp và kinh nghiệm",
    image: ImageGioiThieu,
    contentRutGon: `GIA KHANG là một trong những công ty chuyên cung cấp dịch vụ kế toán,
    dịch vụ tư vấn thuế, dịch vụ tư vấn tài chính, dịch vụ làm thủ tục về thuế,
    dịch vụ tư vấn quản lý doanh nghiệp hàng đầu Việt Nam.
    Chúng tôi có đầy đủ nguồn lực và khả năng để tự tin đáp ứng tất cả nhu cầu của khách hàng.
    Với đội ngũ cán bộ, nhân viên trẻ trung,
    tài năng trong đó có nhiều cử nhân,
    thạc sĩ hơn 10 năm kinh nghiệm trong lĩnh vực tài chính kế toán.`,
    content: "No Content",
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
