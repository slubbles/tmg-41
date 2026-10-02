/* LAYOUT_FONTS.tsx — copy the imports into app/layout.tsx.
   Apply display.variable + body.variable on <html>. Delete Geist. */
import { Fraunces, Outfit } from "next/font/google";

const display = Fraunces({ subsets: ["latin"], variable: "--font-display" });
const body = Outfit({ subsets: ["latin"], variable: "--font-body" });
export { display, body };
