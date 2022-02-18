import Head  from "next/head";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { AboutUs } from "../components/Home/AboutUs";
import { Contact } from "../components/Home/Contact";
import { ContactUsCard } from "../components/Home/ContactUsCard";
import { FirstSection } from "../components/Home/FirstSection";
import { MoreInfo } from "../components/Home/MoreInfo";
import { Product } from "../components/Home/Product";

import s from "../styles/home.module.scss";

export default function Home() {
  return (
    <div className={s.container}>
      <Head>
        <title>Gordura de Palma Du Pará</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-PNB575L6FB"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-PNB575L6FB');
</script>
      </Head>
      <Header />
      <FirstSection />
      <ContactUsCard />
      <div className={s.aboutAndProduct}>
        <AboutUs />
        <Product />
      </div>
      <div className={s.moreInfoAndContact}>
        <MoreInfo />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
