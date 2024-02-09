import { FC, useState } from "react";
import Button from "@/components/Button";
import { ONBOARDING_ROLE_OPTIONS } from "@/constants/profile";
import { OnboardingRole } from "@/types/proifle";

type RoleChoiceProps = {
  onSubmit(role: OnboardingRole): void;
};

const ProfileRoleChoice: FC<RoleChoiceProps> = ({ onSubmit }) => {
  const [selectedRole, setSelectedRole] = useState<OnboardingRole | null>(null);

  const onRoleClick = (role: OnboardingRole) => {
    setSelectedRole(role);
  };

  const onNextClick = () => {
    onSubmit(selectedRole as OnboardingRole);
  };

  return (
    <div className="flex flex-col justify-between h-full">
      <h1 className="text-center text-4xl font-bold">
        Your main goal in Yariga is:
      </h1>
      <div className="flex flex-grow mt-[16px] mb-[28px] px-[36px] items-stretch justify-center w-full gap-[16px]">
        {ONBOARDING_ROLE_OPTIONS.map((option) => {
          const isSelected = option.role === selectedRole;
          return (
            <div
              onClick={() => onRoleClick(option.role as OnboardingRole)}
              className={`${
                isSelected ? "bg-primary" : "hover:bg-primary"
              } hover:cursor-pointer transition-all shadow-md rounded-lg flex-col flex justify-center items-center w-2/3`}
            >
              <img
                className="w-1/2 h-1/2"
                alt={option.title}
                src={option.image}
              />
              <h4>{option.title}</h4>
            </div>
          );
        })}
      </div>
      <div className="mx-auto w-1/3">
        <Button text="Next" onClick={onNextClick} disabled={!selectedRole} />
      </div>
    </div>
  );
};

export default ProfileRoleChoice;
