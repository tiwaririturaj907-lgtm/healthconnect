function HospitalGuideSearch() {
  return (
    <section className="hospital-guide-search">

      <h2>Find The Right Hospital</h2>

      <p>
        Search treatment or disease and get
        hospital guidance.
      </p>

      <div className="search-box">

        <input
          type="text"
          placeholder="Enter Disease / Treatment"
        />

        <button>
          Search
        </button>

      </div>

    </section>
  );
}

export default HospitalGuideSearch;