import Image from "next/image";
import { useEffect, useState } from "react";
import Button, { Button2 } from "../components/Button";
import TopMenu from "../components/TopMenu";
import Abaout from "../components/abaout";
import ContactMe from "../components/contactme";
import MySkill from "../components/Myskill";
import CardProjects from "../components/CardProject";
import DetailMyProject from "../components/modal/Detailmyproject";
import MenuDarg from "../components/MenuDrag";
import parse from "html-react-parser";

interface DatDqwertya2 {
  [key: string]: any;
  // logo: string;
}
interface Data {
  [key: string]: any;
  myprojects: DatDqwertya2[];
}
const DataJson: Data[] = require("../json/home.json");

function Home() {
  const [text, setText] = useState("");
  const [animasi, setAnimasi] = useState("text-sec");
  function textload() {
    setTimeout(() => {
      // setAnimasi("text-sec");
      setText("Programer");
    }, 0);
    setTimeout(() => {
      setText("3D Modeling");
    }, 4000);
    setTimeout(() => {
      setText("Youtuber");
    }, 8000);
    setTimeout(() => {
      setText("Petugas Partai");
    }, 12000);
    setTimeout(() => {
      setAnimasi("blink");
    }, 14000);
    setTimeout(() => {
      setAnimasi("text-sec");
    }, 16000);
  }

  useEffect(() => {
    textload();
    let inter = setInterval(() => {
      textload();
    }, 16000);
    return () => {
      clearInterval(inter);
    };
  }, []);
  const [sco, setSeo] = useState(false);
  useEffect(() => {
    let s = setTimeout(() => {
      setSeo(true);
    }, 5000);
    return () => {
      clearTimeout(s);
    };
  }, []);

  const [dataHome, setDataHome] = useState<Data[]>(DataJson);
  const [openDetail, setOpenDetail] = useState(false);
  const [dataDetail, setDataDetail] = useState([]);

  function dataDetailOpen(index: number) {
    setOpenDetail(true);
    const data = dataHome[0]?.myprojects.filter((x, i) => i === index);

    setDataDetail(data);
  }

  function replaceFonts(bodyText: string) {
    if (!bodyText) {
      return "";
    }
    let newBody: string;
    newBody = bodyText.replace(/<h2/g, '<h2 class="fontnova mt-0"');
    newBody = newBody.replace(/<h3/g, '<h3 class="fontnova mt-0"');
    newBody = newBody.replace(/<h4/g, '<h4 class="fontnova mt-0"');
    newBody = newBody.replace(/<h5/g, '<h5 class="fontnova mt-0"');
    newBody = newBody.replace(/<h6/g, '<h6 class="fontnova mt-0"');
    newBody = newBody.replace(/<p/g, '<p class="fontnova mt-0"');
    return newBody;
  }

  return (
    <>
      <DetailMyProject
        data={dataDetail[0]}
        onClose={() => setOpenDetail(false)}
        open={openDetail}
      />
      <TopMenu>
        <div className="w-full h-screen overflow-hidden scroll-smooth ">
          <section
            id="home"
            className="container px-4 md:px-4 mx-0 lg:px-0 lg:mx-auto"
          >
            <div className="w-full h-s  lg:h-screen  justify-center  bg-putih lg:bg-none bg-red-300 flex flex-col sm:flex-row pt-16 overflow-hidden">
              <div className="w-full lg:w-1/2  flex items-center">
                <div
                  style={{ paddingBottom: "100%" }}
                  className="relative w-full"
                >
                  <Image
                    className="w-full h-full absolute bg-red inset-0 object-contain rounded-full"
                    src={"/foto.png"}
                    layout="fill"
                    alt="seoarang sedang menunjukan kedua ibu jari tanganya"
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2 -mt-14 sm:mt-0 z-10 flex items-center ">
                <div className="w-full p-0 lg:p-10">
                  <p className="font-bold text-4xl text-red02">Hola, I’m</p>
                  <p className="font-bold text-4xl text-red02">
                    Yudian <span className="text-red">Malik</span>
                  </p>
                  <div className="h-11  relative inline-flex">
                    <p className={`font-bold text-4xl text-red02 ${animasi}`}>
                      {text}
                    </p>
                  </div>
                  <p className="text-red02 text-xl pt-3 line-clamp">
                    Pelamanun yang suka mengubah secangkir kopi menjadi sesuatu
                    karya yang menarik. Memiliki kreatifitas yang bisa
                    diwujudkan, bukan hanya angan angan.
                  </p>
                  <div id="gap" className="h-6" />
                  <Button text="Aboute Me" href={"/#about-me"} />
                </div>
              </div>
            </div>
          </section>
          <section id="about-me" className="bg-megamendung">
            <Abaout body={parse(replaceFonts(dataHome[0]?.abaout))} />
          </section>
          <section id="myskill" className="bg-white">
            <MySkill data={dataHome[0].myskill} />
          </section>
          <section id="myprojects" className="bg-japan-wave ">
            <div className="w-full h-s  lg:h-screen  container mx-auto pt-16">
              <div className="py-6 lg:py-4 h-full">
                <div className="bg-red02-09 w-full h-full shadow-2xl relative rounded-2xl">
                  <div className="h-full flex flex-col">
                    <div className="w-full h-full flex flex-col  ">
                      <p className="text-putih text-center p-3 text-4xl font-bold">
                        My Project
                      </p>

                      <div className="w-full h-full hid  overflow-y-auto">
                        <div className="flex flex-wrap">
                          {dataHome[0]?.myprojects?.map((data, index) => (
                            <div
                              key={index}
                              className="p-3  w-1/2 lg:w-1/4"
                              onClick={() => dataDetailOpen(index)}
                            >
                              <CardProjects
                                key={index}
                                title={data.nameProject}
                                status={data.status}
                                logo={data.logo}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="flex py-3 px-3">
                        <Button text="Contact Me" href={"/#contact-me"} />
                        <div className="w-4" />
                        <Button2
                          text="Hire Me"
                          href={() => {
                            window.open("https://wa.me/+628971675097");
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="contact-me">
            <ContactMe />
          </section>
        </div>
      </TopMenu>
    </>
  );
}

export default Home;
