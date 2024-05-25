import React from "react";

import { ThemeProvider } from "./components/theme-provider";

import Header from "./components/header";

import Introduction from "./components/introduction";

import "./i18n"; // Import the i18n configuration

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="h-screen flex flex-col bg-background text-foreground">
        <Header />

        <main className="flex-grow flex items-center justify-center">
          <Introduction />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
