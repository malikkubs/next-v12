import Button, { Button2 } from "./Button";

function Abaout({ body }: any) {
  return (
    <div className="w-full h-screen container mx-auto pt-16">
      <div className="py-4 h-full">
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
                <Button text="My Skill" href={"/#myskill"} />
                <div className="w-4" />
                <Button2
                  text="Hire Me"
                  href={() => {
                    window.open("https://wa.me/+8971675097");
                  }}
                />
              </div>
            </div>
            <div className="foto relative hidden lg:flex">
              <img
                className="w-full h-full object-cover"
                src="/foto.png"
                // alt="seoarang sedang menunjukan kedua ibu jari tanganya"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Abaout;
