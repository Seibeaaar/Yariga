import ScreenContainer from "@/components/ScreenContainer";
import CityScapeImage from "@/assets/images/CityScape.webp";
import ProfileCompletionForm from "./CompletionForm";

// 1. Role;
// 2. DOB;
// 3. If a proprietor - tax number form;;
// 4. Avatar;
// 5. Phone verification;

const ProfileCompleteScreen = () => {
  return (
    <ScreenContainer className="flex items-center">
      <img
        src={CityScapeImage}
        alt="Business center"
        className="h-full w-1/2"
      />
      <ProfileCompletionForm />
    </ScreenContainer>
  );
};

export default ProfileCompleteScreen;
