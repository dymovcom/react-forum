import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/button";

export const LangSwitcher: FC = () => {
  const { t, i18n } = useTranslation();

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <div>
      <Button variant="ghost" size="s" onClick={toggleLang}>
        {t("lang_switcher")}
      </Button>
    </div>
  );
};
