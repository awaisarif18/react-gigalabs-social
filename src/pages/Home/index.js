import AboutUs from "./AboutUs";
import { HomeSection } from "./styles";
import Mission from "./OurMission";
import CoreValues from "./CoreValues";
import UpcomingEvents from "./UpcomingEvents";
import CEOMessage from "./CEO'S Message";
import ContactUs from "../Contact";
import { pageAnimation } from "../../Animation/animation";
import Carousel from "./Carousel";

const Home = () => {
  return (
    <HomeSection
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Carousel />
      <AboutUs />
      <Mission />
      <CoreValues />
      <UpcomingEvents />
      <CEOMessage />
      <ContactUs />
    </HomeSection>
  );
};

export default Home;
