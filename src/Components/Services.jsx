function Services() {
  return (
    <section className="services" id="services">

      <h2> Healthcare Services</h2>

      <div className="service-grid">

        <div className="service-card">
          <div className="icon">💊</div>
          <h3>Medicine Delivery</h3>
          <p>
            Get medicines delivered quickly
            at your doorstep.
          </p>
        </div>

        <div className="service-card">
          <div className="icon">🩺</div>
          <h3>Doctor Appointment</h3>
          <p>
            Book appointments with trusted
            doctors and specialists.
          </p>
        </div>

        <div className="service-card">
          <div className="icon">🏥</div>
          <h3>Hospital Guide</h3>
          <p>
            Find the right hospital for your
            healthcare needs.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Services;