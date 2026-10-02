"use client";

import Link from 'next/link'
import { usePathname } from "next/navigation";
import { Language } from "@/lib/Language";

type MenuItem = { href: string; icon: string; label: string };

const menus: Record<Language, { home: string; title: string; nav: string; items: MenuItem[] }> = {
      [Language.Japanese]: {
            home: "/",
            title: "いろいろポートフォリオ",
            nav: "メインメニュー",
            items: [
                  { href: "/", icon: "home", label: "ホーム" },
                  { href: "/product", icon: "apps", label: "コンテンツ" },
                  { href: "/blog", icon: "article", label: "ブログ" },
                  { href: "/newsroom", icon: "newspaper", label: "ニュースルーム" },
                  { href: "/contact", icon: "contact_page", label: "問い合わせ" },
            ],
      },
      [Language.EnglishUS]: {
            home: "/en/",
            title: "Iroiro's portfolio",
            nav: "Main menu",
            items: [
                  { href: "/en/", icon: "home", label: "Home" },
                  { href: "/en/product", icon: "apps", label: "Contents" },
                  { href: "/en/blog", icon: "article", label: "Blog" },
                  { href: "/en/newsroom", icon: "newspaper", label: "Newsroom" },
                  { href: "/en/contact", icon: "contact_page", label: "Contact" },
            ],
      },
};

// 今いるページのメニューかどうか（スクリーンリーダーに「現在のページ」と伝えるため）
const isCurrent = (pathname: string, href: string) => {
      const path = pathname.replace(/\/$/, "") || "/";
      const target = href.replace(/\/$/, "") || "/";
      if (target === "/" || target === "/en") return path === target;
      return path === target || path.startsWith(target + "/");
};

const Header = ({ lang = Language.Japanese }: { lang?: Language }) => {
      const pathname = usePathname() ?? "/";
      const menu = menus[lang];

      return (
            <header id="header">
                  <Link className="header" href={menu.home}>
                        {/* ページごとの見出し（h1）と重ならないよう、サイト名は見出しにしない（見た目はh1と同じ） */}
                        <p className="header siteTitle">{menu.title}</p>
                  </Link>
                  <nav aria-label={menu.nav}>
                        <ul className="tabContainaer landscape-only">
                              {menu.items.map((item) => (
                                    <li key={item.href} className="tab underline">
                                          <Link className="header" href={item.href} aria-current={isCurrent(pathname, item.href) ? "page" : undefined}>
                                                {item.label}
                                          </Link>
                                    </li>
                              ))}
                        </ul>
                        <ul className="tabContainaer portrait-only">
                              {menu.items.map((item) => (
                                    <li key={item.href} className="tab underline">
                                          <Link className="header" href={item.href} aria-current={isCurrent(pathname, item.href) ? "page" : undefined}>
                                                <span className="material-symbols-outlined" aria-hidden="true">{item.icon}</span>
                                                <span className="iconLabel">{item.label}</span>
                                          </Link>
                                    </li>
                              ))}
                        </ul>
                  </nav>
            </header>
      );
};

export default Header;
