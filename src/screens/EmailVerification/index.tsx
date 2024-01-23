import ScreenContainer from "@/components/ScreenContainer";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { useNavigate, useSearchParams } from "react-router-dom";
import Loader from "@/components/Loader";
import EmailVerificationSuccess from "./components/VerificationSuccess";
import EmailVerificationError from "./components/VerificationError";
import VerificationBrokenLink from "./components/BrokenLink";
import { verifyEmail } from "@/redux/thunks/profile";
import { useCallback, useEffect, useState } from "react";

const EmailVerificationScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [retries, setRetries] = useState<number>(0);
  const requestId = searchParams.get("request");
  const { emailVerificationComplete, emailVerificationError } = useSelector(
    (state: RootState) => state.profile,
  );

  useEffect(() => {
    if (!requestId || emailVerificationComplete) {
      return;
    }
    dispatch(verifyEmail(requestId));
  }, [emailVerificationComplete, requestId]);

  const onRetryClick = () => {
    if (retries === 3) return;
    setRetries(retries + 1);
    dispatch(verifyEmail(requestId!));
  };

  const goToSignUp = useCallback(() => navigate("/"), [navigate]);
  const goToProfileCompletion = useCallback(
    () => navigate("/complete-profile"),
    [navigate],
  );

  const renderContent = () => {
    switch (true) {
      case !requestId:
        return <VerificationBrokenLink onButtonClick={goToSignUp} />;
      case emailVerificationError || retries > 0:
        return (
          <EmailVerificationError
            onRetryClick={onRetryClick}
            onGoBackClick={goToSignUp}
            retries={retries}
          />
        );
      default:
        return (
          <EmailVerificationSuccess onButtonClick={goToProfileCompletion} />
        );
    }
  };

  const renderLoader = () => {
    if (!requestId || emailVerificationComplete) {
      return null;
    }
    return <Loader transparent={retries >= 1} />;
  };

  return (
    <ScreenContainer>
      {renderLoader()}
      {renderContent()}
    </ScreenContainer>
  );
};

export default EmailVerificationScreen;
