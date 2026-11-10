import { CVPage } from "@/components/cv/CVPage";
import { LanguageProvider } from "@/i18n/LanguageContext";

export default function App() {
  return (
    <LanguageProvider>
      <CVPage />
    </LanguageProvider>
  );
}
