import React from "react";
import { BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
function SocialMedia() {
   return (
      <div className="app__social">
         <div>
            <a href="https://twitter.com/satishsingh0710" target='_blank'>
               <BsTwitter />
            </a>
         </div>
         <div>
            <a href="https://instagram.com/lost_lord_07" target='_blank'>
               <BsInstagram />
            </a>
         </div>
         <div>
            <a href="https://www.linkedin.com/in/satish-singh-0857a3145/" target='_blank'>
               <BsLinkedin />
            </a>
         </div>
         <div>
            <a href="mailto:satishpundir02@gmail.com" target='_blank'>
               <SiGmail />
            </a>
         </div>
      </div>
   );
}

export default SocialMedia;
