import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import MenuDarg from "./MenuDrag";
import * as ga from "../utils/google_analitycs";
import { useState } from "react";

function TopMenu({
  ogtype = "Presonal Profile",
  subtitle = "Sebuah situs web Profil pribadi dari Yudian Nanda Malik ",
  title = "karyayudi.id - " + subtitle,
  desc = "Situs Personal, Untuk Memperkenalkan siapa Yudian Malik.",
  image = "/japan-wave.png",
  keywords = "yudian, malik, yudian malik, yudi, karya yudi, next karya yudi, karyayudi.id, pemrograman, laravel, nextjs, reactjs, tailwind, petugas partai,",
  children,
}: any) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="title" content={title}></meta>
        <meta name="description" content={desc}></meta>
      </Head>
      <div className="overflow-clip">
        <MenuDarg />
        {/* <div style={{ zIndex: "9" }} className="absolute inset-0 ">
          
        </div> */}
        <div className={`bg-red02 w-full flex fixed z-50`}>
          <div className="container h-16 mx-4 lg:mx-auto flex-row flex justify-between items-center">
            <div className="flex items-center justify-center">
              <img
                onClick={() => router.push("/")}
                src="/logo.svg"
                alt="ini logo bertulisan yudian"
              />
            </div>
            <div className="flex-row hidden md:flex">
              <MenuList
                onClick={() => {
                  ga.EvenClick("/#home");
                }}
                nameMenu="Home"
                href="/#home"
              />
              <MenuList
                onClick={() => {
                  ga.EvenClick("/#about-me");
                }}
                nameMenu="About Me"
                href="/#about-me"
              />
              <MenuList
                onClick={() => {
                  ga.EvenClick("/#myskill");
                }}
                nameMenu="My Skill"
                href="/#myskill"
              />
              <MenuList
                onClick={() => {
                  ga.EvenClick("/#myprojects");
                }}
                nameMenu="My Projects"
                href="/#myprojects"
              />
              <MenuList
                onClick={() => {
                  ga.EvenClick("/#contact-me");
                }}
                nameMenu="Contact Me"
                href="/#contact-me"
              />
            </div>
          </div>
        </div>
        <div className="">{children}</div>
      </div>
    </>
  );
}

function MenuList({ nameMenu, href, onClick }: any) {
  return (
    <div
      onClick={onClick}
      className="text-putih font-bold text-xl pl-6 hover:text-red"
    >
      <a href={href}>{nameMenu}</a>
    </div>
  );
}

export default TopMenu;
