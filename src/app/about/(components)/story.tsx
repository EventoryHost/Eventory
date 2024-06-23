"use client";
import React from "react";
import "../../globals.css"
import Image from "next/image";
import "../../globals.css";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Fullscreen } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Props = {};
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Story = () => {
  return (
    <>
      <div className="">
        <div className="w-full rounded-lg bg-[rgba(213,214,233,1)] shadow-lg">
          <div className="flex flex-col items-center  justify-between max-sm:mx-[10px]  sm:flex-row md:flex-row md:gap-20 md:py-10 px-5 sm:py-10 md:mx-20 sm:gap-20 lg:gap-40 lg:py-10">
            <div className="flex-1 justify-center">
              <h2 className="linear-gradient-colour font-serif mt-5 text-2xl  md:text-4xl font-semibold max-sm:my-5 sm:mb-10 lg:mb-14">
                The Story of Eventory
              </h2>
              <p className="text-[rgb(0,0,0)] md:text-lg text-xs">
                Our primary mission is to empower offline vendors across the
                country by providing them an online platform to reach new
                customers and expand their businesses beyond local contacts. We
                aim to enhance their business skills and opportunities in
                diverse markets nationwide.
              </p>
            </div>
            <div className="flex flex-1 justify-center">
            
              <img
                src="https://d1u34m45xfa3ar.cloudfront.net/website/about-page/story_01.png"
                className="max-sm:my-10 max-sm:w-[280px]"
                alt=""
              />
            </div>
          </div>

          <div className="flex flex-col  md:flex-row-reverse sm:flex-row-reverse items-center justify-between max-sm:mx-[10px] md:gap-20 md:py-10 px-5 sm:py-10 md:mx-20 sm:gap-20 lg:gap-40 lg:py-10">
            <div className="flex-1 justify-center">
              <h2 className="linear-gradient-colour font-serif text-2xl  md:text-4xl font-semibold max-sm:my-5 sm:mb-10 lg:mb-14">
                We Provide Experience
              </h2>
              <p className="text-[rgba(0,0,0,1)] md:text-lg text-xs">
                We excel in event planning with innovative ideas and meticulous
                attention to detail, ensuring clients feel inspired and
                reassured. Our visionary designs and commitment to excellence
                foster confidence and anticipation, transforming event visions
                into unforgettable experiences.
              </p>
            </div>
            <div className="flex flex-1 justify-center">
            <img
                src="https://d1u34m45xfa3ar.cloudfront.net/website/about-page/story_02.png"
                className="max-sm:my-10 max-sm:w-[300px]"
                alt=""
              />
            </div>
          </div>

          <div className="flex flex-col items-center justify-between max-sm:mx-[10px] sm:flex-row md:flex-row md:gap-20 md:py-10 px-5 sm:py-10 md:mx-20 sm:gap-20 lg:gap-40 lg:py-10">
            <div className="flex-1 justify-end">
              <h2 className="linear-gradient-colour font-serif text-2xl  md:text-4xl font-semibold max-sm:my-5 sm:mb-10 lg:mb-14">
                The Social Cause
              </h2>
              <p className="text-[rgba(0,0,0,1)] md:text-lg text-xs pt-0 md:pt-10">
                We focus on fostering employment by integrating offline vendors
                into our platform, helping them transition online to combat
                unemployment and enhance income streams. This expansion builds
                networks and achieves financial growth, contributing to economic
                vitality.
              </p>
            </div>
            <div className="flex flex-1 justify-center">
            <img
                src="https://d1u34m45xfa3ar.cloudfront.net/website/about-page/story_03.png"
                className="max-sm:my-10 max-sm:w-[300px] rounded-lg"
                alt=""
              />
            </div>
          </div>

          <div className="relative">
            <div className="lg:py-102  md:py-10 items-center justify-between max-sm:mx-[10px] mx-7 sm:flex-row md:flex-row md:gap-20 md:px-10 sm:py-10  sm:gap-20 lg:gap-40 lg:py-10">
              <div className="justify-center">
                <h2 className="font-poppins linear-gradient-colour text-2xl  md:text-4xl font-semibold max-sm:mb-10 md:mb-10 lg:mb-14">
                  Why choose us?
                </h2>
              </div>
            </div>
            
            <div className=" text-[rgba(255,255,255,1)] absolute md:top-[120px]
             z-10 flex w-full flex-col items-center
           gap-5 max-sm:relative max-sm:top-[0px] 
            max-sm:bg-[rgba(213,214,233,1)] sm:flex-row md:my-[50px] md:mt-[-20px] md:justify-center md:gap-5 lg:justify-around">
              <div className="mb-10 sm:w-[300px] h-[400px] w-[300px] md:h-[412px] md:w-[346px] rounded-lg bg-[rgba(96,94,216,1)] p-8 text-white">
                <div className="flex flex-col items-center gap-14">
                  <div className="pb-2">
                    <h2 className=" md:text-xl font-semibold">
                      Innovation and Excellence
                    </h2>
                  </div>

                  <div className="flex h-16 w-16 md:h-20 md:w-20 items-center justify-center text-indigo-600">
                    <svg
                      width="91"
                      height="81"
                      viewBox="0 0 91 81"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.45703 70.1874V45.3646L24.1736 36.0594L45.8902 45.3714V70.1874L24.1736 79.4857L2.45703 70.1874Z"
                        stroke="white"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M2.45703 45.3166L24.1736 54.6217L45.8902 45.3166M24.1736 11.408L45.8833 20.72L67.5999 11.4149"
                        stroke="white"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M45.8833 45.3166L67.5999 54.6217L89.3164 45.3166"
                        stroke="white"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M24.1738 54.6354V79.4926M67.6138 54.6354V79.4926M45.8835 20.72V45.5703M24.1875 36.0457V11.2229L45.8973 1.91772L67.6138 11.2229V36.0457L45.8973 45.3509L24.1875 36.0457ZM45.8835 70.1874V45.3646L67.6001 36.0594L89.3167 45.3714V70.1874L67.6001 79.4857L45.8835 70.1874Z"
                        stroke="white"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <p className="text-start text-sm md:text-md ">
                    Creating cutting-edge technology to deliver our mission.
                    Committed to high standards of quality, ensuring perfection
                    in every aspect of our work.
                  </p>
                </div>
              </div>

              <div className="mb-10 h-[400px] w-[300px] md:h-[412px] md:w-[346px] rounded-lg bg-[rgba(96,94,216,1)] p-8 text-white">
                <div className="flex flex-col items-center gap-14">
                  <div className="pb-2">
                    <h2 className="md:text-xl font-semibold">Customer Focus</h2>
                  </div>

                  <div className="flex h-16 w-16 md:h-20 md:w-20 items-center justify-center text-indigo-600">
                    <svg
                      width="73"
                      height="73"
                      viewBox="0 0 73 73"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M72.75 3.04787V16.8351C72.75 17.4445 72.5079 18.029 72.077 18.4599C71.646 18.8909 71.0616 19.133 70.4521 19.133C69.8427 19.133 69.2582 18.8909 68.8273 18.4599C68.3964 18.029 68.1543 17.4445 68.1543 16.8351V5.34574H56.6649C56.0555 5.34574 55.471 5.10365 55.0401 4.67271C54.6091 4.24178 54.367 3.65731 54.367 3.04787C54.367 2.43844 54.6091 1.85397 55.0401 1.42303C55.471 0.992096 56.0555 0.75 56.6649 0.75H70.4521C71.0616 0.75 71.646 0.992096 72.077 1.42303C72.5079 1.85397 72.75 2.43844 72.75 3.04787ZM70.4521 54.367C69.8427 54.367 69.2582 54.6091 68.8273 55.0401C68.3964 55.471 68.1543 56.0555 68.1543 56.6649V68.1543H56.6649C56.0555 68.1543 55.471 68.3964 55.0401 68.8273C54.6091 69.2582 54.367 69.8427 54.367 70.4521C54.367 71.0616 54.6091 71.646 55.0401 72.077C55.471 72.5079 56.0555 72.75 56.6649 72.75H70.4521C71.0616 72.75 71.646 72.5079 72.077 72.077C72.5079 71.646 72.75 71.0616 72.75 70.4521V56.6649C72.75 56.0555 72.5079 55.471 72.077 55.0401C71.646 54.6091 71.0616 54.367 70.4521 54.367ZM16.8351 68.1543H5.34574V56.6649C5.34574 56.0555 5.10365 55.471 4.67271 55.0401C4.24178 54.6091 3.65731 54.367 3.04787 54.367C2.43844 54.367 1.85397 54.6091 1.42303 55.0401C0.992096 55.471 0.75 56.0555 0.75 56.6649V70.4521C0.75 71.0616 0.992096 71.646 1.42303 72.077C1.85397 72.5079 2.43844 72.75 3.04787 72.75H16.8351C17.4445 72.75 18.029 72.5079 18.4599 72.077C18.8909 71.646 19.133 71.0616 19.133 70.4521C19.133 69.8427 18.8909 69.2582 18.4599 68.8273C18.029 68.3964 17.4445 68.1543 16.8351 68.1543ZM3.04787 19.133C3.65731 19.133 4.24178 18.8909 4.67271 18.4599C5.10365 18.029 5.34574 17.4445 5.34574 16.8351V5.34574H16.8351C17.4445 5.34574 18.029 5.10365 18.4599 4.67271C18.8909 4.24178 19.133 3.65731 19.133 3.04787C19.133 2.43844 18.8909 1.85397 18.4599 1.42303C18.029 0.992096 17.4445 0.75 16.8351 0.75H3.04787C2.43844 0.75 1.85397 0.992096 1.42303 1.42303C0.992096 1.85397 0.75 2.43844 0.75 3.04787V16.8351C0.75 17.4445 0.992096 18.029 1.42303 18.4599C1.85397 18.8909 2.43844 19.133 3.04787 19.133ZM55.133 54.367C54.7762 54.367 54.4244 54.284 54.1053 54.1244C53.7863 53.9649 53.5087 53.7333 53.2947 53.4479C51.3683 50.8794 48.8704 48.7947 45.9988 47.3589C43.1271 45.923 39.9606 45.1755 36.75 45.1755C33.5394 45.1755 30.3729 45.923 27.5012 47.3589C24.6296 48.7947 22.1317 50.8794 20.2053 53.4479C20.0243 53.6893 19.7974 53.8927 19.5378 54.0464C19.2781 54.2001 18.9907 54.3013 18.692 54.3439C18.3933 54.3866 18.0891 54.37 17.7967 54.2951C17.5044 54.2202 17.2297 54.0885 16.9883 53.9075C16.7469 53.7264 16.5435 53.4996 16.3898 53.2399C16.236 52.9802 16.1349 52.6928 16.0922 52.3941C16.0496 52.0954 16.0662 51.7912 16.141 51.4989C16.2159 51.2065 16.3477 50.9318 16.5287 50.6904C19.4202 46.8144 23.3682 43.8544 27.8994 42.1653C25.4848 40.3155 23.7105 37.7555 22.8259 34.8453C21.9412 31.935 21.9907 28.8207 22.9674 25.94C23.944 23.0593 25.7987 20.5571 28.2708 18.7849C30.743 17.0126 33.7083 16.0596 36.75 16.0596C39.7917 16.0596 42.757 17.0126 45.2292 18.7849C47.7013 20.5571 49.556 23.0593 50.5326 25.94C51.5093 28.8207 51.5588 31.935 50.6741 34.8453C49.7895 37.7555 48.0152 40.3155 45.6006 42.1653C50.1318 43.8544 54.0798 46.8144 56.9713 50.6904C57.2273 51.0318 57.3832 51.4378 57.4216 51.8628C57.4599 52.2878 57.3791 52.7151 57.1883 53.0968C56.9974 53.4785 56.7041 53.7995 56.341 54.0238C55.978 54.2482 55.5597 54.367 55.133 54.367ZM36.75 40.5798C38.7194 40.5798 40.6446 39.9958 42.2821 38.9017C43.9196 37.8075 45.1958 36.2524 45.9495 34.4329C46.7031 32.6134 46.9003 30.6113 46.5161 28.6797C46.1319 26.7482 45.1836 24.9739 43.791 23.5814C42.3984 22.1888 40.6242 21.2404 38.6926 20.8562C36.761 20.472 34.7589 20.6692 32.9394 21.4229C31.12 22.1765 29.5648 23.4528 28.4707 25.0903C27.3765 26.7278 26.7926 28.6529 26.7926 30.6223C26.7926 33.2632 27.8416 35.7959 29.709 37.6633C31.5764 39.5307 34.1091 40.5798 36.75 40.5798Z"
                        fill="white"
                      />
                    </svg>
                  </div>

                  <p className="text-start text-sm md:text-md">
                    Tailoring services to meet customer needs, prioritizing
                    customer satisfaction.
                  </p>
                </div>
              </div>

              <div className="mb-10 h-[400px] w-[300px] md:h-[412px] md:w-[346px] rounded-lg bg-[rgba(96,94,216,1)] p-8 text-white">
                <div className="flex flex-col items-center gap-14">
                  <div className="pb-2">
                    <h2 className=" md:text-xl font-semibold">
                      Integrity and Collaboration
                    </h2>
                  </div>

                  <div className="flex h-16 w-16 md:h-20 md:w-20 items-center justify-center text-indigo-600">
                    <svg
                      width="96"
                      height="96"
                      viewBox="0 0 96 96"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_1524_6201)">
                        <path
                          d="M10.7344 14.3581C9.62981 14.3581 8.73438 15.2535 8.73438 16.3581C8.73438 17.4627 9.62981 18.3581 10.7344 18.3581V14.3581ZM76.0095 17.7723C76.7905 16.9913 76.7905 15.7249 76.0095 14.9439L63.2815 2.21596C62.5005 1.43491 61.2342 1.43491 60.4531 2.21596C59.6721 2.99701 59.6721 4.26334 60.4531 5.04438L71.7668 16.3581L60.4531 27.6718C59.6721 28.4529 59.6721 29.7192 60.4531 30.5002C61.2342 31.2813 62.5005 31.2813 63.2815 30.5002L76.0095 17.7723ZM10.7344 18.3581H74.5952V14.3581H10.7344V18.3581Z"
                          fill="white"
                        />
                        <path
                          d="M78.0078 87.4174C79.1124 87.4174 80.0078 86.522 80.0078 85.4174C80.0078 84.3128 79.1124 83.4174 78.0078 83.4174V87.4174ZM12.7327 84.0032C11.9517 84.7843 11.9517 86.0506 12.7327 86.8316L25.4607 99.5596C26.2417 100.341 27.508 100.341 28.2891 99.5596C29.0701 98.7785 29.0701 97.5122 28.2891 96.7311L16.9754 85.4174L28.2891 74.1037C29.0701 73.3227 29.0701 72.0563 28.2891 71.2753C27.508 70.4942 26.2417 70.4942 25.4607 71.2753L12.7327 84.0032ZM78.0078 83.4174L14.1469 83.4174V87.4174L78.0078 87.4174V83.4174Z"
                          fill="white"
                        />
                        <rect
                          x="9.65063"
                          y="15.6506"
                          width="1.30126"
                          height="48.9628"
                          rx="0.650628"
                          fill="#4C4AAC"
                          stroke="white"
                          stroke-width="1.30126"
                        />
                        <rect
                          x="79.0491"
                          y="40.1037"
                          width="1.30126"
                          height="46.2458"
                          rx="0.650628"
                          fill="#4C4AAC"
                          stroke="white"
                          stroke-width="1.30126"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1524_6201">
                          <rect width="96" height="96" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>

                  <p className="text-start text-sm md:text-md">
                    Conducting business with transparency, honesty, and
                    Emphasizing teamwork within our organization and with
                    clients to achieve extraordinary results..
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Story;
