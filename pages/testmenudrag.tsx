import { useEffect, useState } from "react";

function tesMenuDarg() {
  const [aktive, setAktive] = useState(false);
  const data = [
    "/email.svg",
    "/portfolio.svg",
    "/myskill.svg",
    "/about.svg",
    "/home.svg",
  ];
  const [dataMenu, setDataMenu] = useState(data);

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
    if (top > haight - aqwert - 100) {
      nav.style.top = haight - aqwert + "px";
    }
    if (a == 30) {
      console.log("jalan cek");
      setDataMenu(data.reverse());
    } else {
      setDataMenu(data);
    }
    let child1 = document.getElementsByClassName("menuchild");
    if (a > width / 2) {
      for (let i = 0; i < child1.length; i++) {
        console.log(i, child1[i], "qwerty");
        child1[i].className = child1[i].className.replace(
          "posisiKanan",
          "posisiKiri"
        );
      }
      nav.style.left = width - (30 + 50) + "px";
      // transform: rotate(calc(var(--i) * (360deg / 8))) translateY(120px);
    } else {
      for (let i = 0; i < child1.length; i++) {
        console.log(i, child1[i], "qwerty");
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
    console.log(logY, logX, e);

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
    console.log("cek", nav.firstElementChild);
  }

  useEffect(() => {
    pangilDom();
  }, []);
  return (
    <div className="w-full relative lg:hidden h-screen overflow-clip ">
      <nav
        id="nav"
        onClick={() => console.log("klik", window.innerHeight)}
        className={`pointer nav absolute  ${aktive == true ? "open" : ""} `}
      >
        <div className="toggel">
          <div
            className="IndukBtn shadow-lg opacity-50"
            onClick={() => menuOpen()}
          >
            <img src="/menu.svg" />
          </div>
          {dataMenu.map((data, i) => (
            <div
              id="cil"
              className={`menuchild bg-red02 shadow-lg rounded-full posisiKiri --${
                i + 1
              } `}
            >
              <div id="btnchild">
                <a>
                  <img src={data} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
}

export default tesMenuDarg;
