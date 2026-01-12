import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";

interface HelpArticleProps {
  title: string;
  category: string;
  children: React.ReactNode;
}

const HelpArticle = ({ title, category, children }: HelpArticleProps) => {
  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0 overflow-x-hidden">
      <Header />

      <main className="max-w-[800px] mx-auto px-4 sm:px-6 md:px-10 py-6 md:py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground mb-4 md:mb-6">
          <Link to="/help" className="hover:text-foreground smooth-transition">Help Center</Link>
          <span>/</span>
          <span>{category}</span>
        </div>

        {/* Back Link */}
        <Link to="/help" className="inline-flex items-center gap-2 text-sm font-medium mb-4 md:mb-6 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back to Help Center
        </Link>

        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6">{title}</h1>

        <div className="prose prose-sm sm:prose max-w-none">
          {children}
        </div>
      </main>

      <Footer />
      <MobileNav />
    </div>
  );
};

export default HelpArticle;
