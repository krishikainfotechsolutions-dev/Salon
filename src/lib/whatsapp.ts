export const WHATSAPP_NUMBER = "917428863727";
export const PHONE_DISPLAY = "+91 74288 63727";
export const INSTAGRAM_URL = "https://www.instagram.com/maheshwari_makeover_";
export const INSTAGRAM_HANDLE = "@maheshwari_makeover_";
export const BRAND_NAME = "Maheshwari Makeover";
export const STUDIO_ADDRESS_LINES = [
  "Uma Charan Market, 128/98 B,",
  "beside Astha Guest House, D Block,",
  "Kidwai Nagar, Kanpur, UP 208011",
];

export function whatsappLink(message = "Hi, I want bridal makeup details") {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}