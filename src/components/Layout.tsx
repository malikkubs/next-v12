import { ScrollArea, AppShell, Burger } from "@mantine/core";
import Header from "./Header";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";

function Layout({ children }: any) {
  const [menu123, setMenu123] = useState<boolean>(false);
  function BtnMenu() {
    console.log("jalan");
    console.log("tes");

    setMenu123((prev) => !prev);
  }

  function btnMenu() {
    console.log("jalan");
    console.log("tes");

    setMenu123((prev) => !prev);
  }
  useEffect(() => {
    console.log("menu", menu123);
  });
  return (
    <>
      <div className=" bg-white dark:bg-black text-3 dark:text-2">
        <Header btnMenu={() => BtnMenu()} />
        <div onClick={() => setMenu123(false)} className="flex flex-row">
          <div className="fixed z-40 md:relative md:flex">
            <div
              className={
                `${
                  menu123 ? "w-[276px] xl:w-[308px] " : " w-0 xl:w-[102px] "
                } ` +
                " h-screen  md:w-[102px] flex flex-col transition-all duration-300"
              }
            >
              <div id="gap" className="h-[52px] md:h-[72px] " />
              <Navbar menu={menu123} />
            </div>
          </div>
          <div className="bg-white h-screen dark:bg-black  w-full">
            <div id="gap" className="h-[52px] md:h-[72px]" />
            <ScrollArea className="h-[calc(100vh-72px)]">{children}</ScrollArea>
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;
