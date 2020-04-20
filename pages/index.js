import React from 'react';
import { Layout } from '../components/layouts';
import Carousel from '../components/common/Carousel';
import GioiThieu from '../components/trangchu/GioiThieu';
import DichVu from '../components/common/DichVu';
import CamNang from '../components/common/CamNang';

const TrangChu = (props) => {
  return (
    <Layout>
      <Carousel />
      <GioiThieu />
      <DichVu />
      <CamNang />
      <div className="container-fluid bg-info text-white py-4">
        <h2 className="text-uppercase text-center">Bạn không hiểu về kế toán thuế?</h2>
        <h5 className="text-center">Doanh nghiệp phải hiểu rõ Kế Toán Thuế – Người am hiểu Thuế Kế toán mới chính là người thành công</h5>
        <h5 className="text-center pt-2">Hãy gọi ngay cho chúng tôi để được tư vấn miễn phí</h5>
        <div className="border-custom-sdt">
          <span className="custom-sdt">0934 895 060</span>
        </div>
      </div>
    </Layout>
  )
}

export default TrangChu;
