import H2 from "./atom/H2";
import TextBase from "./atom/Text-Base";
import { useEffect, useState } from "react";

function Navbar({}) {
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
      ],
    },
    {
      Group: "Group 2",
      Menus: [
        {
          label: "Menu1",
          icon: (color: string) => <H2 h2={color} />,
          link: "",
        },
      ],
    },
  ];

  return (
    <div className="w-full bg-2 dark:bg-5 h-screen">
      {Menu.map(({ Group, Menus }, i) => (
        <>
          <H2 h2={Group} />
          <div className="flex flex-col gap-3">
            {Menus.map((x, i) => (
              <div className="w-full px-4">
                <div
                  className={`${
                    active === x.link
                      ? " bg-3 text-2 dark:bg-2 dark:text-3 font-bold "
                      : "bg-transparent text-3 dark:text-2 "
                  } px-4 py-2 rounded-lg `}
                >
                  <TextBase Text="test" />
                </div>
              </div>
            ))}
          </div>
        </>
      ))}
    </div>
  );
}

export default Navbar;
