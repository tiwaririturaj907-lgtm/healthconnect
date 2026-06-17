import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Stats from "../components/Stats";
import HowItWorks from "../components/HowItWorks";
import Hospitals from "../components/Hospitals";
import Testimonials from "../components/Testimonials";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import MedicineForm from "../components/MedicineForm";
import WhatsAppButton from "../components/WhatsAppButton";
import Doctors from "../components/Doctors";
import AppointmentForm from "../components/AppointmentForm";
import HospitalGuideSearch from "../components/HospitalGuideSearch";
import dashboardImg from "../assets/dashboard.png";
function Home() {
  return (
    <>
      <Navbar />

      <div className="hero">
        <div className="left">
          <h1>
            Healthcare
            <span> For Every Family</span>
          </h1>

          <p>
  Book appointments, order medicines,
  connect with verified doctors and
  find the right hospital — all in one place.
</p>

          <div className="buttons">
            <button
  className="primary"
  onClick={() =>
    document
      .getElementById("services")
      ?.scrollIntoView({
        behavior: "smooth",
      })
  }
>
  Get Started
</button>
            <button
  className="secondary"
  onClick={() =>
    document
      .getElementById("doctors")
      ?.scrollIntoView({
        behavior: "smooth",
      })
  }
>
  Learn More
</button>
          </div>
        </div>

        <div className="right">
          <img
  src={dashboardImg}
  alt="Healthcare Dashboard"
  className="hero-doctor"
/>

        <div className="card">🩺 500+ Verified Doctors</div>
        <div className="card">💊 Same Day Medicine Delivery</div>
        <div className="card">🏥 100+ Partner Hospitals</div>

      </div>
      </div>

      <Services />
      <Stats />
      <HowItWorks />
      <Hospitals />
      <Doctors />
      <HospitalGuideSearch />
      <Testimonials />
      <Faq />
      <MedicineForm />
      <AppointmentForm />
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default Home;