import React from "react";
import { Link } from "react-router-dom";
import { buildings, floor, zones } from "../building";

class AddInspectionReport extends React.Component {

  constructor(props) {
    super(props);
    this.title = React.createRef();
    this.project_name = React.createRef();
    this.floor = React.createRef();
    this.zone = React.createRef();
    this.description = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(e) {
    const title = this.title.current.value;
    const project_name = this.project_name.current.value;
    const floor = this.floor.current.value;
    const zone = this.zone.current.value;
    const description = this.description.current.value;
    const status = 'Opened';
    await this.props.addInspectionReport({ title, project_name, floor, zone, description, status });
  }

  render() {
    console.log(this.props.addInspection);
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
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">Title</label>
            <input type="text" className="form-control" ref={this.title}/>
          </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlSelect1">Project Name</label>
              <select className="form-control" ref={this.project_name}>
              {buildings.map(({name}, index) => (
                          <option key={index} value={name}>
                            {name}
                          </option>
                        ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlSelect1">Floor Number</label>
              <select className="form-control" name="floor" ref={this.floor}>
              {floor.map(({name}, index) => (
                          <option key={index} value={name}>
                            {name}
                          </option>
                        ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlSelect1">Zone Name</label>
              <select className="form-control" name="zone" ref={this.zone}>
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
              <label>
                Description
              </label>
              <textarea
                className="form-control"
                name="description"
                rows="3"
                ref={this.description}
              />
            </div>
            <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
        </div>
      </React.Fragment>
    );
  }
}

export default AddInspectionReport;
