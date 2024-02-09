import { useState } from "react";
import { Step, Stepper, StepLabel } from "@mui/material";
import ScreenContainer from "@/components/ScreenContainer";
import { ONBOARDING_STEPS } from "@/constants/profile";
import ProfileRoleChoice from "./RoleChoice";
import { OnboardingRole } from "@/types/proifle";

// 1. Role;
// 2. DOB;
// 3. If a proprietor - tax number form;;
// 4. Avatar;
// 5. Phone verification;

const ProfileCompleteScreen = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [role, setRole] = useState<OnboardingRole | null>(null);

  const onSelectRole = (selectedRole: OnboardingRole) => {
    setRole(selectedRole);
    setCurrentStep(currentStep + 1);
  };

  console.log(role);

  return (
    <ScreenContainer className="p-[24px]">
      <Stepper activeStep={currentStep}>
        {ONBOARDING_STEPS.map((step) => (
          <Step>
            <StepLabel
              optional={
                <p className="text-secondary-dark dark:text-secondary-light">
                  {step}
                </p>
              }
            />
          </Step>
        ))}
      </Stepper>
      <section className="pt-[36px] pb-[24px] h-full">
        <ProfileRoleChoice onSubmit={onSelectRole} />
      </section>
    </ScreenContainer>
  );
};

export default ProfileCompleteScreen;
