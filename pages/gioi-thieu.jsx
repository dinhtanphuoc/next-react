import { Layout } from '../components/layouts';
import Sidebar from '../components/layouts/Sidebar';

const createMarkup = () => {
  return {__html: data };
}

const GioiThieu = () => (
  <Layout>
    <div className="container hv-100 py-4">
      <div className="row">
        <div className="col-xl-9">
          <div dangerouslySetInnerHTML={createMarkup()} />
        </div>
        <div className="col-xl-3 d-none d-xl-block">
          <Sidebar />
        </div>
      </div>
    </div>
  </Layout>
)

export default GioiThieu;

const data = `
<table id="contentPage_fvAbout" cellspacing="0">
<tbody>
<tr>
<td colspan="2">
<h1>Giới thiệu</h1>
<div class="lineheight"><strong>C&Ocirc;NG TY TNHH C&Ocirc;NG NGHỆ SỐ Gia Khang&nbsp;</strong>l&agrave; một trong những c&ocirc;ng ty chuy&ecirc;n cung cấp dịch vụ kế to&aacute;n ,dịch vụ tư vấn thuế; &nbsp;dịch vụ tư vấn t&agrave;i ch&iacute;nh; dịch vụ l&agrave;m thủ tục về thuế; dịch vụ tư vấn quản l&yacute; doanh nghiệp h&agrave;ng đầu Việt Nam. Ch&uacute;ng t&ocirc;i c&oacute; đầy đủ nguồn lực v&agrave; khả năng để tự tin đ&aacute;p ứng tất cả nhu cầu của kh&aacute;ch h&agrave;ng. Với đội ngũ c&aacute;n bộ, nh&acirc;n vi&ecirc;n trẻ trung, t&agrave;i năng trong đ&oacute; c&oacute; nhiều cử nh&acirc;n, thạc sĩ &nbsp;hơn 10 năm kinh nghiệm trong lĩnh vực t&agrave;i ch&iacute;nh kế to&aacute;n.</div>
<div class="lineheight">&nbsp;&lt;/dng định về chất lượng dịch vụ.&nbsp;</div>
<div>&nbsp;</div>
iv&gt;
<div class="lineheight">
<div>Ch&uacute;ng t&ocirc;i n&ecirc;u cao khẩu hiệu &ldquo;Tạo dựng phong c&aacute;ch chuy&ecirc;n nghiệp&rdquo; để l&agrave;m việc chuy&ecirc;n nghiệp v&agrave; phục vụ kh&aacute;ch h&agrave;ng chuy&ecirc;n nghiệp. C&aacute;c dịch vụ của ch&uacute;ng t&ocirc;i đ&atilde; v&agrave; đang được sử dụng rộng r&atilde;i ở c&aacute;c doanh nghiệp tr&ecirc;n to&agrave;n HCM với nhiều m&ocirc; h&igrave;nh kh&aacute;c nhau trong c&aacute;c lĩnh vực kh&aacute;c nhau v&agrave; được đ&ocirc;ng đảo kh&aacute;ch h&agrave;ng khẳ
<div>Kh&aacute;t vọng vươn l&ecirc;n kh&ocirc;ng ngừng v&agrave; tinh thần tương &aacute;i l&agrave; n&eacute;t nổi bật trong văn h&oacute;a v&agrave; con người c&ocirc;ng ty &nbsp;ch&uacute;ng t&ocirc;i . Ch&uacute;ng t&ocirc;i lu&ocirc;n ch&uacute; t&acirc;m x&acirc;y dựng đội ngũ nh&acirc;n vi&ecirc;n trẻ trung, t&agrave;i năng v&agrave; kh&ocirc;ng ngừng chi&ecirc;u mộ hiền t&agrave;i từ c&aacute;c v&ugrave;ng miền trong cả nước c&oacute; chung ch&iacute; hướng để c&ugrave;ng nhau x&acirc;y dựng một tổ chức h&ugrave;ng mạnh, tạo ra những dịch vụ, sản phẩm tr&iacute; tuệ phục vụ cộng đồng v&agrave; x&acirc;y dựng đất nước.&nbsp;</div>
<div>&nbsp;</div>
<div>Với năng lực của m&igrave;nh, ch&uacute;ng t&ocirc;i tự tin mang đến cho Qu&yacute; kh&aacute;ch h&agrave;ng những dịch vụ ho&agrave;n hảo nhất, chuy&ecirc;n nghiệp tối ưu h&oacute;a c&ocirc;ng t&aacute;c quản l&yacute;, đem lại lợi &iacute;ch tối đa cho doanh nghiệp của Qu&yacute; vị. Đến với ch&uacute;ng t&ocirc;i Qu&yacute; vị sẽ thấy chuy&ecirc;n nghiệp tạo n&ecirc;n phong c&aacute;ch.</div>
<h2><strong>Mục ti&ecirc;u ph&aacute;t triển</strong></h2>
<div>&ldquo;T&ocirc;n trọng đạo đức nghề nghiệp.</div>
<div>Phấn đấu đem lại lợi &iacute;ch cao nhất cho kh&aacute;ch h&agrave;ng&rdquo;</div>
<h2><strong>Đội ngũ nh&acirc;n vi&ecirc;n</strong></h2>
<div>Ch&uacute;ng t&ocirc;i t&acirc;m niệm &ldquo;Con người l&agrave; nền tảng, đo&agrave;n kết l&agrave; sức mạnh của mọi sự ph&aacute;t triển&rdquo;, ch&iacute;nh v&igrave; thế n&ecirc;n c&ocirc;ng t&aacute;c nh&acirc;n sự được đặt l&ecirc;n h&agrave;ng đầu. Ch&uacute;ng t&ocirc;i c&oacute; quy tr&igrave;nh tuyển dụng v&agrave; đ&agrave;o tạo nh&acirc;n sự chuy&ecirc;n nghiệp, lu&ocirc;n hướng tới việc n&acirc;ng cao năng lực của c&aacute;c th&agrave;nh vi&ecirc;n</div>
<div>&nbsp;</div>
<h3>Để nhận được th&ocirc;ng tin r&otilde; hơn, mời qu&yacute; kh&aacute;ch đến:</h3>
<div>01 L&ecirc; Thanh Nghị, Q. Hải Ch&acirc;u, Tp. Đ&agrave; Nẵng</div>
<div>Hoặc li&ecirc;n hệ theo số điện thọai sau:</div>
<div>0934 895 060&nbsp;</div>
</div>
</div>
</td>
</tr>
</tbody>
</table>`;