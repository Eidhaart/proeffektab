import React from "react";
import routes from "./routes";
import { Route, Routes } from "react-router-dom";
import common_en from "./components/translation/en/common.json";
import common_se from "./components/translation/se/common.json";
import i18next from "./components/translation/i18n";
import { I18nextProvider } from "react-i18next";
import { useTranslation } from "react-i18next";

function HeaderComponent() {
  const { t, i18n } = useTranslation("common");
  return (
    <h1>
      {t("welcome.title")}
      <button onClick={() => i18n.changeLanguage("se")}>se</button>
      <button onClick={() => i18n.changeLanguage("en")}>en</button>
    </h1>
  );
}

function App() {
  return (
    <React.Fragment>
      <I18nextProvider i18n={i18next}>
        <Routes>
          {routes.map((route, idx) =>
            <Route path={route.path} element={route.component} key={idx} />
          )}
        </Routes>
        <HeaderComponent />
      </I18nextProvider>
    </React.Fragment>
  );
}

export default App;
