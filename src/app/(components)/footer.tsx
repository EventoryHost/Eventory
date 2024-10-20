import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import Image from "next/image";
import "../globals.css";
import taj from "../../../public/footerbg.png";
import foot from "../../../public/footerimg2.png";
import Link from "next/link";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="relative flex min-h-fit flex-col items-start justify-start bg-gradient-to-b from-[#605ED8] to-[#2E3192] py-9 md:h-[30vw]">
      <div className="absolute bottom-0 left-0 right-0 h-[50%] w-full">
        <Image
          src="https://eventory-web-prod.s3.ap-south-1.amazonaws.com/assets/footer/footerbg.png"
          alt="Footer background"
          layout="fill"
          objectFit="cover"
          objectPosition="bottom"
          className=""
        />
      </div>

      <div className="mb-7 mt-[3rem] flex min-h-fit w-[95%] flex-col self-center rounded-xl bg-white/20 shadow-lg backdrop-blur-xl md:mt-0 lg:h-[15vw]">
        <section className="flex flex-col gap-9 p-10 lg:flex-row lg:justify-between">
          <div className="flex w-full flex-col justify-start gap-5 lg:w-[50%]">
            <Image
              width={100}
              height={100}
              src="https://eventory-web-prod.s3.ap-south-1.amazonaws.com/assets/footer/footer-logo-01.svg"
              alt="Eventory logo"
              className="h-[9vw] w-[6vw] mix-blend-multiply"
            />
            <p className="text-[3vw] text-white lg:text-[1.5vw]">
              Inventory booking platform for all your events in a convenient and
              hassle-free way to fulfil all your needs.
            </p>
            <div className="flex gap-5">
              <Link
                href="https://www.instagram.com/eventoryofficial/"
                className="flex items-center justify-center rounded-full bg-indigo-900 p-2 text-white shadow-md"
              >
                <InstagramIcon />
              </Link>
              <Link
                href="https://wa.me/+918800725840"
                target="_blank"
                className="flex items-center justify-center rounded-full bg-indigo-900 p-2 text-white shadow-md"
              >
                <WhatsAppIcon />
              </Link>
              <Link
                href={""}
                className="flex items-center justify-center rounded-full bg-indigo-900 p-2 text-white shadow-md"
              >
                <FacebookIcon />
              </Link>
            </div>
          </div>

          <div className="flex w-full flex-col gap-9 lg:w-[100%] lg:flex-row lg:items-start lg:justify-around">
            <nav className="flex flex-col items-start">
              <h6 className="mb-5 text-[3.5vw] font-bold text-white lg:text-[1.5vw]">
                Company
              </h6>
              <a className="link-hover link" href={"/about"}>
                <p className="text-[3vw] text-white lg:text-[1vw]">About Us</p>
              </a>
              <a className="link-hover link" href={"EventListing"}>
                <p className="text-[3vw] text-white lg:text-[1vw]">Events</p>
              </a>
              <a className="link-hover link">
                <p className="text-[3vw] text-white lg:text-[1vw]">
                  Special Services
                </p>
              </a>
              <a className="link-hover link" href={"/business"}>
                <p className="text-[3vw] text-white lg:text-[1vw]">Careers</p>
              </a>
              <a className="link-hover link">
                <p className="text-[3vw] text-white lg:text-[1vw]">FAQs</p>
              </a>
              <a className="link-hover link">
                <p className="text-[3vw] text-white lg:text-[1vw]">
                  Help & Support
                </p>
              </a>
              <a className="link-hover link">
                <p className="text-[3vw] text-white lg:text-[1vw]">Our Team</p>
              </a>
            </nav>

            <nav className="flex flex-col items-start">
              <h6 className="mb-5 text-[3.5vw] font-bold text-white lg:text-[1.5vw]">
                Vendor
              </h6>
              <a className="link-hover link">
                <p className="text-[3vw] text-white lg:text-[1vw]">
                  Our Mission
                </p>
              </a>
              <a className="link-hover link" href={"/business"}>
                <p className="text-[3vw] text-white lg:text-[1vw]">
                  Venue Provider
                </p>
              </a>
              <a className="link-hover link">
                <p className="text-[3vw] text-white lg:text-[1vw]">Caterer</p>
              </a>
              <a className="link-hover link">
                <p className="text-[3vw] text-white lg:text-[1vw]">Decorator</p>
              </a>
              <a className="link-hover link">
                <p className="text-[3vw] text-white lg:text-[1vw]">
                  Photographers
                </p>
              </a>
              <a className="link-hover link">
                <p className="text-[3vw] text-white lg:text-[1vw]">
                  Makeup Artist
                </p>
              </a>
              <a className="link-hover link">
                <p className="text-[3vw] text-white lg:text-[1vw]">
                  Invitations
                </p>
              </a>
              <a className="link-hover link">
                <p className="text-[3vw] text-white lg:text-[1vw]">Gifts</p>
              </a>
            </nav>

            <nav className="flex flex-col items-start">
              <h6 className="mb-5 text-[3.5vw] font-bold text-white lg:text-[1.5vw]">
                Legal
              </h6>
              <a className="link-hover link">
                <p className="text-[3vw] text-white lg:text-[1vw]">
                  Terms of use
                </p>
              </a>
              <a className="link-hover link">
                <p className="text-[3vw] text-white lg:text-[1vw]">
                  Privacy policy
                </p>
              </a>
            </nav>

            <nav className="flex flex-col items-start">
              <h6 className="mb-5 text-[3.5vw] font-bold text-white lg:text-[1.5vw]">
                Contacts
              </h6>
              <a href="tel:+917903646350" className="link-hover link">
                <p className="text-[3vw] text-white lg:text-[1vw]">
                  +91 8800725840
                </p>
              </a>
              <a
                href="mailto:contact@eventory.in"
                className="link-hover link text-white"
              >
                <p className="text-[3vw] underline lg:text-[1vw]">
                  contact@eventory.in
                </p>
              </a>
            </nav>
          </div>
        </section>

        <section className="flex w-[100%] flex-col items-start justify-between gap-5 border-t border-white px-9 py-[3%] text-white lg:flex-row lg:items-center">
          <p className="text-[2.5vw] lg:text-[1vw]">
            ©Eventory 2024-2025 — All rights reserved.
          </p>
          <Image
            src={
              "https://eventory-web-prod.s3.ap-south-1.amazonaws.com/assets/footer/startup_logo.png"
            }
            alt="footer"
            width={100}
            height={100}
          />
        </section>
      </div>
    </div>
  );
};

export default Footer;
