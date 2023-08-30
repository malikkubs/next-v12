import { ScrollArea } from "@mantine/core";
import Header from "./Header";
import Navbar from "./Navbar";

function Layout({ children }: any) {
  return (
    <div className=" bg-white dark:bg-black text-3 dark:text-2">
      <Header />
      <div></div>
      <div className="flex flex-row">
        <div className="w-3/12 pt-[72px]">
          <ScrollArea>
            <Navbar />
          </ScrollArea>
        </div>
        <div className="bg-white dark:bg-black pt-[72px] w-full">
          <ScrollArea>{children}</ScrollArea>
        </div>
      </div>
    </div>
  );
}

export default Layout;
