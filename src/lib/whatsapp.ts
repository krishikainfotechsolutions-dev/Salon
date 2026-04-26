export const WHATSAPP_NUMBER = "919876543210"; // placeholder Indian number
export const PHONE_DISPLAY = "+91 98765 43210";

export function whatsappLink(message = "Hi, I want bridal makeup details") {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}