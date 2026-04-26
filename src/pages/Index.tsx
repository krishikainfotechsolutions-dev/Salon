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
    name: "Maheshwari Makeover",
    image: "/og-image.jpg",
    description: "HD & Airbrush bridal makeup by certified experts in Kanpur, India.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Uma Charan Market, 128/98 B, beside Astha Guest House, D Block, Kidwai Nagar",
      addressLocality: "Kanpur",
      addressRegion: "Uttar Pradesh",
      postalCode: "208011",
      addressCountry: "IN",
    },
    telephone: "+91 74288 63727",
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
