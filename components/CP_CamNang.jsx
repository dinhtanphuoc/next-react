import Router from 'next/router';
import { map, isArray } from 'lodash';

const handleRedirect = () => {
  Router.push({ pathname: '/dich-vu' })
}

const handleRedirectItem = (link) => {
  if (!link) return;
  Router.push({ pathname: link })
}

const CP_CamNang = () => (
  <div className="container-fluid">
    <div className="container pt-4 pb-4">
      <div
        className="cursor-pointer d-flex justify-content-center"
        onClick={() => handleRedirect()}
      >
        <p className="h4 text-uppercase pb-2">Cẩm nang doanh nghiệp</p>
      </div>
      <div className="row mt-2">
        { isArray(dataCamNang) && map(dataCamNang, (item, index) => (
          <div className="col-lg-4" key={index}>
            <div
              className="cursor-pointer d-flex justify-content-center"
              onClick={() => handleRedirectItem(item.link)}
            >
              <div
                className="image-custom-cam-nang"
                style={{ backgroundImage: `url(${item.image})`}}
              />
            </div>
            <h6 className="d-flex justify-content-start mt-3 pb-2"> { item.title } </h6>
            <p className="d-flex justify-content-start">
              <small> { item.content} </small>
            </p>
          </div>
        )) }
      </div>
    </div>
  </div>
)

export default CP_CamNang;

const dataCamNang = [
  {
    link: '/cam-nang/1',
    image: require('../assets/images/y-nghia-logo.jpg'),
    title: 'Quy định về hóa đơn điện tử',
    content: `Hóa đơn điện tử là một hình thức thanh toán điện tử.
      Phương pháp lập hoá đơn điện tử được sử dụng bởi các đối tác kinh doanh,
      chẳng hạn như khách hàng và nhà cung cấp, để trình bày và kiểm tra các tài liệu giao dịch
      giữa nhau và đảm bảo các điều khoản của thỏa thuận thương mại của họ được đáp ứng. Các tài liệu này bao gồm hóa đơn,
      đơn đặt hàng, ghi nợ, ghi chú tín dụng, điều khoản thanh toán và hướng dẫn, và phiếu chuyển tiền.
      Lập hóa đơn điện tử bao gồm một số công nghệ khác nhau và các lựa chọn nhập cảnh và được sử dụng như một từ khóa
      để mô tả bất kỳ phương pháp nào mà một hóa đơn được trình bày bằng điện tử cho khách hàng để thanh toán`
  },
  {
    link: '/cam-nang/2',
    image: require('../assets/images/thiet-ke-letterhead-cho-cong-ty.jpg'),
    title: '10 bí quyết thiết kế letterhead cho công ty',
    content: `Letterhead là một trong những ấn phẩm không thể thiếu khi bắt đầu xây dựng hệ thống nhận diện thương hiệu,
      được dùng để trao đổi thông tin giữa công ty và khách hàng với nhau. Hôm nay,
      RGB sẽ chia sẻ cho các bạn 10 bí quyết thiết kế letterhead một cách chuyên nghiệp và thu hút.`
  },
  {
    link: '/cam-nang/2',
    image: require('../assets/images/y-nghia-logo.jpg'),
    title: 'Thông điệp logo qua các thương hiệu nổi tiếng',
    content: `Nếu tên thương hiệu được thay đổi thành những câu chữ khác nhau,
      bạn sẽ vẫn nhận diện được bao nhiêu trong số những thương hiệu đó?
      Hãy cũng RGB đến với đoạn video độc đáo dưới đây để khám phá khả năng nhận biết
      thương hiệu và vai trò của logo trong việc định vị thương hiệu nhé!
      Mục đích của đoạn clip này khi được tung ra chính là đề cao tầm quan trọng
      của các thương hiệu nổi tiếng từ đó giải thích điều thiết yếu của việc xây dựng thương hiệu.`
  }
]