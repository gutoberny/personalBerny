import React from "react";
import { useTranslation } from "react-i18next";
import { ModeToggle } from "./mode-toggle";
import { LanguageToggle } from "./language-toggle";

const Header: React.FC = () => {
  const { t } = useTranslation();

  return (
    <header className="w-full bg-background text-foreground py-4 shadow">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold">{t("myPortfolio")}</h1>
        </div>

        <div className="flex space-x-4">
          <LanguageToggle />

          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
