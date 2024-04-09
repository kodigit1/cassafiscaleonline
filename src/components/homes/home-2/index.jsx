import FooterTwo from "@/src/layout/footers/footer-2";
import HeaderTwo from "@/src/layout/headers/header-2";
import React from "react";
import CtaArea from "./cta-area";
import FaqArea from "./faq-area";
import HeroArea from "./hero-area";
import OpenAccountArea from "./open-account-area";
import PaymentArea from "./payment-area";
import PaymentMethodArea from "./payment-method-area";
import ServiceArea from "./service-area";
import TestimonialArea from "./testimonial-area";
import React from 'react'
import Iubenda from 'react-iubenda-policy'
 
const Policy = () => {
  const myPolicy = 56039535 // your policy id
  return (
    <div>
 
      {/* Renders the Privacy Policy link with the text 'Privacy Policy' */}
      <Iubenda id={myPolicy}/>
 
      <Iubenda id={myPolicy} type='terms-and-conditions' styling='nostyle'>
        Terms and conditions
      </Iubenda>
 
      <Iubenda id={myPolicy} type='privacy' styling='white'>
        Privacy Policy
      </Iubenda>
 
      <Iubenda id={myPolicy} type='cookie' styling='black'>
        Cookie Policy
      </Iubenda>
    </div>
  )
}

const HomeTwo = () => {
  return (
    <>

      <HeaderTwo />
      <div id="smooth-wrapper">
      <div id="smooth-content">
      <main className="fix"> 
      <HeroArea />
      <PaymentArea />
      <PaymentMethodArea />
      <ServiceArea />
      <OpenAccountArea />
      <TestimonialArea />
      <FaqArea />
      <CtaArea /> 
      </main>
      <FooterTwo />
      </div>
      </div>

    </>
  );
};

export default HomeTwo;
