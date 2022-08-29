import Image from "next/image";
import Button, { Button2 } from "./Button";
import * as ga from "../utils/google_analitycs";

function Abaout({ body }: any) {
  return (
    <div className="w-full h-s  lg:h-screen  container mx-auto pt-16">
      <div className="py-6 lg:py-4 h-full">
        <div className="bg-white-09 w-full h-full shadow-2xl relative rounded-2xl">
          <div className="h-full p-0 lg:pr-8 flex items-center justify-between flex-row">
            <div className="w-full lg:w-2/3 h-full flex flex-col p-4">
              <p className="text-red02 text-center text-4xl font-bold">
                About Me
              </p>
              <div className="overflow-y-auto  flex hid h-full flex-col">
                {body}
                {/* {parse(replaceFonts(body))} */}
              </div>
              <div className="flex pt-3">
                <Button
                  onClick={() => {
                    ga.EvenClickMenuApp("Button My Skill");
                  }}
                  text="My Skill"
                  href={"/#myskill"}
                />
                <div className="w-4" />
                <Button2
                  text="Hire Me"
                  href={() => {
                    ga.EvenClickMenuApp("Button Hire Me");
                    window.open("https://wa.me/+628971675097");
                  }}
                />
              </div>
            </div>
            <div className="foto relative hidden lg:flex">
              <Image
                className="w-full h-full object-cover absolute inset-0 z-0"
                src="/foto.png"
                layout="fill"
                alt="seoarang sedang menunjukan kedua ibu jari tanganya"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Abaout;
