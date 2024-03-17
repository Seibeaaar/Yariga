import BlankContainer from "@/components/ScreenContainer/Blank";
import CityScapeImage from "@/assets/images/CityScape.webp";
import ProfileCompletionForm from "./CompletionForm";

const ProfileCompleteScreen = () => {
  return (
    <BlankContainer className="flex items-center justify-center lg:justify-normal">
      <img
        src={CityScapeImage}
        alt="Business center"
        className="h-full w-1/2 hidden lg:block"
      />
      <ProfileCompletionForm />
    </BlankContainer>
  );
};

export default ProfileCompleteScreen;
