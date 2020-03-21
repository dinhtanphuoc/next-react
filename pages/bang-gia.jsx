import { Layout } from '../components/layouts';

const createMarkup = () => {
  return {__html: data };
}

const BangGia = () => (
  <Layout>
    <div className="container hv-100 py-4">
      <div dangerouslySetInnerHTML={createMarkup()} />
    </div>
  </Layout>
)

export default BangGia;

const data = `
<div class="">
<h1>Bảng gi&aacute; dịch vụ kế to&aacute;n</h1>
<div class="feature">&nbsp;</div>
<h4>Nội dung c&ocirc;ng việc kế to&aacute;n</h4>
<p>1. Tư vấn sử dụng h&oacute;a đơn đầu ra + đầu v&agrave;o</p>
<p>2. Lập v&agrave; nộp b&aacute;o c&aacute;o thuế VAT h&agrave;ng th&aacute;ng/qu&yacute;</p>
<p>3. Lập v&agrave; nộp b&aacute;o c&aacute;o sử dụng h&oacute;a đơn h&agrave;ng qu&yacute;</p>
<p>4.Lưu trữ số liệu tr&ecirc;n 10 năm</p>
<p>5. Đến tận nơi lấy h&oacute;a đơn chứng từ</p>
<p>6.Bảo mật&nbsp;th&ocirc;ng tin&nbsp;tuyệt đối cho doanh nghiệp</p>
</div>
<div class="">
<h2>Bảng gi&aacute; dịch vụ kế to&aacute;n trọn g&oacute;i</h2>
<div class="feature">&nbsp;</div>
<h4>Nội dung c&ocirc;ng việc kế to&aacute;n</h4>
<p>1. Tư vấn sử dụng h&oacute;a đơn đầu ra + đầu v&agrave;o</p>
<p>2. Lập v&agrave; nộp b&aacute;o c&aacute;o thuế VAT h&agrave;ng th&aacute;ng/qu&yacute;</p>
<p>3. Lập v&agrave; nộp b&aacute;o c&aacute;o sử dụng h&oacute;a đơn h&agrave;ng qu&yacute;</p>
<p>4. Lập v&agrave; nộp tờ khai TNCN h&agrave;ng qu&yacute; (nếu c&oacute;)</p>
<p>5. Lập v&agrave; nộp b&aacute;o c&aacute;o t&agrave;i ch&iacute;nh cuối năm</p>
<p>6. Lập v&agrave; nộp quyết to&aacute;n thuế TNDN + TNCN cuối năm</p>
<p>7. Lập sổ s&aacute;ch&nbsp;kế to&aacute;n&nbsp;theo quy định hiện h&agrave;nh</p>
<p>8. Đại diện doanh nghiệp l&agrave;m việc với cơ quan thuế khi cần</p>
<p>9. Tư vấn sử dụng c&aacute;c chi ph&iacute; hợp l&yacute; cho c&ocirc;ng ty</p>
<p>10. Nhận h&oacute;a đơn chứng từ tận nơi</p>
<p>11. Lập v&agrave; in phiếu thu - chi - xuất - nhập kho&hellip;theo quy định</p>
<p>12. Lưu trữ số liệu tr&ecirc;n 5 năm</p>
<p>13. Đến tận nơi lấy h&oacute;a đơn chứng từ</p>
<p>14 .Bảo mật&nbsp;th&ocirc;ng tin&nbsp;tuyệt đối cho doanh nghiệp</p>
<p>15. Th&ocirc;ng b&aacute;o kịp thời cho doanh nghiệp c&aacute;c vấn đề về h&agrave;ng tồn kho, chi ph&iacute;, c&ocirc;ng nợ, số thuế phải nộp</p>
</div>
<p>&nbsp;</p>`;