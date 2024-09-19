
import { Hero } from "./components/hero/hero";
import { InNumbers } from "./components/numbers/numbers";
import { Testimonials } from "./components/testimonials/testimonials";
import { PhotosSection } from "./components/photos-sections/photos-section";
import { Faqs } from "./components/faqs/faqs";
import { SecondHero } from "./components/second-section/second-hero";
import { Partners } from "./components/partners/partners";
import { ImageGallery } from "./components/galery/galery";



export default function HomePage() {
  return (
    <>
      <head>
        <title>Pagina Inicial | Ngola Homecare</title>
        <meta name="description" content="" />
        <meta name="google-adsense-account" content="ca-pub-1921695646246423" />
        <meta name="description" content="Descubra como a Ngola Homecare oferece cuidados médicos domiciliares de alta qualidade em Angola. Conheça nossa missão, visão e os serviços especializados que proporcionamos para o bem-estar dos nossos pacientes no conforto de suas casas." />
        <meta
          name="keywords"
          content="cuidados domiciliares, cuidados em casa, home care, 
             serviços de saúde em casa, assistência a idosos, cuidados de enfermagem, 
             cuidados paliativos, reabilitação domiciliar, cuidadores de idosos, 
             fisioterapia em casa, serviços de saúde ao domicílio, cuidados pós-operatórios, 
             cuidados de saúde Angola, enfermeiros domiciliares, atendimento de saúde domiciliar, Ngola Homecare"
        />
      </head>
      <Hero />
      <br />
      <br />
      <br />
      <InNumbers />
      <br />
      <br /><br /><br />

      {/* Section with grid layout */}
      <div className="flex flex-col gap-10 px-4">
        <PhotosSection />
        <Testimonials />
      </div>
      <br />
      <SecondHero />
      <br />
      <Partners />
      <br />
      <br />
      <ImageGallery />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Faqs />
      <br />
      <br />
      <br />

    </>
  );
}
