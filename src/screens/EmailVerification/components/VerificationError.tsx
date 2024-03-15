import { FC } from "react";
import Button from "@/components/Button";
import EmailVerifiedErrorIcon from "@/assets/icons/EmailVerifiedError.svg";

type VerificationErrorProps = {
  retries: number;
  onRetryClick(): void;
  onGoBackClick(): void;
};

const EmailVerificationError: FC<VerificationErrorProps> = ({
  retries,
  onRetryClick,
  onGoBackClick,
}) => {
  return (
    <section className="w-full h-full flex flex-col justify-center items-center text-center px-[24px] py-[32px]">
      <div>
        <h1 className="font-bold text-2xl md:text-3xl mb-[16px]">
          Oops! Something went wrong
        </h1>
        <h3 className="font-medium text-xl">
          Yariga cannot verify your email address.
        </h3>
      </div>
      <img
        className="w-full h-full md:w-2/3 md:h-2/3 mt-[16px]"
        src={EmailVerifiedErrorIcon}
        alt="Email letter"
      />
      <div className="w-full flex gap-[16px] items-center justify-center">
        <Button
          text={`Retry verification (${3 - retries} retries left)`}
          onClick={onRetryClick}
          className="mt-[16px] w-full md:w-2/3 lg:w-1/4"
        />
        <Button
          text="Go back to sign up"
          onClick={onGoBackClick}
          className="mt-[16px] w-full md:w-2/3 lg:w-1/4"
        />
      </div>
    </section>
  );
};

export default EmailVerificationError;
