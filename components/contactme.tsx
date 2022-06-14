import Image from "next/image";
import Footer from "./Footer";

function ContactMe() {
  return (
    <div className="w-full h-screen  pt-16 pb-6">
      <div className="py-4 h-terakhir container mx-auto">
        <div className="bg-putih w-full h-full shadow-2xl relative rounded-2xl overflow-hidden">
          <div className="w-full h-full absolute z-20 flex flex-col justify-center items-center">
            <p className="text-red02 text-center text-4xl font-bold">
              Contact Me
            </p>
            <p className="text-red02 w-2/3 lg:w-full text-xl pt-3 text-center">
              Let`s work together, to create Masterpiece
            </p>
            <div className=" flex justify-center items-center">
              <div className="flex flex-row">
                <IconCard
                  label="Email"
                  src="/email.svg"
                  text="yudianmalik@gmail.com"
                  link={() => {
                    window.open("mailto:yudianmalik@gmail.com");
                  }}
                />
                <IconCard
                  label="Github"
                  src="/github-red.svg"
                  text="yudianwebdev"
                  link={() => {
                    window.open("https://github.com/yudianwebdev");
                  }}
                />
                <IconCard
                  label="LinkedIn"
                  src="/linkedin.svg"
                  text="Yudian Nanda Malik"
                  link={() => {
                    window.open(
                      "https://www.linkedin.com/in/yudian-nanda-malik-a280321b2/"
                    );
                  }}
                />
                <IconCard
                  label="Instagram"
                  src="/ig-red.svg"
                  link={() => {
                    window.open(
                      "https://www.instagram.com/yudian_nanda_malik/"
                    );
                  }}
                  text="yudian_nanda_malik"
                />
                {/* <IconCard label="Email" /> */}
              </div>
            </div>
          </div>
          <div className="absolute -bottom-40 -right-40 ">
            <Image
              alt="gambar"
              width={500}
              height={500}
              src={"/megamendung1.png"}
            />
          </div>
          <div className="absolute -left-40 -top-40 ">
            <Image
              alt="gambar"
              width={500}
              height={500}
              src={"/megamendung1.png"}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function IconCard({ label = "", src = "", text = "", link }: any) {
  return (
    <div onClick={link} className=" p-4">
      <div className=" bg-white rounded cursor-pointer shadow p-4  lg:w-52 flex flex-col items-center justify-center">
        <Image alt="logo social" src={src} width={80} height={80} />
        <p className="text-center  hidden lg:flex text-base text-red02">
          {label}
        </p>
        <p className="text-center hidden lg:flex text-base text-red02">
          {text}
        </p>
      </div>
    </div>
  );
}

export default ContactMe;
