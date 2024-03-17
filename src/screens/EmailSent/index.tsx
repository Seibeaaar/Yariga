import BlankContainer from "@/components/ScreenContainer/Blank";
import VerifyEmailIcon from "@/assets/icons/VerifyEmail.svg";
import Button from "@/components/Button";

const EmailSentScreen = () => (
  <BlankContainer>
    <section className="w-full h-full flex flex-col justify-center items-center text-center px-[24px] py-[32px]">
      <div>
        <h1 className="font-bold text-2xl md:text-3xl mb-[16px]">
          We have sent you an email to confirm your email address
        </h1>
        <h3 className="font-medium text-xl">
          There you will find further instructions
        </h3>
      </div>
      <img
        className="w-full h-full md:w-2/3 md:h-2/3 mt-[16px]"
        src={VerifyEmailIcon}
        alt="Email letter"
      />
      <div>
        <h4>If you haven't got a letter - we can send you another one </h4>
        <Button text="Resend email" className="mt-[16px]" />
      </div>
    </section>
  </BlankContainer>
);

export default EmailSentScreen;
