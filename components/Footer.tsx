import Image from "next/image";
import React from "react";
import { footerLinks } from "../constants";
import { title } from "process";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            src="/logo.svg"
            width={118}
            height={18}
            alt="Car hubb logo"
            className=" object-contain"
          />
          <p className="text-base text-gray-700">
            Carhub 2023 <br />
            All rights reserved &copy;
          </p>
        </div>
        <div className="footer__links">
          {footerLinks.map((link) => (
            <div className="footer__link">
              <h3 key={title} 
                className="font-bold">
                {link.title}
              </h3>
              {link.links.map((item) => (
                <Link href={item.url} key={item.title} className="textg-gray">
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div> 
      <div className=" flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
        <p>@2024 Komi Parfait. All Rights Reserved</p>
        <div className="footer__copyrights-link">
          <Link href="/" className=" text-gray-500">
            Privacy Policy
          </Link>
          <Link href="/" className=" text-gray-500">
            Terms of use
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
