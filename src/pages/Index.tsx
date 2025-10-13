import Hero from "@/components/Hero";
import BookSection from "@/components/BookSection";
import WhereToBuy from "@/components/WhereToBuy";
import WhatYouLearn from "@/components/WhatYouLearn";
import Testimonials from "@/components/Testimonials";
import AboutAuthor from "@/components/AboutAuthor";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <BookSection />
      <WhereToBuy />
      <WhatYouLearn />
      <Testimonials />
      <AboutAuthor />
      <FinalCTA />
    </div>
  );
};

export default Index;
