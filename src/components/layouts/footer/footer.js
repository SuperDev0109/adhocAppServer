import "./footer.scss";
import Instagram from "../../UI/icons/instagram";
import Facebook from "../../UI/icons/facebook";
const Footer = () => {
  return (
    <div className="footer container-fluid">
      <div className="row">
        <div className="col-md-5 col-7" style={{ textAlign: "left" }}>
          <p className="title">General</p>
          <p>Terms and conditions</p>
          <p>Processing of personal data</p>
        </div>
        <div className="col-md-4 col-5" style={{ textAlign: "left" }}>
          <p className="title">Contact</p>
          <p>Help and support</p>
        </div>
        <div className="row follow col-md-3 col-12 d-flex align-items-center" style={{ textAlign: "center" }}>
          <div className="col-6 col-md-12">
            <p className="title">Follow Us</p>
          </div>
          <div className="col-6 col-md-12 d-flex justify-content-center">
            <Instagram />
            <Facebook />
          </div>
        </div>
      </div>
      <div className="copyright mt-4" style={{ textAlign: "right" }}>
        Copyright 2022 HCL Online Advertising SRL. All rights reserved!
      </div>
    </div>
  );
};
export default Footer;
