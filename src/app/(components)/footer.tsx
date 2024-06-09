import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";

import logo from "../../public/logo.svg";

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
              Start discovering the best vendors for your event today
            </p>
          </div>
          <div>
            <button className="bg-[#2E3192] text-white md:px-5 md:py-4 text-sm py-2 rounded-sm md:w-[9rem] md:rounded-xl w-[6rem] md:mt-0 mt-2 shadow-md rounded-xl">
              Book now
            </button>
          </div>
        </div>
      </div>
      <div className="mb-7 md:mt-5 mt-9 md:mt-0 w-[95%] md:mt-0 rounded-xl bg-gradient-to-r from-indigo-200 to-purple-300 bg-white shadow-lg">
        <section className="footer p-10">
          <aside>
            <svg
              width="84"
              height="113"
              viewBox="0 0 84 113"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <g filter="url(#filter0_d_674_672)">
                <rect
                  x="4"
                  width="76"
                  height="105"
                  fill="url(#pattern0_674_672)"
                  shape-rendering="crispEdges"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_674_672"
                  x="0"
                  y="0"
                  width="84"
                  height="113"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_674_672"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_674_672"
                    result="shape"
                  />
                </filter>
                <pattern
                  id="pattern0_674_672"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image0_674_672"
                    transform="matrix(0.0147059 0 0 0.0106443 0 -0.000280112)"
                  />
                </pattern>
                <image
                  id="image0_674_672"
                  width="68"
                  height="94"
                  xlinkHref="data:image/png;base64,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"
                />
              </defs>
            </svg>
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
              href=""
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
