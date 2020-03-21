import { Layout } from '../components/layouts';

const LienHe = () => (
  <Layout>
    <div className="container hv-100 py-4">
      <div className="row pb-4">
        <div className="col-lg-5">
          <div className="pb-2">
            <h2 className="pb-3">Thông tin liên hệ </h2>
            <h6>
              <i className="fas fa-home" aria-hidden="true" />
              <small className="pl-2">01 Lê Thanh Nghị, P.Hòa Cường Bắc, Q.Hải Châu, Tp.Đà Nẵng</small>
            </h6>
            <h6>
              <i className="fas fa-mobile-alt" aria-hidden="true" />
              <small className="pl-2">0934 895 060</small>
            </h6>
            <h6>
              <i className="fas fa-envelope-square" aria-hidden="true" />
              <small className="pl-2">phuocdt.@gmail.com</small>
            </h6>
            <h6>
              <i className="fas fa-globe-americas" aria-hidden="true" />
              <small className="pl-2">wwww.ketoangiakhang.net</small>
            </h6>
          </div>
        </div>
        <div className="col-lg-7">
          <form action="mail.php" method="post">
            <div className="card rounded-0">
              <div className="card-header p-0">
                <div className="bg-info text-white text-center py-2">
                  <h3><i className="fa fa-envelope" aria-hidden="true" /> Liên hệ</h3>
                </div>
              </div>
              <div className="card-body p-3">
                <div className="form-group">
                  <div className="input-group mb-2">
                    <div className="input-group-prepend">
                      <div className="input-group-text"><i className="fa fa-user text-info" aria-hidden="true" /></div>
                    </div>
                    <input type="text" className="form-control" id="nombre" name="nombre" placeholder="Nhập họ và tên" required />
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group mb-2">
                    <div className="input-group-prepend">
                      <div className="input-group-text"><i className="fa fa-envelope text-info" aria-hidden="true" /></div>
                    </div>
                    <input type="email" className="form-control" id="nombre" name="email" placeholder="Nhập email" required />
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group mb-2">
                    <div className="input-group-prepend">
                      <div className="input-group-text"><i className="fa fa-comment text-info" aria-hidden="true" /></div>
                    </div>
                    <textarea className="form-control" placeholder="Nhập nội dung" required></textarea>
                  </div>
                </div>
                <div className="text-center">
                  <input type="submit" value="Gửi" className="btn bg-info text-white btn-block rounded-0 py-2" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.4037262143424!2d108.21559241536086!3d16.044526144360063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219c1a7ff7fbf%3A0x19ce750fd3fa1bd5!2zQ2h1bmcgY8awIFZpbkNvbSwgMDEgTMOqIFRoYW5oIE5naOG7iywgSG_DoCBDxrDhu51uZyBC4bqvYywgSOG6o2kgQ2jDonUsIMSQw6AgTuG6tW5nIDU1MDAwMCwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1584785504972!5m2!1sen!2s"
        style={{ width: '100%', height: '700px', border: 'none'}}
      />
    </div>
  </Layout>
)

export default LienHe
