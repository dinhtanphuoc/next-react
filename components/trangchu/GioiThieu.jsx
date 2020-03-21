
import Image from '../../assets/images/visao-ketoan-giakhang.jpg';
import Router from 'next/router';

const handleRedirect = () => {
  Router.push({ pathname: '/gioi-thieu' })
}

const GioiThieu = () => (
  <div className="container pt-4 pb-4">
    <div className="d-flex justify-content-center">
      <h3 className="text-uppercase">Vì sao bạn nên chọn chúng tôi</h3>
    </div>
    <div className="row mt-3">
      <div className="col-lg-6">
        <h6 className="text-uppercase">Gia khang - chuyên nghiệp và kinh nghiệm</h6>
        <p className="pt-2">
          <small>
            GIA KHANG là một trong những công ty chuyên cung cấp dịch vụ kế toán,
            dịch vụ tư vấn thuế, dịch vụ tư vấn tài chính, dịch vụ làm thủ tục về thuế,
            dịch vụ tư vấn quản lý doanh nghiệp hàng đầu Việt Nam.
            Chúng tôi có đầy đủ nguồn lực và khả năng để tự tin đáp ứng tất cả nhu cầu của khách hàng.
            Với đội ngũ cán bộ, nhân viên trẻ trung,
            tài năng trong đó có nhiều cử nhân,
            thạc sĩ hơn 10 năm kinh nghiệm trong lĩnh vực tài chính kế toán.
          </small>
        </p>
        <div className="d-flex justify-content-center my-3 ">
          <button
            type="button"
            className="btn btn-info"
            onClick={() => handleRedirect()}
          >
            Xem thêm
          </button>
        </div>
      </div>
      <div className="col-lg-6">
        <div
          className="image-custom-gioi-thieu"
          style={{ backgroundImage: `url(${Image})`}}
        />
      </div>
    </div>
  </div>
)

export default GioiThieu
