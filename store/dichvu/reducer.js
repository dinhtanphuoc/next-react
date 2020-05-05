const initialState = {
  listDichVu: [
    {
      link: "/dich-vu/ke-toan-tron-goi",
      content: `<div class="row" style="box-sizing: border-box; backface-visibility: hidden; margin-right: -15px; margin-left: -15px; color: rgb(51, 51, 51); font-family: open_sansbold, Arial, &quot;Helvetica Neue&quot;, Helvetica, Verdana; font-size: 14px; background-color: rgb(255, 255, 255);">
      <div class="col-xs-12 col-md-12" style="box-sizing: border-box; backface-visibility: hidden; position: relative; min-height: 1px; padding-right: 15px; padding-left: 15px; float: left; width: 1200px;">
      <h2 class="tieuchi" style="box-sizing: border-box; backface-visibility: hidden; font-weight: 400; line-height: 1.1; color: red; margin-top: 20px; margin-bottom: 10px; font-size: 32pt; text-align: center; padding-top: 20px; padding-bottom: 40px; border-bottom: 4px solid rgb(238, 238, 238);">5 ti&ecirc;u ch&iacute; để bạn chọn dịch vụ kế to&aacute;n trọn g&oacute;i Đ&ocirc;ng T&acirc;y</h2>
      </div>
      </div>

      <div class="col-xs-12 col-md-12 no-padding bg-white-gray margin-top30px" style="box-sizing: border-box; backface-visibility: hidden; position: relative; min-height: 1px; padding: 0px; float: left; width: 1170px; background: rgb(245, 245, 245); margin-top: 30px; color: rgb(51, 51, 51); font-family: open_sansbold, Arial, &quot;Helvetica Neue&quot;, Helvetica, Verdana; font-size: 14px;">
      <div class="col-xs-12 col-md-8" style="box-sizing: border-box; backface-visibility: hidden; position: relative; min-height: 1px; padding-right: 15px; padding-left: 15px; float: left; width: 780px;">
      <h2 class="colorred" style="box-sizing: border-box; backface-visibility: hidden; font-weight: 400; line-height: 1.1; color: rgb(255, 51, 51); margin-top: 20px; margin-bottom: 10px; font-size: 30px;">1. CHI PH&Iacute; THẤP - HIỆU QUẢ CAO</h2>

      <div class="top5px" style="box-sizing: border-box; backface-visibility: hidden; padding-top: 5px;"><span style="box-sizing: border-box; backface-visibility: hidden; font-weight: 700; font-size: 14pt;">Chỉ với 750.000đ bạn c&oacute; ngay</span></div>

      <ul class="tieuchi" style="box-sizing: border-box; backface-visibility: hidden; margin-top: 0px; margin-bottom: 10px; list-style: outside none none; margin-left: 20px; padding: 0px;">
        <li style="box-sizing: border-box; backface-visibility: hidden; list-style-image: url(&quot;/images/icon/icon-list.png&quot;); line-height: 20px; padding-top: 10px; padding-bottom: 10px; border-bottom: 1px solid rgb(238, 238, 238);">Một bộ m&aacute;y kế to&aacute;n chuy&ecirc;n nghiệp</li>
        <li style="box-sizing: border-box; backface-visibility: hidden; list-style-image: url(&quot;/images/icon/icon-list.png&quot;); line-height: 20px; padding-top: 10px; padding-bottom: 10px; border-bottom: 1px solid rgb(238, 238, 238);">Một đội ngủ nh&acirc;n vi&ecirc;n tư vấn tận t&acirc;m</li>
        <li style="box-sizing: border-box; backface-visibility: hidden; list-style-image: url(&quot;/images/icon/icon-list.png&quot;); line-height: 20px; padding-top: 10px; padding-bottom: 10px; border-bottom: 1px solid rgb(238, 238, 238);">Một đội ngủ chuy&ecirc;n gia lu&ocirc;n cập nhật c&aacute;c th&ocirc;ng tư, c&ocirc;ng văn, nghị định mới nhất cho c&ocirc;ng ty bạn</li>
        <li style="box-sizing: border-box; backface-visibility: hidden; list-style-image: url(&quot;/images/icon/icon-list.png&quot;); line-height: 20px; padding-top: 10px; padding-bottom: 10px; border-bottom: 1px solid rgb(238, 238, 238);">Giải ph&oacute;ng gi&aacute;m đốc ra khỏi c&aacute;c con số kế to&aacute;n thuế</li>
        <li style="box-sizing: border-box; backface-visibility: hidden; list-style-image: url(&quot;/images/icon/icon-list.png&quot;); line-height: 20px; padding-top: 10px; padding-bottom: 10px; border-bottom: 1px solid rgb(238, 238, 238);">To&agrave;n bộ thời gian tập trung quản l&yacute; v&agrave; kinh doanh</li>
      </ul>
      </div>

      <div class="col-xs-12 col-md-4 no-padding" style="box-sizing: border-box; backface-visibility: hidden; position: relative; min-height: 1px; padding: 0px; float: left; width: 390px;"><img alt="Dịch vụ kế toán trọn gói" src="http://sosachketoan.vn/images/banner/tieuchi-5.jpg" style="box-sizing: border-box; backface-visibility: hidden; border: 0px; vertical-align: middle; max-width: 100%; height: auto;" /></div>
      </div>

      <div class="col-xs-12 col-md-12 no-padding bg-white-gray margin-top30px" style="box-sizing: border-box; backface-visibility: hidden; position: relative; min-height: 1px; padding: 0px; float: left; width: 1170px; background: rgb(245, 245, 245); margin-top: 30px; color: rgb(51, 51, 51); font-family: open_sansbold, Arial, &quot;Helvetica Neue&quot;, Helvetica, Verdana; font-size: 14px;">
      <div class="col-xs-12 col-md-4 no-padding" style="box-sizing: border-box; backface-visibility: hidden; position: relative; min-height: 1px; padding: 0px; float: left; width: 390px;"><img alt="Dịch vụ kế toán HCM" src="http://sosachketoan.vn/images/banner/tieuchi-1.jpg" style="box-sizing: border-box; backface-visibility: hidden; border: 0px; vertical-align: middle; max-width: 100%; height: auto;" /></div>

      <div class="col-xs-12 col-md-8" style="box-sizing: border-box; backface-visibility: hidden; position: relative; min-height: 1px; padding-right: 15px; padding-left: 15px; float: left; width: 780px;">
      <h2 class="colorred" style="box-sizing: border-box; backface-visibility: hidden; font-weight: 400; line-height: 1.1; color: rgb(255, 51, 51); margin-top: 20px; margin-bottom: 10px; font-size: 30px;">2. AN TO&Agrave;N BẢO MẬT TUYỆT ĐỐI</h2>

      <ul class="tieuchi" style="box-sizing: border-box; backface-visibility: hidden; margin-top: 0px; margin-bottom: 10px; list-style: outside none none; margin-left: 20px; padding: 0px;">
        <li style="box-sizing: border-box; backface-visibility: hidden; list-style-image: url(&quot;/images/icon/icon-list.png&quot;); line-height: 20px; padding-top: 10px; padding-bottom: 10px; border-bottom: 1px solid rgb(238, 238, 238);">Th&ocirc;ng tin c&ocirc;ng ty bạn lu&ocirc;n được bảo mật tuyệt đối</li>
        <li style="box-sizing: border-box; backface-visibility: hidden; list-style-image: url(&quot;/images/icon/icon-list.png&quot;); line-height: 20px; padding-top: 10px; padding-bottom: 10px; border-bottom: 1px solid rgb(238, 238, 238);">Số liệu của c&ocirc;ng ty bạn được lưu trử tr&ecirc;n c&aacute;c thiết bị chuy&ecirc;n dụng</li>
        <li style="box-sizing: border-box; backface-visibility: hidden; list-style-image: url(&quot;/images/icon/icon-list.png&quot;); line-height: 20px; padding-top: 10px; padding-bottom: 10px; border-bottom: 1px solid rgb(238, 238, 238);">Dữ liệu được sau lưu li&ecirc;n tục h&agrave;ng ng&agrave;y</li>
        <li style="box-sizing: border-box; backface-visibility: hidden; list-style-image: url(&quot;/images/icon/icon-list.png&quot;); line-height: 20px; padding-top: 10px; padding-bottom: 10px; border-bottom: 1px solid rgb(238, 238, 238);">C&oacute; phần mềm chuy&ecirc;n dụng v&agrave; vận h&agrave;nh độc lập</li>
        <li style="box-sizing: border-box; backface-visibility: hidden; list-style-image: url(&quot;/images/icon/icon-list.png&quot;); line-height: 20px; padding-top: 10px; padding-bottom: 10px; border-bottom: 1px solid rgb(238, 238, 238);">Dữ liệu được lưu trữ &iacute;t nhất 10 năm</li>
        <li style="box-sizing: border-box; backface-visibility: hidden; list-style-image: url(&quot;/images/icon/icon-list.png&quot;); line-height: 20px; padding-top: 10px; padding-bottom: 10px; border-bottom: 1px solid rgb(238, 238, 238);">H&oacute;a đơn chứng từ lu&ocirc;n được cất giử cẩn thận</li>
      </ul>
      </div>
      </div>

      <div class="col-xs-12 col-md-12 no-padding bg-white-gray margin-top30px" style="box-sizing: border-box; backface-visibility: hidden; position: relative; min-height: 1px; padding: 0px; float: left; width: 1170px; background: rgb(245, 245, 245); margin-top: 30px; color: rgb(51, 51, 51); font-family: open_sansbold, Arial, &quot;Helvetica Neue&quot;, Helvetica, Verdana; font-size: 14px;">
      <div class="col-xs-12 col-md-8" style="box-sizing: border-box; backface-visibility: hidden; position: relative; min-height: 1px; padding-right: 15px; padding-left: 15px; float: left; width: 780px;">
      <h2 class="colorred" style="box-sizing: border-box; backface-visibility: hidden; font-weight: 400; line-height: 1.1; color: rgb(255, 51, 51); margin-top: 20px; margin-bottom: 10px; font-size: 30px;">3. CHUY&Ecirc;N NGHIỆP V&Agrave; LU&Ocirc;N SẴN S&Agrave;NG</h2>

      <ul class="tieuchi" style="box-sizing: border-box; backface-visibility: hidden; margin-top: 0px; margin-bottom: 10px; list-style: outside none none; margin-left: 20px; padding: 0px;">
        <li style="box-sizing: border-box; backface-visibility: hidden; list-style-image: url(&quot;/images/icon/icon-list.png&quot;); line-height: 20px; padding-top: 10px; padding-bottom: 10px; border-bottom: 1px solid rgb(238, 238, 238);">Rất chuy&ecirc;n nghiệp, năng động v&agrave; s&aacute;ng tạo</li>
        <li style="box-sizing: border-box; backface-visibility: hidden; list-style-image: url(&quot;/images/icon/icon-list.png&quot;); line-height: 20px; padding-top: 10px; padding-bottom: 10px; border-bottom: 1px solid rgb(238, 238, 238);">Lu&ocirc;n tu&acirc;n thủ quy tr&igrave;nh ISO 9001 v&agrave;o dịch vụ kế to&aacute;n trọn g&oacute;i</li>
        <li style="box-sizing: border-box; backface-visibility: hidden; list-style-image: url(&quot;/images/icon/icon-list.png&quot;); line-height: 20px; padding-top: 10px; padding-bottom: 10px; border-bottom: 1px solid rgb(238, 238, 238);">Thấu hiểu rất rỏ về kế to&aacute;n thuế cho từng loại h&igrave;nh kinh doanh</li>
        <li style="box-sizing: border-box; backface-visibility: hidden; list-style-image: url(&quot;/images/icon/icon-list.png&quot;); line-height: 20px; padding-top: 10px; padding-bottom: 10px; border-bottom: 1px solid rgb(238, 238, 238);">Chỉnh chu v&agrave; tận t&acirc;m cho từng b&uacute;t to&aacute;n</li>
        <li style="box-sizing: border-box; backface-visibility: hidden; list-style-image: url(&quot;/images/icon/icon-list.png&quot;); line-height: 20px; padding-top: 10px; padding-bottom: 10px; border-bottom: 1px solid rgb(238, 238, 238);">Ch&uacute;ng t&ocirc;i lu&ocirc;n chuẩn bị c&aacute;c file tổng hợp để quyết to&aacute;n thuế</li>
        <li style="box-sizing: border-box; backface-visibility: hidden; list-style-image: url(&quot;/images/icon/icon-list.png&quot;); line-height: 20px; padding-top: 10px; padding-bottom: 10px; border-bottom: 1px solid rgb(238, 238, 238);">Lu&ocirc;n ở thế chủ động trong mọi t&igrave;nh huống</li>
      </ul>
      </div>

      <div class="col-xs-12 col-md-4 no-padding" style="box-sizing: border-box; backface-visibility: hidden; position: relative; min-height: 1px; padding: 0px; float: left; width: 390px;"><img alt="Dịch vụ kế toán" src="http://sosachketoan.vn/images/banner/tieuchi-3.jpg" style="box-sizing: border-box; backface-visibility: hidden; border: 0px; vertical-align: middle; max-width: 100%; height: auto;" /></div>
      </div>

      <div class="col-xs-12 col-md-12 no-padding bg-white-gray margin-top30px" style="box-sizing: border-box; backface-visibility: hidden; position: relative; min-height: 1px; padding: 0px; float: left; width: 1170px; background: rgb(245, 245, 245); margin-top: 30px; color: rgb(51, 51, 51); font-family: open_sansbold, Arial, &quot;Helvetica Neue&quot;, Helvetica, Verdana; font-size: 14px;">
      <div class="col-xs-12 col-md-4 no-padding" style="box-sizing: border-box; backface-visibility: hidden; position: relative; min-height: 1px; padding: 0px; float: left; width: 390px;"><img alt="Dịch vụ kế toán HCM" src="http://sosachketoan.vn/images/banner/tieuchi-4.jpg" style="box-sizing: border-box; backface-visibility: hidden; border: 0px; vertical-align: middle; max-width: 100%; height: auto;" /></div>

      <div class="col-xs-12 col-md-8" style="box-sizing: border-box; backface-visibility: hidden; position: relative; min-height: 1px; padding-right: 15px; padding-left: 15px; float: left; width: 780px;">
      <h2 class="colorred" style="box-sizing: border-box; backface-visibility: hidden; font-weight: 400; line-height: 1.1; color: rgb(255, 51, 51); margin-top: 20px; margin-bottom: 10px; font-size: 30px;">4. ỔN ĐỊNH V&Agrave;O L&Acirc;U D&Agrave;I</h2>

      <ul class="tieuchi" style="box-sizing: border-box; backface-visibility: hidden; margin-top: 0px; margin-bottom: 10px; list-style: outside none none; margin-left: 20px; padding: 0px;">
        <li style="box-sizing: border-box; backface-visibility: hidden; list-style-image: url(&quot;/images/icon/icon-list.png&quot;); line-height: 20px; padding-top: 10px; padding-bottom: 10px; border-bottom: 1px solid rgb(238, 238, 238);">Bảo h&agrave;nh dịch vụ kế to&aacute;n trọn đời</li>
        <li style="box-sizing: border-box; backface-visibility: hidden; list-style-image: url(&quot;/images/icon/icon-list.png&quot;); line-height: 20px; padding-top: 10px; padding-bottom: 10px; border-bottom: 1px solid rgb(238, 238, 238);">Ch&uacute;ng t&ocirc;i l&agrave; một tổ chức kinh tế n&ecirc;n rất ổn định</li>
        <li style="box-sizing: border-box; backface-visibility: hidden; list-style-image: url(&quot;/images/icon/icon-list.png&quot;); line-height: 20px; padding-top: 10px; padding-bottom: 10px; border-bottom: 1px solid rgb(238, 238, 238);">Ch&uacute;ng t&ocirc;i l&agrave;m việc theo quy tr&igrave;nh n&ecirc;n c&oacute; t&iacute;nh ồn định rất cao</li>
        <li style="box-sizing: border-box; backface-visibility: hidden; list-style-image: url(&quot;/images/icon/icon-list.png&quot;); line-height: 20px; padding-top: 10px; padding-bottom: 10px; border-bottom: 1px solid rgb(238, 238, 238);">Ch&uacute;ng lu&ocirc;n đồng h&agrave;nh với bạn như người anh em./li&gt;</li>
        <li style="box-sizing: border-box; backface-visibility: hidden; list-style-image: url(&quot;/images/icon/icon-list.png&quot;); line-height: 20px; padding-top: 10px; padding-bottom: 10px; border-bottom: 1px solid rgb(238, 238, 238);">Ch&uacute;ng t&ocirc;i lu&ocirc;n ở đ&acirc;y để gi&uacute;p bạn</li>
      </ul>
      </div>
      </div>

      <div class="col-xs-12 col-md-12 no-padding bg-white-gray margin-top30px" style="box-sizing: border-box; backface-visibility: hidden; position: relative; min-height: 1px; padding: 0px; float: left; width: 1170px; background: rgb(245, 245, 245); margin-top: 30px; color: rgb(51, 51, 51); font-family: open_sansbold, Arial, &quot;Helvetica Neue&quot;, Helvetica, Verdana; font-size: 14px;">
      <div class="col-xs-12 col-md-8" style="box-sizing: border-box; backface-visibility: hidden; position: relative; min-height: 1px; padding-right: 15px; padding-left: 15px; float: left; width: 780px;">
      <h2 class="colorred" style="box-sizing: border-box; backface-visibility: hidden; font-weight: 400; line-height: 1.1; color: rgb(255, 51, 51); margin-top: 20px; margin-bottom: 10px; font-size: 30px;">5. CAM KẾT CỦA Đ&Ocirc;NG T&Acirc;Y</h2>

      <ul class="tieuchi" style="box-sizing: border-box; backface-visibility: hidden; margin-top: 0px; margin-bottom: 10px; list-style: outside none none; margin-left: 20px; padding: 0px;">
        <li style="box-sizing: border-box; backface-visibility: hidden; list-style-image: url(&quot;/images/icon/icon-list.png&quot;); line-height: 20px; padding-top: 10px; padding-bottom: 10px; border-bottom: 1px solid rgb(238, 238, 238);">Kh&ocirc;ng ph&aacute;t sinh th&ecirc;m bất cứ chi ph&iacute; n&agrave;o kh&aacute;c</li>
        <li style="box-sizing: border-box; backface-visibility: hidden; list-style-image: url(&quot;/images/icon/icon-list.png&quot;); line-height: 20px; padding-top: 10px; padding-bottom: 10px; border-bottom: 1px solid rgb(238, 238, 238);">B&agrave;n giao to&agrave;n bộ hồ sơ chứng từ, số liệu kế to&aacute;n khi chấm dức hợp đồng</li>
        <li style="box-sizing: border-box; backface-visibility: hidden; list-style-image: url(&quot;/images/icon/icon-list.png&quot;); line-height: 20px; padding-top: 10px; padding-bottom: 10px; border-bottom: 1px solid rgb(238, 238, 238);">Ho&agrave;n th&agrave;nh 100% c&aacute;c loại sổ s&aacute;ch chứng từ đ&uacute;ng hạn</li>
        <li style="box-sizing: border-box; backface-visibility: hidden; list-style-image: url(&quot;/images/icon/icon-list.png&quot;); line-height: 20px; padding-top: 10px; padding-bottom: 10px; border-bottom: 1px solid rgb(238, 238, 238);">Giải tr&igrave;nh số liệu khi quyết to&aacute;n thuế ngay khi đ&atilde; chấm dức hợp đồng</li>
        <li style="box-sizing: border-box; backface-visibility: hidden; list-style-image: url(&quot;/images/icon/icon-list.png&quot;); line-height: 20px; padding-top: 10px; padding-bottom: 10px; border-bottom: 1px solid rgb(238, 238, 238);">Lu&ocirc;n bảo mật số liệu kế to&aacute;n</li>
        <li style="box-sizing: border-box; backface-visibility: hidden; list-style-image: url(&quot;/images/icon/icon-list.png&quot;); line-height: 20px; padding-top: 10px; padding-bottom: 10px; border-bottom: 1px solid rgb(238, 238, 238);">Đến tận nơi kh&aacute;ch h&agrave;ng để nhận h&oacute;a đơn chứng từ</li>
      </ul>
      </div>

      <div class="col-xs-12 col-md-4 no-padding" style="box-sizing: border-box; backface-visibility: hidden; position: relative; min-height: 1px; padding: 0px; float: left; width: 390px;"><img alt="Dịch vụ kế toán Đông Tây" src="http://sosachketoan.vn/images/banner/tieuchi-2.jpg" style="box-sizing: border-box; backface-visibility: hidden; border: 0px; vertical-align: middle; max-width: 100%; height: auto; opacity: 0.9;" /></div>
      </div>
      <div class="col-xs-12 col-md-12" style="box-sizing: border-box; backface-visibility: hidden; position: relative; min-height: 1px; padding-right: 15px; padding-left: 15px; float: left; width: 1200px; color: rgb(51, 51, 51); font-family: open_sansbold, Arial, &quot;Helvetica Neue&quot;, Helvetica, Verdana; font-size: 14px; background-color: rgb(255, 255, 255);">
<div class="title-trikethrough" style="box-sizing: border-box; backface-visibility: hidden; overflow: hidden; text-align: center; position: relative; z-index: 1; margin: 30px 0px 25px;">
<div class="wraper-title center" style="box-sizing: border-box; backface-visibility: hidden; padding: 0px 15px; display: inline-block;">
<h2 class="colorred" style="box-sizing: border-box; backface-visibility: hidden; font-weight: 500; line-height: 1.2em; color: rgb(255, 51, 51); margin: 0px; font-size: 28px;">BẢNG GI&Aacute; KẾ TO&Aacute;N TRỌN G&Oacute;I</h2>

<hr style="box-sizing: content-box; backface-visibility: hidden; height: 0px; margin-bottom: 5px; border-right: 0px; border-bottom: 0px; border-left: 0px; border-image: initial; width: 100px; margin-top: 10px !important; border-top-style: solid !important; border-top-color: rgb(0, 0, 0) !important;" /></div>
</div>
</div>

<div class="col-xs-12 col-md-12" style="box-sizing: border-box; backface-visibility: hidden; position: relative; min-height: 1px; padding-right: 15px; padding-left: 15px; float: left; width: 1200px; color: rgb(51, 51, 51); font-family: open_sansbold, Arial, &quot;Helvetica Neue&quot;, Helvetica, Verdana; font-size: 14px; background-color: rgb(255, 255, 255);">
<div class="feature" style="box-sizing: border-box; backface-visibility: hidden;">
<table style="backface-visibility: hidden; border-spacing: 0px; border-collapse: collapse; background-color: transparent; width: 1170px; border: 1px solid rgb(51, 51, 51) !important;">
	<tbody style="box-sizing: border-box; backface-visibility: hidden;">
		<tr style="box-sizing: border-box; backface-visibility: hidden; height: 15px;">
			<td rowspan="2" style="box-sizing: border-box; backface-visibility: hidden; padding: 0px 10px; border: 1px solid rgb(51, 51, 51) !important; font-size: 12pt; height: 30px; line-height: 40px; text-align: center;"><span style="box-sizing: border-box; backface-visibility: hidden; font-weight: 700;">SỐ LƯỢNG H&Oacute;A ĐƠN MUA V&Agrave;O + B&Aacute;N RA</span></td>
			<td colspan="2" style="box-sizing: border-box; backface-visibility: hidden; padding: 0px 10px; border: 1px solid rgb(51, 51, 51) !important; font-size: 12pt; height: 15px; line-height: 40px; text-align: center;"><span style="box-sizing: border-box; backface-visibility: hidden; font-weight: 700;">PH&Iacute; DỊCH VỤ KẾ TO&Aacute;N TRỌN G&Oacute;I (VNĐ)</span></td>
		</tr>
		<tr style="box-sizing: border-box; backface-visibility: hidden; height: 15px;">
			<td style="box-sizing: border-box; backface-visibility: hidden; padding: 0px 10px; border: 1px solid rgb(51, 51, 51) !important; font-size: 12pt; height: 15px; line-height: 40px; text-align: center;"><span style="box-sizing: border-box; backface-visibility: hidden; font-weight: 700;">Thương mại - Dịch vụ</span></td>
			<td style="box-sizing: border-box; backface-visibility: hidden; padding: 0px 10px; border: 1px solid rgb(51, 51, 51) !important; font-size: 12pt; height: 15px; line-height: 40px; text-align: center;"><span style="box-sizing: border-box; backface-visibility: hidden; font-weight: 700;">X&acirc;y dựng - Sản xuất</span></td>
		</tr>
		<tr style="box-sizing: border-box; backface-visibility: hidden; height: 15px;">
			<td style="box-sizing: border-box; backface-visibility: hidden; padding: 0px 10px; border: 1px solid rgb(51, 51, 51) !important; font-size: 12pt; height: 15px; line-height: 40px;">Kh&ocirc;ng ph&aacute;t sinh đến 10 chứng từ</td>
			<td style="box-sizing: border-box; backface-visibility: hidden; padding: 0px 10px; border: 1px solid rgb(51, 51, 51) !important; font-size: 12pt; height: 15px; line-height: 40px; text-align: right;">750,000</td>
			<td style="box-sizing: border-box; backface-visibility: hidden; padding: 0px 10px; border: 1px solid rgb(51, 51, 51) !important; font-size: 12pt; height: 15px; line-height: 40px; text-align: right;">1,000,000</td>
		</tr>
		<tr style="box-sizing: border-box; backface-visibility: hidden; height: 15px;">
			<td style="box-sizing: border-box; backface-visibility: hidden; padding: 0px 10px; border: 1px solid rgb(51, 51, 51) !important; font-size: 12pt; height: 15px; line-height: 40px;">Từ 11 đến 30 chứng từ</td>
			<td style="box-sizing: border-box; backface-visibility: hidden; padding: 0px 10px; border: 1px solid rgb(51, 51, 51) !important; font-size: 12pt; height: 15px; line-height: 40px; text-align: right;">1,100,000</td>
			<td style="box-sizing: border-box; backface-visibility: hidden; padding: 0px 10px; border: 1px solid rgb(51, 51, 51) !important; font-size: 12pt; height: 15px; line-height: 40px; text-align: right;">1,500,000</td>
		</tr>
		<tr style="box-sizing: border-box; backface-visibility: hidden; height: 15px;">
			<td style="box-sizing: border-box; backface-visibility: hidden; padding: 0px 10px; border: 1px solid rgb(51, 51, 51) !important; font-size: 12pt; height: 15px; line-height: 40px;">Từ 31 đến 50 chứng từ</td>
			<td style="box-sizing: border-box; backface-visibility: hidden; padding: 0px 10px; border: 1px solid rgb(51, 51, 51) !important; font-size: 12pt; height: 15px; line-height: 40px; text-align: right;">1,500,000</td>
			<td style="box-sizing: border-box; backface-visibility: hidden; padding: 0px 10px; border: 1px solid rgb(51, 51, 51) !important; font-size: 12pt; height: 15px; line-height: 40px; text-align: right;">2,000,000</td>
		</tr>
		<tr style="box-sizing: border-box; backface-visibility: hidden; height: 15px;">
			<td style="box-sizing: border-box; backface-visibility: hidden; padding: 0px 10px; border: 1px solid rgb(51, 51, 51) !important; font-size: 12pt; height: 15px; line-height: 40px;">Từ 51 chứng từ trở l&ecirc;n</td>
			<td style="box-sizing: border-box; backface-visibility: hidden; padding: 0px 10px; border: 1px solid rgb(51, 51, 51) !important; font-size: 12pt; height: 15px; line-height: 40px; text-align: center;">Call</td>
			<td style="box-sizing: border-box; backface-visibility: hidden; padding: 0px 10px; border: 1px solid rgb(51, 51, 51) !important; font-size: 12pt; height: 15px; line-height: 40px; text-align: center;">Call</td>
		</tr>
	</tbody>
</table>
</div>
</div>
      `,
    },
    {
      link: "/dich-vu/bao-cao-thue",
      content: `<table id="contentPage_fvService" cellspacing="0">
      <tbody>
      <tr>
      <td colspan="2">
      <h1>BẢO HIỂM X&Atilde; HỘI</h1>
      <div class="max-width-content">
      <div class="col-xs-12 col-md-12 no-padding"><img class="imgloading" src="http://sosachketoan.vn/images/banner/bao-hiem-xa-hoi.jpg" alt="Bảo hiểm x&atilde; hội" /></div>
      <div class="col-xs-12 col-md-12 no-padding center top30px">
      <h1>DỊCH VỤ L&Agrave;M BẢO HIỂM X&Atilde; HỘI</h1>
      <h2>Trọn g&oacute;i chỉ 2.000.000VNĐ</h2>
      <div class="clear top20px intro-page">Dịch vụ l&agrave;m bảo hiểm x&atilde; hội tại TP. Hồ Ch&iacute; Minh của c&ocirc;ng ty C&ocirc;ng Nghệ Số Đ&ocirc;ng T&acirc;y uy t&iacute;nh v&agrave; chuy&ecirc;n nghiệp. Dịch vụ l&agrave;m bảo hiểm x&atilde; hội, dịch vụ tiền lương, dịch vụ lao động cho c&aacute;c doanh nghiệp.</div>
      </div>
      <div class="clear top30px">&nbsp;</div>
      <div class="col-xs-12 col-md-12 no-padding bgGray">
      <div class="col-xs-12 col-md-5  top20px"><img class="imgloading" src="http://sosachketoan.vn/images/baohiemxahoi/dich-vu-dang-ky-bao-hiem-xa-hoi.jpg" alt="Dịch vụ l&agrave;m bảo hiểm x&atilde; hội" /></div>
      <div class="col-xs-12 col-md-7">
      <div class="lineheight">
      <h2>Dịch vụ đăng k&yacute; BẢO HIỂM X&Atilde; HỘI lần đầu</h2>
      <strong>1. Thay mặt c&ocirc;ng ty bạn l&agrave;m việc với c&aacute;c cơ quan:</strong>
      <ul class="service">
      <li>Ủy ban nh&acirc;n d&acirc;n quận</li>
      <li>Li&ecirc;n đo&agrave;n lao động</li>
      <li>Bảo hiểm x&atilde; hội</li>
      </ul>
      <strong>2. Nội dung c&ocirc;ng việc:</strong>
      <ul class="service">
      <li>X&acirc;y dựng thang lương bảng lương cho c&ocirc;ng ty</li>
      <li>X&acirc;y dựng ti&ecirc;u chuẩn v&agrave; bảng m&ocirc; tả chức danh c&ocirc;ng việc.</li>
      <li>Đăng k&yacute; khai tr&igrave;nh sử dụng lao động với cơ quan lao động.</li>
      <li>L&agrave;m hồ sơ x&aacute;c nhận chưa đủ điều kiện th&agrave;nh lập c&ocirc;ng đo&agrave;n hoặc hồ sơ th&agrave;nh lập c&ocirc;ng đo&agrave;n.</li>
      <li>Đăng k&yacute; tham gia BHXH, BHYT, BHTN.</li>
      </ul>
      </div>
      </div>
      </div>
      <div class="col-xs-12 col-md-12 no-padding bgGray">
      <div class="col-xs-12 col-md-12 no-padding center top20px">
      <h2>Lợi &iacute;ch khi sử dụng dịch vụ l&agrave;m bảo hiểm x&atilde; hội</h2>
      </div>
      <div class="col-xs-12 col-md-6">
      <p>&bull; Chi ph&iacute; tối ưu.</p>
      <p>&bull; Cam kết sẽ ho&agrave;n tiền 100% nếu kh&ocirc;ng ho&agrave;n th&agrave;nh.</p>
      <p>&bull; Hồ sơ ho&agrave;n chỉnh ngay những lần đầu ti&ecirc;n.</p>
      </div>
      <div class="col-xs-12 col-md-6">
      <p>&bull; Tư vấn thật chi tiết trước khi tiến h&agrave;nh l&agrave;m thủ tục.</p>
      <p>&bull; T&iacute;nh chuy&ecirc;n nghiệp cao, ch&uacute;ng t&ocirc;i c&oacute; c&aacute;c chuy&ecirc;n gia về lĩnh vực bảo hiểm x&atilde; hội v&agrave; c&oacute; hơn 300 doanh nghiệp đ&atilde; sử dụng dịch vụ.</p>
      </div>
      </div>
      <div class="ol-xs-12 col-md-12 no-padding center bgBlue">
      <h2>Li&ecirc;n hệ tư vấn</h2>
      <div>Gọi ngay cho ch&uacute;ng t&ocirc;i để được tư vấn miễn ph&iacute;</div>
      <h3>Hotline:&nbsp;<a href="tel:0902292672">0902 292 672</a></h3>
      </div>
      <div class="col-xs-12 col-md-12 no-padding center top30px">
      <h2>HƯỚNG DẪN TỰ ĐĂNG K&Yacute; BẢO HIỂM X&Atilde; HỘI</h2>
      <h3>Bạn cũng c&oacute; thể tự thực hiện việc đăng k&yacute; bảo hiểm x&atilde; hội</h3>
      <div class="clear top20px intro-page">Tr&igrave;nh tự thủ tục đăng k&yacute; tham gia Bảo hiểm x&atilde; hội bắt buộc, BHYT, BHTN lần đầu năm 2018, hồ sơ điều chỉnh mức lương đ&oacute;ng BẢO HIỂM X&Atilde; HỘI, hồ sơ xin cấp lại sổ BHXH, thẻ BHYT theo quy định mới nhất hiện nay.</div>
      </div>
      <div class="col-xs-12 col-md-12 no-padding top30px">
      <p>Theo Quyết định 772/QĐ-BHXH ng&agrave;y 15/6/2018 Quy định về thủ tục h&agrave;nh ch&iacute;nh thay thế trong lĩnh thực thu BHXH; Cấp sổ BHXH, thẻ BHYT theo Quyết định 595/QĐ-BHXH quy định cụ thể: Đối tượng, hồ sơ, mức lương đ&oacute;ng, phương thức đ&oacute;ng BẢO HIỂM X&Atilde; HỘI cụ thể như sau:</p>
      <p>- Trước khi tham gia BHXH, BHYT, BHTN c&aacute;c bạn cần biết những đối tượng bắt buộc phải tham gia Bảo hiểm x&atilde; hội, tỷ lệ đ&oacute;ng, mức tiền lương đ&oacute;ng h&agrave;ng th&aacute;ng ... chi tiết c&aacute;c bạn xem tại đ&acirc;y nh&eacute;:</p>
      <p>- Tiếp nữa c&aacute;c bạn cần ch&uacute; &yacute;: C&oacute; cơ quan BH y&ecirc;u cầu l&agrave;m v&agrave; c&oacute; cơ quan kh&ocirc;ng y&ecirc;u cầu l&agrave;m, đ&oacute; l&agrave; phải c&oacute; thang bảng lương c&oacute; đ&oacute;ng dấu x&aacute;c nhận của Ph&ograve;ng LĐTBXH. N&ecirc;n c&aacute;c bạn phải x&acirc;y dựng thang bảng lương để nộp cho Ph&ograve;ng LĐTBXH sau đ&oacute;: Mang thang bảng lương đ&oacute; c&ugrave;ng với hồ sơ tham gia BH đi nộp cho cơ quan BH. chi tiết xem tại đ&acirc;y:</p>
      <h3 class="top20px"><strong>Thủ tục tham gia BHXH, BHYT, BHTN, BHTNLĐ, BNN</strong></h3>
      <h4 class="top10px">Thủ tục h&agrave;nh ch&iacute;nh:</h4>
      <p>- Đăng k&yacute; tham gia, điều chỉnh đ&oacute;ng BẢO HIỂM X&Atilde; HỘI bắt buộc, BHYT, BHTN, BHTNLĐ-BNN</p>
      <p>- Cấp sổ BHXH, thẻ BHYT.</p>
      <h4 class="top10px">Th&agrave;nh phần hồ sơ</h4>
      <h5>1. Người lao động</h5>
      <p><strong>a) Người lao động l&agrave;m việc tại đơn vị sử dụng lao động nộp hồ sơ cho đơn vị sử dụng lao động:</strong></p>
      <p>- Tờ khai tham gia, điều chỉnh th&ocirc;ng tin BHXH, BHYT (Mẫu TK1-TS)</p>
      <p>- Trường hợp người lao động được hưởng quyền lợi BHYT cao hơn: bổ sung Giấy tờ chứng minh (nếu c&oacute;) theo Phụ lục 03.</p>
      <p><strong>b) Người lao động đi l&agrave;m việc ở nước ngo&agrave;i</strong></p>
      <p>- Tờ khai tham gia, điều chỉnh th&ocirc;ng tin BHXH, BHYT (Mẫu TK1-TS);</p>
      <p>- Hợp đồng lao động c&oacute; thời hạn ở nước ngo&agrave;i hoặc hợp đồng lao động được gia hạn k&egrave;m theo văn bản gia hạn hợp đồng lao động hoặc hợp đồng lao động được k&yacute; mới tại nước tiếp nhận lao động theo hợp đồng.</p>
      <h5>2. Đơn vị sử dụng lao động (Doanh nghiệp)</h5>
      <p><strong>a) Tờ khai đơn vị tham gia, điều chỉnh BHXH, BHYT (Mẫu TK3-TS)</strong></p>
      <p><strong>b) Danh s&aacute;ch lao động tham gia BHXH, BHYT, BHTN, BHTNLĐ, BNN (Mẫu D02-TS).</strong></p>
      <p><strong>c) Bảng k&ecirc; th&ocirc;ng tin Mẫu D01-TS.</strong></p>
      <p>Lưu &yacute;: Th&agrave;nh phần hồ sơ n&ecirc;u tr&ecirc;n nếu kh&ocirc;ng quy định l&agrave; bản ch&iacute;nh th&igrave; c&oacute; thể nộp bản ch&iacute;nh, bản sao k&egrave;m bản ch&iacute;nh để đối chiếu, bản sao được chứng thực hoặc bản sao được cấp từ sổ gốc.</p>
      </div>
      </div>
      </td>
      </tr>
      </tbody>
      </table>`,
    },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
