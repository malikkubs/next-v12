import { Dialog } from "@material-ui/core";
import Image from "next/image";
import parse from "html-react-parser";
function DetailMyProject({ open, onClose, data }: any) {
  function replaceFonts(bodyText: string) {
    console.log(bodyText);
    if (!bodyText) {
      return "";
    }
    let newBody: string;
    newBody = bodyText.replace(/<h2/g, '<h2 class="fontnova mt-0"');
    newBody = newBody.replace(/<h3/g, '<h3 class="fontnova mt-0"');
    newBody = newBody.replace(/<h4/g, '<h4 class="fontnova mt-0"');
    newBody = newBody.replace(/<h5/g, '<h5 class="fontnova mt-0"');
    newBody = newBody.replace(/<h6/g, '<h6 class="fontnova mt-0"');
    newBody = newBody.replace(
      /<p/g,
      '<p class="text-base lg:text-xl text-red02 py-3"'
    );
    return newBody;
  }
  return (
    <Dialog
      key={data?.logo}
      open={open}
      className="m-0"
      fullWidth={true}
      maxWidth={"md"}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <div className="flex flex-col md:flex-row justify-center">
        <div className="w-full md:w-1/2 p-4 flex justify-center items-center  ">
          <div className="w-1/2">
            <div style={{ paddingBottom: "100%" }} className=" relative">
              <Image
                alt="ini gambar"
                src={data?.logo}
                layout="fill"
                className="absolute inset-0"
              />
            </div>
          </div>
        </div>
        <div className="wfull lg:w-1/2 p-4 lg:p-0">
          <p className="text-lg lg:text-2xl font-bold py-3 text-red02">
            {data?.nameProject}
          </p>
          <p className="text-base lg:text-xl font-bold text-red02">Deskripsi</p>

          {parse(replaceFonts(data?.des))}

          <p className="text-base lg:text-xl font-bold text-red02">Tag</p>
          <div className="flex flex-row flex-wrap py-3">
            {data?.tag?.map((data: string, index: any) => (
              <div
                key={index}
                className="bg-red02 py-1 px-2 mr-2 mb-2 rounded-md"
              >
                <p className="text-putih text-sm">{data}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Dialog>
  );
}

export default DetailMyProject;
