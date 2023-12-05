import { useEffect, useState } from "react";
import H2 from "./atom/H2";
import TextBase from "./atom/Text-Base";
import { ScrollArea, Tooltip } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

function Navbar({ menu }) {
  let active = "home";
  interface IMenus {
    label: string;
    icon?: any;
    link: string;
  }
  interface ISidebar {
    Group: string;
    Menus: IMenus[];
  }

  const [hover, setHover] = useState(false);

  const isXl = useMediaQuery("(max-width: 1440px)");
  const isMd = useMediaQuery("(max-width: 1280px)");
  const isSm = useMediaQuery("(min-width: 768px)");
  const Menu: ISidebar[] = [
    {
      Group: "Group 1",
      Menus: [
        {
          label: "Menu1",
          icon: (color: string) => <H2 h2={color} />,
          link: "home",
        },
        {
          label: "Menu1",
          icon: (color: string) => <H2 h2={color} />,
          link: "",
        },
        {
          label: "Menu1",
          icon: (color: string) => <H2 h2={color} />,
          link: "",
        },
        {
          label: "Menu1",
          icon: (color: string) => <H2 h2={color} />,
          link: "",
        },
        {
          label: "Menu1",
          icon: (color: string) => <H2 h2={color} />,
          link: "",
        },
        {
          label: "Menu1",
          icon: (color: string) => <H2 h2={color} />,
          link: "",
        },
        {
          label: "Menu1",
          icon: (color: string) => <H2 h2={color} />,
          link: "",
        },
        {
          label: "Menu1",
          icon: (color: string) => <H2 h2={color} />,
          link: "",
        },
        {
          label: "Menu1",
          icon: (color: string) => <H2 h2={color} />,
          link: "",
        },
        {
          label: "Menu1",
          icon: (color: string) => <H2 h2={color} />,
          link: "",
        },
      ],
    },
    {
      Group: "Group 2",
      Menus: [
        {
          label: "Menu2",
          icon: (color: string) => <H2 h2={color} />,
          link: "",
        },
        {
          label: "Menu2",
          icon: (color: string) => <H2 h2={color} />,
          link: "",
        },
        {
          label: "Menu2",
          icon: (color: string) => <H2 h2={color} />,
          link: "",
        },
        {
          label: "Menu2",
          icon: (color: string) => <H2 h2={color} />,
          link: "",
        },
        {
          label: "Menu2",
          icon: (color: string) => <H2 h2={color} />,
          link: "",
        },
        {
          label: "Menu2",
          icon: (color: string) => <H2 h2={color} />,
          link: "",
        },
        {
          label: "Menu2",
          icon: (color: string) => <H2 h2={color} />,
          link: "",
        },
        {
          label: "Menu2",
          icon: (color: string) => <H2 h2={color} />,
          link: "",
        },
        {
          label: "Menu2",
          icon: (color: string) => <H2 h2={color} />,
          link: "",
        },
        {
          label: "Menu2",
          icon: (color: string) => <H2 h2={color} />,
          link: "",
        },
      ],
    },
  ];
  useEffect(() => {
    console.log(
      isSm || isMd || isXl,
      "test",
      isMd,
      isSm,
      isXl,
      !(!isSm || !isMd || !isXl)
    );
  });

  return (
    <div className="h-[500px] md:h-[calc(100vh-72px)] flex flex-col p-0 md:p-4">
      <ScrollArea className="bg-second rounded-none md:rounded-2xl overflow-y-auto">
        <div className="  py-4">
          {Menu.map(({ Group, Menus }, i) => (
            <div key={i}>              {/* <H2 h2={Group} /> */}
              
              {Menus.map((x, i) => (
                // <Tooltip.Floating
                //   disabled={!isSm || !isMd || !isXl}
                //   label="Tooltip"
                //   position="right"
                // >
                <button
                key={i}
                  onFocus={() => setHover(true)}
                  id="menu"
                  className={`${
                    active === x.link ? "bg-primary text-second " : ""
                  } h-10 px-4 gap-[10px] cursor-pointer flex items-center w-full hover:bg-primary hover:bg-opacity-70 `}
                >
                  <div className="w-[5px] h-[15px] bg-second" />
                  <img width={24} height={24} src="/icon/icon_logo_mini.svg" />
                  {menu && <p className="flex md:hidden xl:flex">{x.label}</p>}
                </button>
                // </Tooltip.Floating>
              ))}
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}

export default Navbar;
