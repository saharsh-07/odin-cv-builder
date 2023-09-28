import { useState } from "react";

function Experience() {
  const [state, setState] = useState({
    position: "",
    company: "",
    fromDate: "",
    toDate: "",
    description: "",
    editExperience: true,
  });

  const onSubmit = (e) => {
    e.preventDefault();
    const newMode = !state.editExperience;
    setState({
      ...state,
      editExperience: newMode,
    });
  };

  function handleChange(e) {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  }

  if (state.editExperience === true) {
    return (
      <div>
        <form className="professional-experience" onSubmit={onSubmit}>
          <div className="row mb-3">
            <label className="col-sm-3 col-form-label">Position</label>
            <div className="col-sm-9">
              <input
                className="form-control"
                type="text"
                name="position"
                placeholder="Position Title"
                value={state.position}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row mb-3">
            <label className="col-sm-3 col-form-label">Company</label>
            <div className="col-sm-9">
              <input
                className="form-control"
                type="text"
                name="company"
                placeholder="Company Name"
                value={state.company}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row mb-3">
            <label className="col-sm-3 col-form-label">From</label>
            <div className="col-sm-3">
              <input
                className="form-control"
                type="date"
                name="fromDate"
                placeholder="Date"
                value={state.fromDate}
                onChange={handleChange}
              />
            </div>
            <label className="col-sm-3 col-form-label">To</label>
            <div className="col-sm-3">
              <input
                className="form-control"
                type="date"
                name="toDate"
                placeholder="Date"
                value={state.toDate}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row mb-3">
            <label className="col-sm-3 col-form-label">Description</label>
            <div className="col-sm-9">
              <textarea
                className="form-control"
                type="textarea"
                name="description"
                placeholder="Describe the awesome things you do or did there"
                value={state.description}
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
            <label className="col-sm-3 col-form-label">Position</label>
            <p className="col-sm-9">{state.position}</p>
          </div>

          <div className="row-mb-3">
            <label className="col-sm-3 col-form-label">Company</label>
            <p className="col-sm-9">{state.company}</p>
          </div>

          <div className="row-mb-3">
            <label className="col-sm-3 col-form-label">From</label>
            <p className="col-sm-9">{state.fromDate}</p>
            <label className="col-sm-3 col-form-label">To</label>
            <p className="col-sm-9">{state.toDate}</p>
          </div>

          <div className="row-mb-3">
            <label className="col-sm-3 col-form-label">Description</label>
            <p className="col-sm-9">{state.description}</p>
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

export default Experience;
