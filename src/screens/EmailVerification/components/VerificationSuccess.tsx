import Button from "@/components/Button";
import EmailVerifiedIcon from "@/assets/icons/EmailVerified.svg";
import { FC } from "react";

type VerificationSuccessProps = {
  onButtonClick(): void;
};

const EmailVerificationSuccess: FC<VerificationSuccessProps> = ({
  onButtonClick,
}) => {
  return (
    <section className="w-full h-full flex flex-col justify-center items-center text-center px-[24px] py-[32px]">
      <div>
        <h1 className="font-bold text-2xl md:text-3xl mb-[16px]">
          Thank you! Your email address has been verified.
        </h1>
        <h3 className="font-medium text-xl">Welcome to Yariga!</h3>
      </div>
      <img
        className="w-full h-full md:w-2/3 md:h-2/3 mt-[16px]"
        src={EmailVerifiedIcon}
        alt="Email letter"
      />
      <Button
        text="Complete your profile"
        onClick={onButtonClick}
        className="mt-[16px] w-full md:w-2/3 lg:w-1/4"
      />
    </section>
  );
};

export default EmailVerificationSuccess;
