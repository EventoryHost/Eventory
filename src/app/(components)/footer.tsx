import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import Image from "next/image";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="bg-gradient-to-r from-[#605ED8] to-[#CA81FE] flex flex-col justify-center items-center">
      <div className="Footer w-[98%] md:h-[30vh] h-[20vh] mt-2 flex justify-center">
        <div className="w-[85%] flex justify-between items-start pt-8">
          <div>
            <h1 className="md:text-4xl md:w-full w-[90%] text-xl font-semibold text-white">
              Ready to Plan Your Event ?
            </h1>
            <p className="md:text-sm text-xs text-gray-200 w-[150%] md:mt-5 mt-2">
              Start discovering the best vendors for your event today.
              <span className="block md:inline">
                {" "}
                It&apos;s free and easy to get started!
              </span>
            </p>
          </div>
          <div>
            <div className="bg-[#2E3192] text-white md:px-5 md:py-4 text-sm py-3 rounded-sm md:w-[9rem] md:rounded-xl w-[6rem] md:mt-0 -mt-2.5 -mr-4 shadow-md rounded-xl">
              <a href="#" className="block w-full h-full text-center">
                Book now
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-7 md:mt-5 mt-9 md:mt-0 w-[95%] md:mt-0 rounded-xl bg-gradient-to-r from-indigo-200 to-purple-300 bg-white shadow-lg">
        <section className="footer p-10">
          <aside>
            <Image
              width={100}
              height={100}
              src="./logo-with-bg.svg"
              alt="Eventory logo"
              className="mix-blend-multiply"
            />
          </aside>
          <nav>
            <h6 className="font-bold  md:text-xl text-black">About Us</h6>
            <a className="link link-hover">Our Mission</a>
            <a className="link link-hover">Our Team</a>
          </nav>
          <nav>
            <h6 className="font-bold  md:text-xl text-black">Contacts</h6>
            <a className="link link-hover">+91 987654321</a>
            <a className="link link-hover">Eventory@withus</a>
          </nav>
          <nav>
            <h6 className="font-bold  md:text-xl text-black">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
          </nav>
          <nav className="flex gap-9">
            <a
              href="https://www.instagram.com/eventoryofficial/"
              className="flex p-2 shadow-md justify-center items-center text-white rounded-full bg-indigo-900"
            >
              <InstagramIcon />
            </a>
            <a className="flex p-2 shadow-md justify-center items-center text-white rounded-full bg-indigo-900">
              <WhatsAppIcon />
            </a>
            <a className="flex p-2 shadow-md justify-center items-center text-white rounded-full bg-indigo-900">
              <FacebookIcon />
            </a>
          </nav>
        </section>
      </div>
    </div>
  );
};

export default Footer;
