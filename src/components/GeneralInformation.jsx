import  { useState } from "react";

function GeneralInformation() {
  const [state, setState] = useState({
    fullName: "",
    email: "",
    phone: "",
    linkedIn: "",
    github: "",
    editGeneralInfo: true,
  });

  const onSubmit = (e) => {
    e.preventDefault();
    const newMode = !state.editGeneralInfo;
    setState({
      ...state,
      editGeneralInfo: newMode,
    });
  };

  function handleChange(e) {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  }

  if (state.editGeneralInfo === true) {
    return (
      <div>
        <form className="general-info" onSubmit={onSubmit}>
          <div className="row mb-3">
            <label className="col-sm-3 col-form-label">Full Name</label>
            <div className="col-sm-9">
              <input
                className="form-control"
                type="text"
                name="fullName"
                placeholder="First Last"
                value={state.fullName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row mb-3">
            <label className="col-sm-3 col-form-label">Email</label>
            <div className="col-sm-9">
              <input
                className="form-control"
                type="text"
                name="email"
                placeholder="your@email.com"
                value={state.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row mb-3">
            <label className="col-sm-3 col-form-label">Phone Number</label>
            <div className="col-sm-9">
              <input
                className="form-control"
                type="text"
                name="phone"
                placeholder="XXX-XXX-XXXX"
                value={state.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row mb-3">
            <label className="col-sm-3 col-form-label">LinkedIn Profile</label>
            <div className="col-sm-9">
              <input
                className="form-control"
                type="text"
                name="linkedIn"
                placeholder="linkedin.com/<your-name>"
                value={state.linkedIn}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row mb-3">
            <label className="col-sm-3 col-form-label">Github Profile</label>
            <div className="col-sm-9">
              <input
                className="form-control"
                type="text"
                name="github"
                placeholder="github.com/<your-name>"
                value={state.github}
                onChange={handleChange}
              />
            </div>
          </div>

          <input type="submit" className="btn btn-outline-primary float-end" />
        </form>
      </div>
    );
  } else {
    return (
      <div>
        <form>
          <div className="row-mb-3">
            <label className="col-sm-3 col-form-label">Full Name</label>
            <p className="col-sm-9">{state.fullName}</p>
          </div>

          <div className="row-mb-3">
            <label className="col-sm-3 col-form-label">Email</label>
            <p className="col-sm-9">{state.email}</p>
          </div>

          <div className="row-mb-3">
            <label className="col-sm-3 col-form-label">Phone Number</label>
            <p className="col-sm-9">{state.phone}</p>
          </div>

          <div className="row-mb-3">
            <label className="col-sm-3 col-form-label">LinkedIn Profile</label>
            <p className="col-sm-9">{state.linkedIn}</p>
          </div>

          <div className="row-mb-3">
            <label className="col-sm-3 col-form-label">Github Profile</label>
            <p className="col-sm-9">{state.github}</p>
          </div>
          <button
            onClick={onSubmit}
            className="btn btn-outline-secondary float-end"
          >
            Edit
          </button>
        </form>
      </div>
    );
  }
}

export default GeneralInformation;
