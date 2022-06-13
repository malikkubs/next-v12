import Image from "next/image";

function CardProjects({ logo, title, status }: any) {
  return (
    <>
      <div className=" bg-putih rounded-lg p-4">
        <div style={{ paddingBottom: "100%" }} className="relative">
          <Image
            layout="fill"
            src={logo}
            className="absolute inset-0 rounded-md"
          />
        </div>
        <div className="text-center pt-3">
          <p className="text-red02 text-lg font-bold">{title}</p>
          <p className="text-red02 text-base">{status}</p>
        </div>
      </div>
    </>
  );
}

export default CardProjects;
