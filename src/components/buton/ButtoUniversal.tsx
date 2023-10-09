type IButton = {
  type: "outline" | "block" | "rounded";
  onClick(): void;
  label: string;
};
function ButtonUniversal({ onClick, label, type }: IButton) {
  return (
    <div onClick={onClick}>
      <div
        className={`flex cursor-pointer justify-center items-center w-full h-[40px]           
          ${type === "outline" && " rounded-[12px] border-2 border-3 text-3 "}
          ${type === "block" && "bg-3 text-2 rounded-[12px]"}
        `}
      >
        <div>{label}</div>
      </div>
    </div>
  );
}

export default ButtonUniversal;
