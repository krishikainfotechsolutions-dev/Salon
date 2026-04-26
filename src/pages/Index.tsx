import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Gallery from "@/components/sections/Gallery";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Packages from "@/components/sections/Packages";
import Testimonials from "@/components/sections/Testimonials";
import About from "@/components/sections/About";
import Offers from "@/components/sections/Offers";
import Instagram from "@/components/sections/Instagram";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: "Radiance Bridal Studio",
    image: "/og-image.jpg",
    description: "HD & Airbrush bridal makeup by certified experts in India.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Linking Road, Bandra West",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      postalCode: "400050",
      addressCountry: "IN",
    },
    telephone: "+91 98765 43210",
    priceRange: "₹₹₹",
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "500" },
  };

  return (
    <main className="bg-background text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <WhyChooseUs />
      <Packages />
      <Testimonials />
      <About />
      <Offers />
      <Instagram />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
};

export default Index;
