export default function Button({ text, href }: any) {
  return (
    <>
      <a
        href={href}
        className="bg-red rounded-lg cursor-pointer inline-flex px-5 h-10 items-center justify-center"
      >
        <div className="text-white text-base whitespace-nowrap">{text}</div>
      </a>
    </>
  );
}
export function Button2({ text, href }: any) {
  return (
    <>
      <div
        onClick={href}
        className="bg-red rounded-lg cursor-pointer inline-flex px-5 h-10 items-center justify-center"
      >
        <div className="text-white text-base whitespace-nowrap">{text}</div>
      </div>
    </>
  );
}
