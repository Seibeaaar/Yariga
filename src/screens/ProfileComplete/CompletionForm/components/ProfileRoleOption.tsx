import { InitialRoleOption } from "@/types/auth";
import { FC } from "react";

type ProfileRoleOptionProps = {
  option: {
    image: string;
    title: string;
    role: InitialRoleOption;
  };
  isSelected: boolean;
  onSelect: () => void;
};

const ProfileRoleOption: FC<ProfileRoleOptionProps> = ({
  isSelected,
  option,
  onSelect,
}) => {
  const conditionalStyles = isSelected
    ? "bg-primary text-primary-dark border-primary"
    : "hover:bg-primary hover:border-primary border-border-light dark:border-border-dark";
  return (
    <div
      onClick={onSelect}
      className={`rounded-[16px] border-[1px] cursor-pointer p-[16px] transition-all w-1/2 flex flex-col items-center ${conditionalStyles}`}
    >
      <img
        className="h-[96px] w-[96px]"
        src={option.image}
        alt={option.title}
      />
      <p className="text-center">{option.title}</p>
    </div>
  );
};

export default ProfileRoleOption;
