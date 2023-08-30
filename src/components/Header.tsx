function Header() {
  return (
    <div className="w-full h-[72px] bg-2 dark:bg-5  fixed top-0 left-0 right-0 z-50 border-b-2 border-b-3 dark:border-white">
      <div className="container mx-auto flex flex-row justify-between items-center">
        <h2 className="text-[48px] font-bold">Your Logo</h2>
        <div>
          <img src="/icon/akun-default.svg" />
        </div>
      </div>
    </div>
  );
}

export default Header;
