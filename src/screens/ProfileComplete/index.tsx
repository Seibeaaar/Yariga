import ScreenContainer from "@/components/ScreenContainer";
import CityScapeImage from "@/assets/images/CityScape.webp";
import ProfileCompletionForm from "./CompletionForm";

const ProfileCompleteScreen = () => {
  return (
    <ScreenContainer className="flex items-center justify-center lg:justify-normal">
      <img
        src={CityScapeImage}
        alt="Business center"
        className="h-full w-1/2 hidden lg:block"
      />
      <ProfileCompletionForm />
    </ScreenContainer>
  );
};

export default ProfileCompleteScreen;
