import React from "react";
import "./Footer.scss";
import { RiFacebookFill } from "react-icons/ri";
import { ImTwitter } from "react-icons/im";
import { IoLogoWhatsapp } from "react-icons/io";
export default function Footer() {
  return (
    <>
      <footer>
        <ul>
          <li>Privacy & Policy</li>
          <li>Terms & Conditions</li>
          <li>About </li>
          <li>About </li>
          <li>Blog </li>
          <li>Faq </li>
        </ul>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <div className="footerIcons">
          <span className="icon">
            <RiFacebookFill />
          </span>
          <span className="icon">
            <ImTwitter />
          </span>
          <span className="icon">
            <IoLogoWhatsapp />
          </span>
        </div>
      </footer>
    </>
  );
}
