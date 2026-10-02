import Link from 'next/link'
import { Language } from "@/lib/Language";

const Header = ({ lang = Language.Japanese }) => {
      switch (lang) {
            case Language.Japanese:
                  return (
                        <header id="header">
                              <Link className="header" href="/">
                                    <h1 className="header">いろいろポートフォリオ</h1>
                              </Link>
                              <ul className="tabContainaer landscape-only">
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
                                          <Link className="header" href="/blog">
                                          ブログ
                                          </Link>
                                    </li>
                                    <li className="tab underline">
                                          <Link className="header" href="/newsroom">
                                          ニュースルーム
                                          </Link>
                                    </li>
                                    <li className="tab underline">
                                          <Link className="header" href="/contact">
                                                問い合わせ
                                          </Link>
                                    </li>
                              </ul>
                              <ul className="tabContainaer portrait-only">
                                    <li className="tab underline">
                                          <Link className="header" href="/">
                                          <span className="material-symbols-outlined">home</span>
                                          <span className="iconLabel">ホーム</span>
                                          </Link>
                                    </li>
                                    <li className="tab underline">
                                          <Link className="header" href="/product">
                                          <span className="material-symbols-outlined">apps</span>
                                          <span className="iconLabel">コンテンツ</span>
                                          </Link>
                                    </li>
                                    <li className="tab underline">
                                          <Link className="header" href="/blog">
                                          <span className="material-symbols-outlined">article</span>
                                          <span className="iconLabel">ブログ</span>
                                          </Link>
                                    </li>
                                    <li className="tab underline">
                                          <Link className="header" href="/newsroom">
                                          <span className="material-symbols-outlined">newspaper</span>
                                          <span className="iconLabel">ニュースルーム</span>
                                          </Link>
                                    </li>
                                    <li className="tab underline">
                                          <Link className="header" href="/contact">
                                          <span className="material-symbols-outlined">contact_page</span>
                                          <span className="iconLabel">問い合わせ</span>
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
                              <ul className="tabContainaer landscape-only">
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
                                          <Link className="header" href="/en/blog">
                                                Blog
                                          </Link>
                                    </li>
                                    <li className="tab underline">
                                          <Link className="header" href="/en/newsroom">
                                                Newsroom
                                          </Link>
                                    </li>
                                    <li className="tab underline">
                                          <Link className="header" href="/en/contact">
                                                Contact
                                          </Link>
                                    </li>
                              </ul>
                              <ul className="tabContainaer portrait-only">
                                    <li className="tab underline">
                                          <Link className="header" href="/en/">
                                          <span className="material-symbols-outlined">home</span>
                                          <span className="iconLabel">Home</span>
                                          </Link>
                                    </li>
                                    <li className="tab underline">
                                          <Link className="header" href="/en/product">
                                          <span className="material-symbols-outlined">apps</span>
                                          <span className="iconLabel">Contents</span>
                                          </Link>
                                    </li>
                                    <li className="tab underline">
                                          <Link className="header" href="/en/blog">
                                          <span className="material-symbols-outlined">article</span>
                                          <span className="iconLabel">Blog</span>
                                          </Link>
                                    </li>
                                    <li className="tab underline">
                                          <Link className="header" href="/en/newsroom">
                                          <span className="material-symbols-outlined">newspaper</span>
                                          <span className="iconLabel">Newsroom</span>
                                          </Link>
                                    </li>
                                    <li className="tab underline">
                                          <Link className="header" href="/en/contact">
                                          <span className="material-symbols-outlined">contact_page</span>
                                          <span className="iconLabel">Contact</span>
                                          </Link>
                                    </li>
                              </ul>
                        </header>
                  );
      }
};

export default Header;