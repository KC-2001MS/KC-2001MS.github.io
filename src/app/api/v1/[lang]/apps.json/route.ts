import { buildAppCatalog, CATALOG_LANGUAGES, type CatalogLanguage } from "@/lib/appCatalog";

// 静的書き出し（output: "export"）で out/api/v1/<lang>/apps.json を生成する
export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
    return CATALOG_LANGUAGES.map((lang) => ({ lang }));
}

export async function GET(_request: Request, { params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    return Response.json(buildAppCatalog(lang as CatalogLanguage));
}
