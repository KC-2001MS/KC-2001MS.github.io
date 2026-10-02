import { Language } from "@/lib/Language";

// 寄付のボタン（Buy Me a Coffee・PayPal・GitHub Sponsors）
// 寄付の案内（DonationSection）の中で使う
const DonationButtons = ({ lang = Language.Japanese }: { lang?: Language }) => {
    // 新しいタブで開くことを、スクリーンリーダーにだけ伝える
    const newTab = lang === Language.EnglishUS ? " (opens in a new tab)" : "（新しいタブで開きます）";
    return (
        <div className="donationButtons">
            <a href="https://www.buymeacoffee.com/iroiro" target="_blank" rel="noopener noreferrer">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" width={217} height={60} loading="lazy" />
                <span className="visuallyHidden">{newTab}</span>
            </a>
            <a className="paypal" href="https://paypal.me/iroiroWork" target="_blank" rel="noopener noreferrer">Pay by PayPal<span className="visuallyHidden">{newTab}</span></a>
            <iframe data-src="https://github.com/sponsors/KC-2001MS/button" title="Sponsor KC-2001MS" height={32} width={114}></iframe>
        </div>
    );
};

export default DonationButtons;
