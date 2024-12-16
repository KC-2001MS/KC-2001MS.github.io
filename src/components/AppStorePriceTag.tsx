import { Language } from "@/lib/Language";

interface AppStorePriceTagProps {
  lang?: Language,
  id: number;
}


export default async function AppStorePriceTag({ lang = Language.Japanese, id }: AppStorePriceTagProps) {
  const appPrice = await fetchPriceByIdAndLang(await id,await lang);

  switch (lang) {
    case Language.Japanese:
      return (
        <p className="right">
          価格：
          <span className="plice">
            {appPrice}
          </span>
          （税込）
        </p>
      );
    case Language.EnglishUS:
      return (
        <p className="right">
          Plice：
          <span className="plice">
          {appPrice}
          </span>
        </p>
      );
  }
};

async function fetchPriceByIdAndLang(id: number, lang?: Language): Promise<string> {
    const apiBaseURL = "https://itunes.apple.com/lookup?";
    const country = lang === Language.EnglishUS ? "us" : "jp";
    const apiEndpoint = `${apiBaseURL}id=${id}&country=${country}`;
  
    try {
      const response = await fetch(apiEndpoint);
      const data = await response.json();
      if (data.results && data.results[0]) {
        return data.results[0].formattedPrice || "Free";
      } else {
        return "App not found";
      }
    } catch (err) {
      console.error(`Error fetching price for id ${id}:`, err);
      return "Error fetching price";
    }
  }