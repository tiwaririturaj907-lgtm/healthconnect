function Doctors() {
  const doctors = [
    {
      name: "Dr. Rajeshswari Sharma",
      speciality: "Cardiologist",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500",
    },
    {
      name: "Dr. Priya Singh",
      speciality: "Neurologist",
      image:
        "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Dr. Amita Verma",
      speciality: "Orthopedic Surgeon",
      image:
        "https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <section className="doctors" id="doctors">
      <h2>Top Specialists</h2>

      <div className="doctor-grid">
        {doctors.map((doctor, index) => (
          <div className="doctor-card" key={index}>
            <img src={doctor.image} alt={doctor.name} />

            <div className="doctor-info">
              <h3>{doctor.name}</h3>
              <p>{doctor.speciality}</p>

              <div className="rating">
               ⭐ 4.8 Rating
              </div>

            <div className="experience">
  🩺 8+ Years Experience
</div>
            <button
  className="doctor-btn"
  onClick={() =>
    document
      .getElementById("appointment")
      ?.scrollIntoView({ behavior: "smooth" })
  }
>
  Book Appointment
</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Doctors;