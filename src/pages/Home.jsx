import Navbar from "../Components/Navbar";
import Services from "../Components/Services";
import Stats from "../Components/Stats";
import HowItWorks from "../Components/HowItWorks";
import Hospitals from "../Components/Hospitals";
import Testimonials from "../Components/Testimonials";
import Faq from "../Components/Faq";
import Footer from "../Components/Footer";
import MedicineForm from "../Components/MedicineForm";
import WhatsAppButton from "../Components/WhatsAppButton";
import Doctors from "../Components/Doctors";
import AppointmentForm from "../Components/AppointmentForm";
import HospitalGuideSearch from "../Components/HospitalGuideSearch";
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