import { useState } from "react";

function Education() {
  const [state, setState] = useState({
    schoolName: "",
    degreeName: "",
    graduationDate: "",
    editEducation: true,
  });

  const onSubmit = (e) => {
    e.preventDefault();
    const newMode = !state.editEducation;
    setState({
      ...state,
      editEducation: newMode,
    });
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  if (state.editEducation === true) {
    return (
      <div>
        <form className="general-info" onSubmit={onSubmit}>
          <div className="row mb-3">
            <label className="col-sm-3 col-form-label">School Name</label>
            <div className="col-sm-9">
              <input
                className="form-control"
                type="text"
                name="schoolName"
                placeholder="School or Organisation name"
                value={state.schoolName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row mb-3">
            <label className="col-sm-3 col-form-label">
              Degree&apos;s Name
            </label>
            <div className="col-sm-9">
              <input
                className="form-control"
                type="text"
                name="degreeName"
                placeholder="Specialty and type of degree"
                value={state.degreeName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row mb-3">
            <label className="col-sm-3 col-form-label">Graduation Date</label>
            <div className="col-sm-9">
              <input
                className="form-control"
                type="month"
                name="graduationDate"
                placeholder="Date"
                value={state.graduationDate}
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
            <label className="col-sm-3 col-form-label">School Name</label>
            <p className="col-sm-9">{state.schoolName}</p>
          </div>

          <div className="row-mb-3">
            <label className="col-sm-3 col-form-label">
              Degree&apos;s Name
            </label>
            <p className="col-sm-9">{state.degreeName}</p>
          </div>

          <div className="row-mb-3">
            <label className="col-sm-3 col-form-label">Graduation Date</label>
            <p className="col-sm-9">{state.graduationDate}</p>
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

export default Education;
