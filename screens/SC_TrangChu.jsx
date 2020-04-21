import CP_GioiThieu from '../components/CP_GioiThieu';
import CP_Slider from '../components/CP_Slider';
import CP_DichVu from '../components/CP_DichVu';
import CP_CamNang from '../components/CP_CamNang';

const ScreenTrangChu = () => {
  return (
    <>
      <CP_Slider />
      <CP_GioiThieu />
      <CP_DichVu />
      <CP_CamNang />
      <div className="container-fluid bg-info text-white py-4">
        <h4 className="text-uppercase text-center">Bạn không hiểu về kế toán thuế?</h4>
        <h6 className="text-center">Doanh nghiệp phải hiểu rõ Kế Toán Thuế – Người am hiểu Thuế Kế toán mới chính là người thành công</h6>
        <h6 className="text-center pt-2">Hãy gọi ngay cho chúng tôi để được tư vấn miễn phí</h6>
        <div className="border-custom-sdt">
          <span className="custom-sdt">0934 895 060</span>
        </div>
      </div>
    </>
  )
}

export default ScreenTrangChu;
