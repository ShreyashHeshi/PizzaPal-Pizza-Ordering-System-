function Footer() {
  return (
    <>
      <div
        style={{
          height: 50,
          textAlign: "center",
          border: "1px solid",
          backgroundColor: "gray",
        }}
        className="card-header bg-light "
      >
        <a href="/About" className="fw-bold text-body">
          <u>About Pizza </u>
        </a>
        <div className="fw-bold text-body">
          <span className="large">Open from 10am to 12pm</span>
        </div>
      </div>
    </>
  );
}

export default Footer;
