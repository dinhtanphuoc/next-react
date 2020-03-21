import Router from 'next/router';
import { map, isArray } from 'lodash';

const handleRedirect = () => {
  Router.push({ pathname: '/dich-vu' })
}

const handleRedirectItem = (link) => {
  if (!link) return;
  Router.push({ pathname: link })
}

const DichVu = () => (
  <div className="container-fluid bg-light text-dark">
    <div className="container pt-4 pb-4">
      <div
        className="cursor-pointer d-flex justify-content-center"
        onClick={() => handleRedirect()}
      >
        <p className="h4 text-uppercase pb-2">Dịch vụ chúng tôi</p>
      </div>
      <div className="row mt-2">
        { isArray(dataDichVu) && map(dataDichVu, (item, index) => (
          <div className="col-lg-4" key={index}>
            <div
              className="cursor-pointer d-flex justify-content-center"
              onClick={() => handleRedirectItem(item.link)}
            >
              <div
                className="image-custom-dich-vu"
                style={{ backgroundImage: `url(${item.image})`}}
              />
            </div>
            <p className="d-flex justify-content-center text-uppercase mt-2 font-weight-bold"> { item.title } </p>
            <p className="d-flex justify-content-center text-center">
              <small> { item.content} </small>
            </p>
          </div>
        )) }
      </div>
    </div>
  </div>
)

export default DichVu;

const dataDichVu = [
  {
    link: '/dich-vu/ke-toan-tron-goi',
    image: require('../../assets/images/icon-ke-toan.png'),
    title: 'Dịch vụ kế toán trọn gói',
    content: 'Chúng tôi nhận làm dịch vụ kế toán trọn gói cho doanh nghiệp, chi phí thấp, chất lượng cao, ổn định và chuyên nghiệp.'
  },
  {
    link: '/dich-vu/thanh-lap-cong-ty',
    image: require('../../assets/images/icon-thanh-lap-cty.png'),
    title: 'Thành lập công ty',
    content: 'Gia Khang chuyên cung cấp dịch vụ thành lập công ty trọn gói cho doanh nghiệp Việt Nam và doanh nghiệp nước ngoài tại Việt Nam.'
  },
  {
    link: '/dich-vu/thanh-lap-doanh-nghiep',
    image: require('../../assets/images/icon-thanh-lap-cty.png'),
    title: 'Thành lập doanh nghiệp',
    content: 'Gia Khang chuyên cung cấp dịch vụ thành lập doanh nghiệp trọn gói cho doanh nghiệp Việt Nam và doanh nghiệp nước ngoài tại Việt Nam.'
  },
  {
    link: '/dich-vu/giay-phep-dau-tu',
    image: require('../../assets/images/icon-thanh-lap-cty.png'),
    title: 'Giấy phép đầu tư',
    content: 'Xin cấp giấy chứng nhận đầu tư cho doanh nghiệp nước ngoài tại Việt Nam, đảm bảo làm thủ tục nhanh chóng, an toàn với chi phí dịch vụ thấp nhất.'
  },
  {
    link: '/dich-vu/quyet-toan-thue-nam',
    image: require('../../assets/images/icon-quyet-toan-thue-nam.png'),
    title: 'Dịch vụ quyết toán thuế năm',
    content: 'Nhận làm dịch vụ quyết toán thuế TNDN cuối năm, kê khai quyết toán thuế thu nhập doanh nghiệp cuối năm, gở rối sổ sách kế toán cuối năm.'
  },
  {
    link: '/dich-vu/bao-cao-thue',
    image: require('../../assets/images/icon-tax.png'),
    title: 'Dịch vụ báo cáo thuế',
    content: 'Hàng tháng, hàng quý phải làm những báo cáo thuế gì để nộp cho cơ quan thuế. Bạn hãy yên tâm, đã có nhân viên chúng tôi lo.'
  }
]