import React from "react";
import { useTranslation } from "react-i18next";

const Introduction: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="grid">
        <h1 className="">{t("myName")}</h1>

        <p className="">{t("myRole")}</p>

        <p className="">{t("myLocation")}</p>

        <p className="">{t("myYearOld")}</p>
      </div>
      <div className="flex justify-center items-center mt-4">
        <div className="w-40 h-40 p-1 bg-background rounded-full shadow-lg flex justify-center items-center">
          <img
            src="src/images/profile.png"
            alt="Your Name"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>
    </>
  );
};

export default Introduction;
