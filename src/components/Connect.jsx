const Connect = () => {
  return (
    <div
      id="connect"
      className="emailContainer container w-75"
      style={{
        backgroundColor: "white",
        borderRadius: 40,
        height: 200,
      }}
    >
      <div className="d-flex justify-content-center align-items-center gap-5 container p-5 h-100">
        <div className="text-center">
          <h2 className="fw-bolder">Let&apos;s Connect</h2>
          <span className="text-muted" style={{ fontSize: 15 }}>
            Leave here your E-mail Address
          </span>
        </div>
        <div className="input-group w-50">
          <input
            type="text"
            className="form-control"
            placeholder="Email Address"
            aria-label="Email Address"
            aria-describedby="basic-addon2"
          />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
