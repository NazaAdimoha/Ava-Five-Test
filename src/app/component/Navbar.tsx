"use client"
import { useState, useEffect } from "react";
import { Bars3BottomRightIcon, XCircleIcon } from "@heroicons/react/24/outline";
import Logo from "../../../public/logo.svg";
import Profile from "../../../public/profile.svg";
import Cart from "../../../public/bag.svg";
import WishList from "../../../public/wishlist.svg";
import SearchIcon from "../../../public/search.svg";
import Link from "next/link";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import Image from "next/image";
import SearchBar from "./SearchBar";


// type Props = {
//   isTopOfPage: boolean;
// };

const Navbar = () => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
//   const navBarBackground = isTopOfPage
//     ? "bg-transparent"
//     : "bg-primary-100 bg-opacity-90 drop-shadow-xl";

  //Animatate hambuger icon state
  const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-100%" },
  };
  return (
    <nav>
      <div
        className={`${flexBetween}  top-0 z-30 w-full py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* LEFT SIDE */}
            <Image
              src={Logo}
              alt="logo"
              width={100}
              height={100}
              loading="lazy"
              blurDataURL={Logo}
              className="h-[22px] w-[108px] object-cover object-center"
            />

            {/* RIGHT SIDE */}
            {isAboveMediumScreen ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <Link href="/handbags">Handbags</Link>
                  <Link href="/watches">Watches</Link>
                  <Link href="/skincare">Skincare</Link>
                  <Link href="/jewellery">Jewellery</Link>
                  <Link href="/apparels">Apparels</Link>
                </div>

                <div className={`${flexBetween} gap-8`}>
                  <SearchBar
                    onSearch={(searchTerm) => console.log(searchTerm)}
                    icon={
                      SearchIcon && (
                        <Image
                          src={SearchIcon}
                          alt="logo"
                          width={100}
                          height={100}
                          loading="lazy"
                          blurDataURL={Logo}
                        />
                      )
                    }
                  />
                </div>

                <div className={`${flexBetween} gap-8`}>
                  <Image
                    src={WishList}
                    alt="logo"
                    width={100}
                    height={100}
                    loading="lazy"
                    blurDataURL={Logo}
                    className="h-full w-full object-cover object-center"
                  />
                  <Image
                    src={Profile}
                    alt="logo"
                    width={100}
                    height={100}
                    loading="lazy"
                    blurDataURL={Logo}
                    className="h-full w-full object-cover object-center"
                  />
                  <Image
                    src={Cart}
                    alt="logo"
                    width={100}
                    height={100}
                    loading="lazy"
                    blurDataURL={Logo}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3BottomRightIcon className="h-6 w-6 text-primary" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMenuToggled && !isAboveMediumScreen && (
        <motion.div
          initial="closed"
          animate={isMenuToggled ? "open" : "closed"}
          variants={variants}
          transition={{ duration: 1 }}
          className="fixed bottom-0 right-0 z-40 h-full w-[300px] bg-primary-100 bg-opacity-90 drop-shadow-xl"
        >
          <motion.div
            initial="closed"
            animate={isMenuToggled ? "open" : "closed"}
            variants={variants}
            transition={{ duration: 1 }}
            className="flex justify-end p-12"
          >
            <button
              className="rounded-full bg-secondary-500 p-2"
              onClick={() =>
                setIsMenuToggled((isMenuToggled) => !isMenuToggled)
              }
            >
              <XCircleIcon className="h-6 w-6 text-primary" />
            </button>
          </motion.div>

          {/* MOBILE MENU LINKS */}
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            <Link href="/handbags">Handbags</Link>
            <Link href="/watches">Watches</Link>
            <Link href="/skincare">Skincare</Link>
            <Link href="/jewellery">Jewellery</Link>
            <Link href="/apparels">Apparels</Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
