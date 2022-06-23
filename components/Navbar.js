import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

import logo from "../images/logo.webp";
import {
  AiOutlineShoppingCart,
  AiFillCloseCircle,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/bs";

const Navbar = () => {
  const ref = useRef();
  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };
  return (
    <div
      className={`flex flex-col md:flex-row md:justify-start shadow-lg mb-1 p-4 gap-8 justify-center items-center`}
    >
      <div className={`logo relative h-10 w-56`}>
        <Link href={"/"}>
          <a>
            <Image src={logo} alt="logo" layout="fill" objectFit="cover" />
          </a>
        </Link>
      </div>
      <div className={`nav`}>
        <ul
          className={
            "flex flex-row items-center md:text-md space-x-4 font-bold"
          }
        >
          <li>
            <Link href={"/tshirts"}>
              <a>Tshirts</a>
            </Link>
          </li>
          <li>
            <Link href={"/hoodies"}>
              <a>Hoodies</a>
            </Link>
          </li>
          <li>
            <Link href={"/stickers"}>
              <a>stickers</a>
            </Link>
          </li>
          <li>
            <Link href={"/mugs"}>
              <a>Mugs</a>
            </Link>
          </li>
        </ul>
      </div>
      <div
        className={`cart  absolute right-0 top-4 mx-5 cursor-pointer`}
        onClick={toggleCart}
      >
        <AiOutlineShoppingCart className={`text-3xl`} />
      </div>

      <div
        className="sidebar w-72 h-full z-20 absolute top-0 right-0 transform transition-transform translate-x-full bg-pink-100 p-10 "
        ref={ref}
      >
        <h2 className="font-bold text-xl ">Shopping Cart</h2>
        <span
          onClick={toggleCart}
          className=" absolute top-2 right-2 cursor-pointer text-2xl text-pink-500"
        >
          <AiFillCloseCircle />
        </span>
        <ol className="list-decimal">
          <li className="flex item">
            <div className="w-2/3">Tshirt-Wear the code</div>
            <div className="w-1/3 flex gap-2 flex-row items-center justify-center ">
              <AiFillMinusCircle className="text-2xl cursor-pointer text-pink-500" />
              1{" "}
              <AiFillPlusCircle className="text-2xl cursor-pointer text-pink-500" />
            </div>
          </li>
        </ol>
        <button class="mt-8 flex justify-center items-center gap-3 ml-auto text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded">
          <BsFillBagCheckFill /> Checkout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
