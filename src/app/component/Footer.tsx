import Image from "next/image";
import { footerData } from "../data/footerData";
import SocialMediaLogos from "../../../public/logos.svg";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-primary ">
      <div className="flex md:justify-between mx-auto w-full max-w-screen-xl h-[342px]">
        <div className="grid grid-cols-2 gap-8 px-8 py-6 lg:py-10 md:grid-cols-3">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-secondaryText uppercase dark:text-primaryText">
              Shop by Category
            </h2>
            <ul className="text-secondaryText">
              {footerData.shopCategory.map((item, index) => (
                <li
                  key={index}
                  className="mb-2 text-sm text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white"
                >
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-6 text-sm font-semibold text-secondaryText uppercase dark:text-primaryText">
              About
            </h2>
            <ul className="text-secondaryText">
              {footerData.about.map((item, index) => (
                <li
                  key={index}
                  className="mb-2 text-sm text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white"
                >
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-6 text-sm font-semibold text-secondaryText uppercase dark:text-primaryText">
              Policy
            </h2>
            <ul className="text-secondaryText">
              {footerData.policy.map((item, index) => (
                <li
                  key={index}
                  className="mb-2 text-sm text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white"
                >
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col py-8 gap-4">
          <div>
            <Image
              src={SocialMediaLogos}
              alt="social media logos"
              width={100}
              height={100}
              loading="lazy"
              className="h-[38px] w-[200px] object-cover object-center"
            />
          </div>
          <div className="flex items-center space-x-2 text-end">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clip-path="url(#clip0_2333_153)">
                  <path
                    d="M12 12.75C13.6569 12.75 15 11.4069 15 9.75C15 8.09315 13.6569 6.75 12 6.75C10.3431 6.75 9 8.09315 9 9.75C9 11.4069 10.3431 12.75 12 12.75Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M19.5 9.75C19.5 16.5 12 21.75 12 21.75C12 21.75 4.5 16.5 4.5 9.75C4.5 7.76088 5.29018 5.85322 6.6967 4.4467C8.10322 3.04018 10.0109 2.25 12 2.25C13.9891 2.25 15.8968 3.04018 17.3033 4.4467C18.7098 5.85322 19.5 7.76088 19.5 9.75V9.75Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2333_153">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <p className="text-primaryText text-[14px] font-semibold text-end">United States</p>
          </div>
          <p className="text-secondaryText text-[14px] font-semibold items-end">
            © 2021 | Cora Leviene All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
