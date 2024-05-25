import React from "react";
import { ThemeProvider } from "./components/theme-provider";
import { ModeToggle } from "./components/mode-toggle";
import { LanguageToggle } from "./components/language-toggle";
import "./i18n"; // Import the i18n configuration
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="h-screen">
        <div className="flex justify-end p-4 space-x-4">
          <LanguageToggle />

          <ModeToggle />
        </div>

        <div
          className={`bg-background text-foreground h-full flex items-center justify-center`}
        >
          <h1>{t("Welcome")}</h1>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
