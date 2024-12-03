import { Language } from "@/lib/Language";

interface AppPriceProps {
  lang?: Language,
  id: number;
  prices: { id: number; price: string }[];
}

const AppPrice: React.FC<AppPriceProps> = ({ lang = Language.Japanese, id, prices }) => {
  const appPrice = prices.find((app) => app.id === id);
  switch (lang) {
    case Language.Japanese:
      return (
        <p className="right">
          価格：
          <span className="plice">
            {appPrice ? appPrice.price : "App not found"}
          </span>
          （税込）
        </p>
      );
    case Language.EnglishUS:
      return (
        <p className="right">
          Plice：
          <span className="plice">
            {appPrice ? appPrice.price : "App not found"}
          </span>
        </p>
      );
  }
};

export default AppPrice;