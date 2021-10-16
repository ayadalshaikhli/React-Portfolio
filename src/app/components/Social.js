import React, { useRef, useEffect } from "react";
import gsap, { TweenMax, Expo } from "gsap";
import {
  IconName,
  FaFacebookF,
  FaPaperclip,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
export default function Social() {
  const tm = TweenMax,
    tl = gsap.timeline({ defaults: { ease: "power1.out" } });

  useEffect(() => {
    tm.from(".social", 1.6, {
      opacity: 0,
      y: 60,
      ease: Expo.easeInOut,
      delay: 0.6,
    });
    tl.from(".fab", 1, {
      x: "-100",
      opacity: 0,
      stagger: 0.15,
      delay: 1.5,
      scale: ".8",
      ease: Expo.easeInOut,
    });
  });

  return (
    <div>
      <div class="social">
        <a href="#contact">
          <i class="fab fas fa-phone-alt"></i>
        </a>
        <a href="https://www.instagram.com/ayadalshaikly/">
          <FaInstagram className="fab" />
        </a>
        <a href="https://www.facebook.com/ayad.m.alshaikhli/">
          <FaFacebookF className="fab" />
        </a>
        <a href="https://www.linkedin.com/in/ayad-alshaikhli-815599208/">
          <FaLinkedin className="fab" />
        </a>
        <a href="https://github.com/ayadalshaikhli">
          <FaGithub className="fab" />
        </a>
        <a href="https://drive.google.com/file/d/19XQb-Iy5-dI8VvlcdyiqVKQjEFBxBtNO/view?usp=sharing">
          <FaPaperclip className="fab" />
        </a>
      </div>
    </div>
  );
}
