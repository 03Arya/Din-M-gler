import '@/components/globals.css'; // Add this line
import "@/style/nav.scss"
import "@/style/hero.scss"
import "@/style/aboutUs.scss"
import "@/style/ad.scss"
import "@/style/footer.scss"
import "@/style/houses.scss"
import "@/style/frontPage.scss"
import "@/style/subscribe.scss"
import "@/style/agentsLimited.scss"
import "@/style/nav.scss"
import "@/style/footer.scss"
import "@/style/houses.scss"
import "@/style/allHomes.scss"
import "@/style/nav.scss"
import "@/style/footer.scss"
import "@/style/propertyDetails.scss"
import RootLayout from '@/components/RootLayout';


// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}