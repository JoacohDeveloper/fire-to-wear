import { NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Jaldi } from "next/font/google";
import Header from "@/app/components/header";
import "@/app/globals.css"
const jaldi = Jaldi({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export async function generateMetadata({ params: { locale} } : any) {
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: `Firetowear | ${t("title_rich")}`,
    description: t("description"),
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: Promise<string> };
}) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    return notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  setRequestLocale(await locale);
  const messages = await getMessages();

  return (
    <html lang={await locale}>
      <body className={`${jaldi.className}`}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
