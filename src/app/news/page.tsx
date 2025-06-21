import NewsHeroSection from "@/components/news/NewsHeroSection";
import NewsClient from "@/components/news/NewsClient";

export const metadata = {
  title: 'News & Updates | FranklinOne',
  description: 'Stay updated with the latest news, announcements, partnerships, and achievements from FranklinOne.',
};

export default function NewsPage() {
  return (
    <main>
      <NewsHeroSection />
      <NewsClient />
    </main>
  );
}