import imageSlider from '../../assets/images/bg-ketoangiakhang-4.jpg';
import ImageGioiThieu from '../../assets/images/visao-ketoan-giakhang.jpg';

const initialState = {
  thongTin: {
    soDienThoai: '+84 934 895 060',
    diaChi: '01 Lê Thanh Nghị, P.Hòa Cường Bắc, Q.Hải Châu, Tp.Đà Nẵng',
    email: 'phuocdt.mmo@gmail.com',
    website: 'wwww.ketoangiakhang.net',
    location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.4037262143424!2d108.21559241536086!3d16.044526144360063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219c1a7ff7fbf%3A0x19ce750fd3fa1bd5!2zQ2h1bmcgY8awIFZpbkNvbSwgMDEgTMOqIFRoYW5oIE5naOG7iywgSG_DoCBDxrDhu51uZyBC4bqvYywgSOG6o2kgQ2jDonUsIMSQw6AgTuG6tW5nIDU1MDAwMCwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1584785504972!5m2!1sen!2s'
  },
  menuNavBar: [
    {
      link: '/',
      name: 'Trang chủ'
    },
    {
      link: '/gioi-thieu',
      name: 'Giới thiệu'
    },
    {
      link: '/dich-vu',
      name: 'Dịch vụ',
      children: [
        {
          link: '/dich-vu/ke-toan-tron-goi',
          name: 'Dịch vụ kế toán trọn gói',
        },
        {
          link: '/dich-vu/thanh-lap-cong-ty',
          name: 'Dịch vụ thành lập công ty',
        }
      ]
    },
    {
      link: '/bang-gia',
      name: 'Bảng giá'
    },
    {
      link: '/tu-van-ke-toan',
      name: 'Tư vấn kế toán'
    },
    {
      link: '/tu-van-thanh-lap-cong-ty',
      name: 'Tư vấn thành lập công ty'
    },
    {
      link: '/cam-nang',
      name: 'Cẩm nang'
    },
    {
      link: '/lien-he',
      name: 'Liên hệ'
    }
  ],
  dataSlider: [
    {
      image: imageSlider,
      active: true,
      title: 'First slide label',
      content: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
    },
    {
      image: imageSlider,
      title: '1111111111111',
      content: 'Nul11la vit2222222222222augue mollis interdum.'
    },
    {
      image: imageSlider,
      title: '222222222',
      content: 'Nul11la 333333333 mollis interdum.'
    }
  ],
  gioiThieu: {
    title: 'Gia khang - chuyên nghiệp và kinh nghiệm',
    image: ImageGioiThieu,
    contentRutGon: `GIA KHANG là một trong những công ty chuyên cung cấp dịch vụ kế toán,
    dịch vụ tư vấn thuế, dịch vụ tư vấn tài chính, dịch vụ làm thủ tục về thuế,
    dịch vụ tư vấn quản lý doanh nghiệp hàng đầu Việt Nam.
    Chúng tôi có đầy đủ nguồn lực và khả năng để tự tin đáp ứng tất cả nhu cầu của khách hàng.
    Với đội ngũ cán bộ, nhân viên trẻ trung,
    tài năng trong đó có nhiều cử nhân,
    thạc sĩ hơn 10 năm kinh nghiệm trong lĩnh vực tài chính kế toán.`,
    content: 'No Content'
  }
}

export default (state = initialState, action) => {
  switch (action.type) {

    default:
      return state;
  }
};
