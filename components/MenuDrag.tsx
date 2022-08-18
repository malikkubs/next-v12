import { useEffect, useState } from "react";
import * as ga from "../utils/google_analitycs.js";

function MenuDarg() {
  const [aktive, setAktive] = useState(false);
  const data = [
    { id: 1, link: "/#home", icon: "/home.svg" },
    { id: 2, link: "/#about-me", icon: "/about.svg" },
    { id: 3, link: "/#myskill", icon: "/myskill.svg" },
    { id: 4, link: "/#myprojects", icon: "/portfolio.svg" },
    { id: 5, link: "/#contact-me", icon: "/email.svg" },
  ];
  // console.log("awal", data);
  const dataReverse = [...data].reverse();
  // console.log("akhir", data, dataReverse);
  let dataKanan = [
    { id: 5, link: "/#contact-me", icon: "/email.svg" },
    { id: 4, link: "/#myprojects", icon: "/portfolio.svg" },
    { id: 3, link: "/#myskill", icon: "/myskill.svg" },
    { id: 2, link: "/#about-me", icon: "/about.svg" },
    { id: 1, link: "/#home", icon: "/home.svg" },
  ];
  const [dataMenu, setDataMenu] = useState(data);
  let qwert = [1, 2, 3, 4, 5, 6];

  function menuOpen() {
    setAktive(!aktive);
  }
  function mouseEnd() {
    let width = window.innerWidth;
    let nav = document.getElementById("nav");
    let a = parseInt(getComputedStyle(document.getElementById("nav")).left);

    let aqwert = parseInt(
      getComputedStyle(document.getElementById("nav")).height
    );
    let top = parseInt(getComputedStyle(document.getElementById("nav")).top);
    let haight = window.innerHeight;
    // console.log("cek", top, haight - aqwert / 2);

    if (top > haight - aqwert) {
      nav.style.top = haight - aqwert + "px";
    }
    let child1 = document.getElementsByClassName("menuchild");
    if (a > width / 2) {
      setDataMenu(dataKanan);
      // setDataMenu(dataMenu.sort((a, b) => a.id - b.id));
      for (let i = 0; i < child1.length; i++) {
        // console.log(i, child1[i], "qwerty");
        child1[i].className = child1[i].className.replace(
          "posisiKanan",
          "posisiKiri"
        );
      }
      nav.style.left = width - (30 + 50) + "px";
      // transform: rotate(calc(var(--i) * (360deg / 8))) translateY(120px);
    } else {
      setDataMenu(data);
      for (let i = 0; i < child1.length; i++) {
        // console.log(i, child1[i], "qwerty");
        child1[i].className = child1[i].className.replace(
          "posisiKiri",
          "posisiKanan"
        );
      }
      nav.style.left = 30 + "px";
    }
  }
  function touchstart(e) {
    setAktive(false);
    let nav = document.getElementById("nav");
    let logY = e.touches[0].clientY - 150;
    let logX = e.touches[0].clientX - 25;

    nav.style.top = logY > 0 ? logY + "px" : 0 + "px";

    nav.style.left = logX + "px";
    // console.log(logY, logX, e);

    let a = parseInt(getComputedStyle(document.getElementById("nav")).left);
  }
  function pangilDom() {
    let nav = document.getElementById("nav");
    let chil = document.getElementById("chi");
    let width = 50;
    let left = window.innerWidth - (30 + width);
    nav.style.top = "30px";
    nav.style.width = width + "px";
    nav.style.left = 30 + "px";

    nav.firstElementChild.addEventListener("touchmove", touchstart);
    nav.firstElementChild.addEventListener("touchend", mouseEnd);
    // console.log("cek", nav.firstElementChild);
  }

  useEffect(() => {
    pangilDom();
  }, []);
  return (
    <>
      <nav
        id="nav"
        // onClick={() => console.log("klik", window.innerHeight)}
        className={`pointer nav absolute z-50 lg:hidden  ${
          aktive == true ? "open" : ""
        } `}
      >
        <div className="toggel">
          <div
            className="IndukBtn shadow-lg opacity-75"
            onClick={() => {
              menuOpen();
              ga.EvenClickButton("Button Menu App");
            }}
          >
            <img src="/menu.svg" alt="menu" />
          </div>
          {dataMenu.map((data, i) => (
            <div
              key={data.id}
              id="cil"
              className={`menuchild bg-red02 shadow-lg rounded-full posisiKiri --${
                i + 1
              } `}
            >
              <div id="btnchild" onClick={() => setAktive(false)}>
                <a
                  onClick={() => {
                    ga.EvenClickMenuApp(data.link);
                  }}
                  href={data.link}
                >
                  <img alt="jaja" src={data.icon} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </nav>
    </>
  );
}

export default MenuDarg;
