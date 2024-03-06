import { CopyRight } from '@/src/common/social-links';
import EmailTwo from '@/src/svg/email-2';
import PhoneTwo from '@/src/svg/phone-2';
import Image from 'next/image';
import Link from 'next/link';
import React,{useState} from 'react';
// img import 
import footer_logo from "../../../public/assets/img/logo/logo-black.png";
import qr_code from "../../../public/assets/img/footer/dwnld-1.png";
import i_phone from "../../../public/assets/img/footer/dwnld-2.png";
import google_ply from "../../../public/assets/img/footer/dwnld-3.png"; 


const footer_content = {
    address: <><br /></>,
    phone: "+39 3406505294",
    email: "info@kodigit.agency",
    download: "", 
    footer_lisks : [
        {
            id: 1,
            cls: "footer-col-2-2", 
            title: "",
            delay: ".5s",
            links: [
                {name: "", link: "#"},
                {name: "", link: "#"},
                {name: "", link: "#"},
                {name: "", link: "#"},
                {name: "", link: "#"}, 
            ]
        },
        {
            id: 2,
            cls: "footer-col-2-3", 
            title: "",
            delay: ".7s",
            links: [
                {name: "", link: "#"},
                {name: "", link: "#"},
                {name: "", link: "#"},
                {name: "", link: "#"},
                {name: "", link: "#"},
                {name: "", link: "#"},
            ]
        },

    ],
    social_links : [
        {
          link: "http://facebook.com",
          target: "_blank",
          icon: "fab fa-facebook-f", 
        },
        {
          link: "http://twitter.com",
          target: "_blank",
          icon: "fab fa-twitter", 
        },
    
        {
          link: "http://www.instagram.com",
          target: "_blank",
          icon: "fab fa-instagram", 
        },
      ], 
}
const {address, phone, email, footer_lisks, download, social_links}  =  footer_content

const FooterTwo = () => {
    const [isOppen , setIsOppen]  = useState(false)
    const oppenLan = () => {
        setIsOppen(!isOppen)
    }
    return (
        <>
    
               
      <div className="tp-copyright__area pt-20 pb-20">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
                  <div className="tp-copyright__social">
                  
                     {social_links.map((l, i) => (
                           <Link
                           key={i}
                           href={l.link} 
                           target={l.target ? l.target : ""}
                           >
                           <i className={l.icon}></i>
                           </Link>
                        ))} 
                  </div>
               </div>
               <div className="col-xl-6 col-lg-6 col-md-6  d-none d-md-block">
                  <div className="tp-copyright__text tp-copyright__text-2 text-center">
                     <span><CopyRight /></span>
                  </div>
               </div>
               <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
                  <div
                     className="tp-copyright__lang-box  d-flex align-items-center justify-content-md-end justify-content-sm-end justify-content-start">
                     <div className="tp-copyright__lang tp-copyright__lang-2">
                        
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
</div>

</footer>
        </>
    );
};

export default FooterTwo;
