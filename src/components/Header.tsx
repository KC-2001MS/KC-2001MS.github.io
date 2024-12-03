import Link from 'next/link'
import { Language } from "@/lib/Language";
import "@styles/var.css";
import "@styles/foundation.css";

const Header = ({ lang = Language.Japanese }) => {
      switch (lang) {
            case Language.Japanese:
                  return (
                        <header id="header">
                              <Link className="header" href="/">
                                    <h1 className="header">いろいろポートフォリオ</h1>
                              </Link>
                              <ul className="tabContainaer">
                                    <li className="tab underline">
                                          <Link className="header" href="/">
                                                ホーム
                                          </Link>
                                    </li>
                                    <li className="tab underline">
                                          <Link className="header" href="/product">
                                                コンテンツ
                                          </Link>
                                    </li>
                                    <li className="tab underline">
                                          <Link className="header" href="/contact">
                                                問い合わせ
                                          </Link>
                                    </li>
                              </ul>
                        </header>
                  );
            case Language.EnglishUS:
                  return (
                        <header id="header">
                              <Link className="header" href="/en/">
                                    <h1 className="header">Iroiro&apos;s portfolio</h1>
                              </Link>
                              <ul className="tabContainaer">
                                    <li className="tab underline">
                                          <Link className="header" href="/en/">
                                                Home
                                          </Link>
                                    </li>
                                    <li className="tab underline">
                                          <Link className="header" href="/en/product">
                                                Contents
                                          </Link>
                                    </li>
                                    <li className="tab underline">
                                          <Link className="header" href="/en/contact">
                                                Contact
                                          </Link>
                                    </li>
                              </ul>
                        </header>
                  );
      }
};

export default Header;