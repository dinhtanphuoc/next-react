import { useRouter } from 'next/router';

const Footer = () => {
  const router = useRouter();
  return (
    <>
      { router.pathname !== '/lien-he' && (
        <div className="container-fluid bg-secondary text-white">
          <div className="container">
            <div className="row pt-4 pb-4">
              <div className="col-lg-5">
                <h4 className="text-uppercase pb-3">Liên hệ chúng tôi</h4>
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
              <div className="col-lg-7">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.4037262143424!2d108.21559241536086!3d16.044526144360063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219c1a7ff7fbf%3A0x19ce750fd3fa1bd5!2zQ2h1bmcgY8awIFZpbkNvbSwgMDEgTMOqIFRoYW5oIE5naOG7iywgSG_DoCBDxrDhu51uZyBC4bqvYywgSOG6o2kgQ2jDonUsIMSQw6AgTuG6tW5nIDU1MDAwMCwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1584785504972!5m2!1sen!2s"
                  style={{ width: '100%', height: '300px', border: 'none'}}
                />
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="bg-dark text-white-50">
        <div className="py-3">
          <small className="d-flex justify-content-center"> ketoangiakhang.net - Công ty TNHH MTV Gia Khang</small>
        </div>
      </div>
    </>
  )
}

export default Footer;