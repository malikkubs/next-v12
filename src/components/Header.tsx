function Header({ btnMenu }) {
  return (
    <div className="w-full h-[52px] md:h-[72px] bg-second dark:bg-5  fixed top-0 left-0 right-0 z-50 border-b-2 border-b-3 dark:border-white">
      {/* <div className="container mx-auto flex flex-row justify-between items-center"> */}
      <div className="flex flex-row py-[6px] md:py-3 px-4 gap-4  items-center">
        <div onClick={btnMenu}>
          <img src="/icon/icon_menu_bar.svg" alt="tombol menu" />
        </div>
        <img src="/icon/icon_logo_mini.svg" alt="logo img" />
        <img
          src="/icon/icon_logo_big.svg"
          alt="logo img"
          className="hidden xl:flex"
        />
        <div className="flex-grow" />
        <img src="/icon/akun-default.svg" className="w-8 h-8 md:w-12 md:h-12" />
      </div>

      {/* <h2 className="text-[48px] font-bold">Your Logo</h2> */}
      {/* </div> */}
    </div>
  );
}

export default Header;
