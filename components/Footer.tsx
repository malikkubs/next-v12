import Image from "next/image";

function Footer() {
  return (
    <div className="bg-red02 flex  w-full">
      <div className="container h-16 w-full  mx-4 lg:mx-auto flex-row flex justify-between items-center">
        <div className="flex flex-row justify-between w-full items-center">
          <div
            onClick={() => window.open("https://wa.me/+628971675097")}
            className="flex flex-row items-center"
          >
            <Image
              alt="icon wa"
              className="cursor-pointer"
              src={"/iconwa.svg"}
              width={34}
              height={34}
            />
            <p className="text-putih ml-4">Call Me</p>
          </div>
          <p className="text-putih">karyayudi.id © 2022</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
