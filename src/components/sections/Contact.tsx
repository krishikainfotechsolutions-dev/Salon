import { useState } from "react";
import { z } from "zod";
import SectionHeading from "./SectionHeading";
import { whatsappLink, PHONE_DISPLAY, WHATSAPP_NUMBER, INSTAGRAM_URL, INSTAGRAM_HANDLE } from "@/lib/whatsapp";
import { MapPin, Phone, MessageCircle, Instagram } from "lucide-react";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  weddingDate: z.string().min(1, "Please pick a date"),
  location: z.string().trim().min(2, "Please enter a location").max(80),
  phone: z.string().trim().regex(/^[+\d][\d\s-]{7,15}$/, "Please enter a valid phone number"),
});

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") || ""),
      weddingDate: String(fd.get("weddingDate") || ""),
      location: String(fd.get("location") || ""),
      phone: String(fd.get("phone") || ""),
    };
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const first = parsed.error.issues[0]?.message || "Please check the form";
      toast.error(first);
      return;
    }
    setSubmitting(true);
    const msg = `Hi! I'd like to enquire about bridal makeup.\n\nName: ${parsed.data.name}\nWedding Date: ${parsed.data.weddingDate}\nLocation: ${parsed.data.location}\nPhone: ${parsed.data.phone}`;
    window.open(whatsappLink(msg), "_blank", "noopener");
    setTimeout(() => setSubmitting(false), 600);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-gradient-blush">
      <div className="container">
        <SectionHeading
          eyebrow="Book Your Date"
          title={<>Let's craft your <em className="text-gold-gradient not-italic">forever look</em></>}
          subtitle="Send us a quick enquiry on WhatsApp — we usually reply within an hour."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <form onSubmit={handleSubmit} className="rounded-3xl bg-card p-7 md:p-8 shadow-luxe border border-border animate-fade-in-up">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label className="text-sm font-medium text-wine">Your Name</label>
                <input name="name" required className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent" placeholder="Ananya Sharma" />
              </div>
              <div>
                <label className="text-sm font-medium text-wine">Wedding Date</label>
                <input type="date" name="weddingDate" required className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
              </div>
              <div>
                <label className="text-sm font-medium text-wine">Location</label>
                <input name="location" required className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent" placeholder="Mumbai" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm font-medium text-wine">Phone Number</label>
                <input type="tel" name="phone" required className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent" placeholder="+91 98765 43210" />
              </div>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-whatsapp text-whatsapp-foreground px-7 py-4 font-semibold shadow-luxe hover:scale-[1.01] transition-transform disabled:opacity-70"
            >
              <MessageCircle className="h-5 w-5" />
              Send Enquiry on WhatsApp
            </button>
            <p className="mt-3 text-xs text-center text-muted-foreground">We respect your privacy. Details are sent directly via WhatsApp.</p>
          </form>

          <div className="space-y-4 animate-fade-in-up [animation-delay:120ms]">
            <div className="rounded-3xl bg-card p-6 shadow-soft border border-border">
              <h3 className="font-serif text-2xl text-wine">Visit our studio</h3>
              <ul className="mt-5 space-y-4 text-sm">
                <li className="flex gap-3">
                  <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-foreground">Maheshwari Makeover,<br />Uma Charan Market, 128/98 B,<br />beside Astha Guest House, D Block,<br />Kidwai Nagar, Kanpur, UP 208011</span>
                </li>
                <li className="flex gap-3">
                  <Phone className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <a href={`tel:+${WHATSAPP_NUMBER}`} className="text-foreground hover:text-accent">{PHONE_DISPLAY}</a>
                </li>
                <li className="flex gap-3">
                  <Instagram className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-accent">{INSTAGRAM_HANDLE}</a>
                </li>
              </ul>
            </div>

            <div className="overflow-hidden rounded-3xl shadow-soft border border-border">
              <iframe
                title="Studio location"
                src="https://www.google.com/maps?q=Uma+Charan+Market+Kidwai+Nagar+Kanpur+208011&output=embed"
                width="100%"
                height="280"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;