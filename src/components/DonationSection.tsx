import DonationButtons from "@/components/DonationButtons";
import { Language } from "@/lib/Language";

// 記事の末尾に置く寄付の案内（ブログ・ニュースルーム・Tips）
const DonationSection = ({ lang = Language.Japanese }: { lang?: Language }) => {
    const text = lang === Language.EnglishUS
        ? {
            title: "Contribution",
            body: "If you would like to make a donation, please click here. The money you donate will be used to improve my programming skills and maintain the application.",
        }
        : {
            title: "寄付",
            body: "寄付をご希望の方は、こちらをクリックしてください。ご寄付いただいたお金は、私のプログラミング・スキルの向上とアプリケーションのメンテナンスに使わせていただきます。",
        };

    return (
        <>
            <hr />
            <h2 className="donationTitle">{text.title}</h2>
            <p>{text.body}</p>
            <DonationButtons lang={lang} />
        </>
    );
};

export default DonationSection;
