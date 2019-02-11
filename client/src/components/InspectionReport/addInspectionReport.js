import React from "react";
import { Link } from "react-router-dom";
import { buildings, floor, zones } from "../building";

class AddInspectionReport extends React.Component {
  render() {
    console.log(buildings);
    return (
      <React.Fragment>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <h4>
                    Add Inspection Report{" "}
                    <span className="sr-only">(current)</span>
                  </h4>
                </li>
              </ul>

              <Link
                className="btn btn-outline-success my-2 my-sm-0"
                to="/register"
              >
                Create Inspection Report
              </Link>
            </div>
          </nav>
          <form>
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">Title</label>
            <input type="text" className="form-control"/>
          </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlSelect1">Project Name</label>
              <select className="form-control" id="exampleFormControlSelect1">
              {buildings.map(({name}, index) => (
                          <option key={index} value={name}>
                            {name}
                          </option>
                        ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlSelect1">Floor Number</label>
              <select className="form-control" id="exampleFormControlSelect1">
              {floor.map(({name}, index) => (
                          <option key={index} value={name}>
                            {name}
                          </option>
                        ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlSelect1">Zone Name</label>
              <select className="form-control" id="exampleFormControlSelect1">
              {zones.map(({name}, index) => (
                          <option key={index} value={name}>
                            {name}
                          </option>
                        ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlFile1">Image</label>
              <input
                type="file"
                className="form-control-file"
                id="exampleFormControlFile1"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">
                Description
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default AddInspectionReport;
