// 寄付のボタン（Buy Me a Coffee・PayPal・GitHub Sponsors）
// 問い合わせページ（content/*/contact.md）でも同じクラス名のHTMLを使っている
const DonationButtons = () => {
    return (
        <div className="donationButtons">
            <a href="https://www.buymeacoffee.com/iroiro" target="_blank" rel="noopener noreferrer">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" width={217} height={60} />
            </a>
            <a className="paypal" href="https://paypal.me/iroiroWork" target="_blank" rel="noopener noreferrer">Pay by PayPal</a>
            <iframe src="https://github.com/sponsors/KC-2001MS/button" title="Sponsor KC-2001MS" height={32} width={114}></iframe>
        </div>
    );
};

export default DonationButtons;
