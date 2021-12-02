import React from "react";
import Button from "../common/button";
import "../css/presalepricingbar.css";

const PreSalePricingBar1 = () => {
  const buttonStyles = {
    borderRadius: "50px",
    background: "#fff",
    color: "black",
    fontSize: "1.563rem",
    fontWeight: "600",
    fontFamily: "Poppins, serif",
    width: "14.605rem",
    height: "5.508rem",
  };

  return (
    <div className="d-lg-flex pre-sale-pricing-bar justify-content-center align-items-center">
      <div className="p-2">
        <h4>Pre-sale Pricing</h4>
        <h6>1 NAYA = $0.2 USD</h6>
      </div>
      <div className="p-2 timer">
        <h4>Pre-sale starts in</h4>
        <h6>00 : 00 : 00 : 00</h6>
      </div>
      <div className="p-2">
        <Button
          content="Buy NAYA"
          buttonStyles={buttonStyles}
          onClick={() => window.open("https://presale.nayatoken.com", "_blank")}
        />
      </div>
    </div>
  );
};

export default PreSalePricingBar1;
