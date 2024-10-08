import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import Image from "next/image";
import "../globals.css";
import taj from "../../../public/footerbg.png"
import Link from "next/link";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="relative flex h-fit md:h-[30vw] flex-col items-center justify-start py-9 bg-gradient-to-b from-[#605ED8] to-[#2E3192]">
      {/* Image behind elements */}
      <div className="absolute bottom-0 left-0 right-0 h-[50%] w-full">
        <Image
          src={taj}
          alt="Footer background"
          layout="fill"
          objectFit="cover"
          objectPosition="bottom"
          className=""
        />
      </div>

      <div className="mb-7 mt-[3rem] h-fit md:h-[15vw] w-[95%] rounded-xl backdrop-blur-xl bg-white/20 shadow-lg md:mt-0">
        <section className="footer p-10">
          <aside className="w-full justify-center md:justify-start">
            <Image
              width={100}
              height={100}
              src="/footer/footer-logo-01.svg"
              alt="Eventory logo justify-center items-center align-middle"
              className="h-[90px] w-[60px] mix-blend-multiply self-start"
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
              <p className="text-xs md:text-base">+91 8800725840</p>
            </a>
            <a
              href="mailto:contact@eventory.in"
              className="link-hover link text-[#171645]"
            >
              <p className="text-xs md:text-base underline">contact@eventory.in</p>
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
            <Link
              href="https://www.instagram.com/eventoryofficial/"
              className="flex items-center justify-center rounded-full bg-indigo-900 p-2 text-white shadow-md"
            >
              <InstagramIcon />
            </Link>
            <Link href="https://wa.me/+918800725840" target="_blank" className="flex items-center justify-center rounded-full bg-indigo-900 p-2 text-white shadow-md">
              <WhatsAppIcon />
            </Link>
            <Link href={""} className="flex items-center justify-center rounded-full bg-indigo-900 p-2 text-white shadow-md">
              <FacebookIcon />
            </Link>
          </nav>
        </section>
      </div>
    </div>
  );
};

export default Footer;
