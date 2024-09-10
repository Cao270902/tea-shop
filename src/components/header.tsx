import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <>
      <div>
        {/* <ul>
        <li>
          <Link href="/login">Đăng nhập</Link>
        </li>
        <li>
          <Link href="/register">Đăng ký</Link>
        </li>
      </ul> */}
        <div className=" flex justify-between items-center mx-auto  w-[1440px] max-w-[calc(100%-300px)] h-[100px] border-b border-b-[#999]">
          <div className="flex items-center">
            <a href="#">
              {/* <img src="/images/logo.png" className="logo" alt="" /> */}
              <Image
                src="/images/logo.png"
                className="max-w-[68px]"
                alt="logo"
                width={68}
                height={78}
              />
            </a>
            <div className="text-[28px] font-medium text-[#555]">
              <span className="text-[36.4px] font-medium text-[#7AA640] ">
                TEA
              </span>
              THỜI ĐẠI
            </div>
          </div>
          <div>
            <ul id="navbar" className="flex items-center gap-[15px]">
              <li>
                <a className="text-[14.3px] font-bold text-[#777]" href="">
                  TRANG CHỦ
                </a>
              </li>
              <li>
                <a className="text-[14.3px] font-bold text-[#777]" href="">
                  GIỚI THIỆU
                </a>
              </li>
              <li>
                <a className="text-[14.3px] font-bold text-[#777]" href="">
                  SẢN PHẨM
                </a>
              </li>
              <li>
                <a className="text-[14.3px] font-bold text-[#777]" href="">
                  TIN TỨC
                </a>
              </li>
              <li>
                <a className="text-[14.3px] font-bold text-[#777]" href="">
                  LIÊN HỆ
                </a>
              </li>
              <li>
                <form className="example flex " action="">
                  <input
                    type="text"
                    placeholder="Search.."
                    name="search"
                    className="w-[137px] h-[34px] border-t border-l border-b border-t-[#999] border-l-[#999] border-b-[#999] pl-[15px]"
                  />
                  <button
                    type="submit"
                    className="w-[38px] h-[34px] border-t border-r border-b border-t-[#999] border-r-[#999] border-b-[#999]   flex justify-center items-center"
                  >
                    <img
                      src="/images/search-icon.svg"
                      alt=""
                      className="w-[13px] h-[14px]"
                    />
                  </button>
                </form>
              </li>
              <div className="relative">
                <li id="" className="">
                  <a href="">
                    <Image
                      src="/images/cart-icon.svg"
                      className="cart-icon"
                      alt="cart-icon"
                      width={22.94}
                      height={25}
                    />
                  </a>
                  <div className="w-[20px] h-[18px] flex justify-center items-center rounded-[50%] absolute top-[-8px] right-[-10px] bg-[#7AA640] text-[#FFF]">
                    2
                  </div>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
