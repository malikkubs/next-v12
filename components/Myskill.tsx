import Image from "next/image";
import Button, { Button2 } from "./Button";
import * as ga from "../utils/google_analitycs";

function MySkill({ data }) {
  return (
    <div className="w-full h-s  lg:h-screen  container mx-auto pt-16">
      <div className="w-full py-6 lg:py-4 flex flex-col h-full">
        <p className="text-red02 text-center text-4xl font-bold">My Skill</p>

        <div className="h-full overflow-y-auto hidq">
          <div className="flex flex-wrap  mx-0 lg:-mx-4 ">
            {data.map((data, i) => (
              <div key={i} className="p-4 w-1/2 lg:w-1/3 ">
                <Card text={data.title} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex py-3 px-3">
          <Button
            onClick={() => {
              ga.EvenClickMenuApp("Button My Projects");
            }}
            text="My Projects"
            href={"/#myprojects"}
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
    </div>
  );
}
function Card({ text }) {
  return (
    <div className=" p-3 rounded-md flex text-center justify-center items-center h-20 border-red border-2">
      <p className="text-2xl font-bold text-red02 text-center">{text}</p>
    </div>
  );
}

export default MySkill;
