import React from "react";
import Link from "next/link";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import Image from "next/image";
import "../globals.css";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-r from-[#605ED8] to-[#CA81FE]">
      <div className="Footer mt-2 flex h-[20vh] w-[98%] justify-center md:h-[25vh] 3xl:h-[20vh]">
        <div className="flex w-[85%] items-start justify-between pt-8">
          <div>
            <h1 className="w-[90%] text-xl font-semibold text-white md:w-full md:text-4xl">
              Ready to Plan Your Event ?
            </h1>
            <p className="mt-2 w-[130%] text-xs text-white md:mt-5 md:w-[80%] md:text-sm">
              Start discovering the best vendors for your event today.
              <span className="block md:inline">
                {" "}
                It&apos;s free and easy to get started!
              </span>
            </p>
          </div>
          <div>
            <div className="-mr-4 -mt-1.5 w-[6rem] rounded-xl bg-[#2E3192] py-3 text-sm text-white shadow-md md:mt-0 md:w-[9rem] md:rounded-xl md:px-5 md:py-4">
              <a href="#" className="block h-full w-full text-center">
                Book now
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-7 mt-[3rem] w-[95%] rounded-xl bg-white bg-gradient-to-r from-indigo-200 to-purple-300 shadow-lg md:mt-0">
        <section className="footer p-10">
          <aside className="w-full justify-center md:justify-start">
            <Image
              width={100}
              height={100}
              // src="https://d1u34m45xfa3ar.cloudfront.net/website/footer/logo-with-bg.svg"
              src="/footer/footer-logo-01.svg"
              alt="Eventory logo justify-center items-center align-middle"
              className="h-[90px] w-[60px] mix-blend-multiply"
            />
          </aside>
          <nav>
            <h6 className="font-bold text-black md:text-xl">About Us</h6>
            <a className="link-hover link">
              <p className="text-xs md:text-base">Our Mission</p>
            </a>
            <a className="link-hover link">
              <p className="text-xs md:text-base">Our Team</p>
            </a>
          </nav>
          <nav>
            <h6 className="font-bold text-black md:text-xl">Contacts</h6>
            <a href="tel:+917903646350" className="link-hover link">
              <p className="text-xs md:text-base">+91 7903646350</p>
            </a>
            <a
              href="mailto:contact@eventory.in"
              className="link-hover link text-[rgba(98,95,217,1)]"
            >
              <p className="text-xs md:text-base">contact@eventory.in</p>
            </a>
          </nav>
          <nav>
            <h6 className="font-bold text-black md:text-xl">Legal</h6>
            <a className="link-hover link">
              <p className="text-xs md:text-base">Terms of use</p>
            </a>
            <a className="link-hover link">
              <p className="text-xs md:text-base">Privacy policy</p>
            </a>
          </nav>
          <nav className="flex gap-5">
            <a
              href="https://www.instagram.com/eventoryofficial/"
              className="flex items-center justify-center rounded-full bg-indigo-900 p-2 text-white shadow-md"
            >
              <InstagramIcon />
            </a>
            <a className="flex items-center justify-center rounded-full bg-indigo-900 p-2 text-white shadow-md">
              <WhatsAppIcon />
            </a>
            <a className="flex items-center justify-center rounded-full bg-indigo-900 p-2 text-white shadow-md">
              <FacebookIcon />
            </a>
          </nav>
        </section>
      </div>
    </div>
  );
};

export default Footer;
