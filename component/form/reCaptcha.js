import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from "react-google-recaptcha-v3";
import React, { useState } from "react";
import { Controller } from "react-hook-form";

const CaptchaButton = ({ onVerifyCaptcha, value }) => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [isLoading, setIsLoading] = useState(false);
  const clickHandler = async () => {
    setIsLoading(true);
    if (!executeRecaptcha) {
      setIsLoading(false);
      return;
    }

    const token = await executeRecaptcha("contact");

    onVerifyCaptcha(token);
    setIsLoading(false);
  };

  const renderText = () => {
    if (isLoading) {
      return "Carregando...";
    }

    if (value) {
      return "Captcha Verificado";
    }
    return "Verificar captcha";
  };

  return (
    <button
      disabled={!!isLoading || !!value}
      type="button"
      className="g-recaptcha"
      onClick={clickHandler}
    >
      {renderText()}
    </button>
  );
};
export const ReCaptcha = ({ onVerifyCaptcha, value }) => (
  <GoogleReCaptchaProvider
    reCaptchaKey={process.env.NEXT_PUBLIC_KEY_GOOGLE_CAPTCHA}
  >
    <CaptchaButton value={value} onVerifyCaptcha={onVerifyCaptcha} />
  </GoogleReCaptchaProvider>
);

export const ControlledReCaptcha = ({ onVerifyCaptcha, ...props }) => (
  <Controller
    {...props}
    render={({ field, fieldState: { error } }) => {
      return (
        <>
          <ReCaptcha
            value={field?.value}
            onVerifyCaptcha={(token) => {
              field.onChange(token);
              if (onVerifyCaptcha) onVerifyCaptcha(token);
            }}
          />

          {!!error && <p className="error-input">{error?.message}</p>}
        </>
      );
    }}
  />
);
