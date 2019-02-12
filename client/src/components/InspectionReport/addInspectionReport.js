import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { buildings, floor, zones } from "../building";

class AddInspectionReport extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
            file: null
        };
    this.title = React.createRef();
    this.project_name = React.createRef();
    this.floor = React.createRef();
    this.zone = React.createRef();
    this.description = React.createRef();
    this.myImage = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
        this.setState({file:e.target.files[0]});
    }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (!nextProps.addInspection.message) {
      this.props.history.push("/InspectionReport");
    }else{
      return false;
    }
  }

  async handleSubmit(e) {
    const formData = new FormData();
    formData.append('myImage',this.state.file);
    formData.append('name','myImage');
    formData.append('title',this.title.current.value);
    formData.append('project_name',this.project_name.current.value);
    formData.append('floor',this.floor.current.value);
    formData.append('zone',this.zone.current.value);
    formData.append('description',this.description.current.value);
    formData.append('status','Opened');
    await this.props.addInspectionReport(formData);
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12"></div>
            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12 add_inception_report_box">
              <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
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
                    to="/InspectionReport"
                  >
                    Back
                  </Link>
                </div>
              </nav>
              {this.props.addInspection.message &&
              <div className="alert alert-danger" role="alert">
                <strong>{this.props.addInspection.message}</strong>
              </div>}
              <div className="form-group">
                <label htmlFor="exampleFormControlSelect1">Title</label>
                <input type="text" className= "add_inspection_field form-control" placeholder="Title" ref={this.title}/>
              </div>
                <div className="form-group">
                  <label htmlFor="exampleFormControlSelect1">Project Name</label>
                  <select className="form-control" ref={this.project_name}>
                  <option value="">Select Project</option>
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
                  <option value="">Select Floor</option>
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
                  <option value="">Select Zone</option>
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
                    name="myImage"
                    onChange={(e) => this.setState({ file: e.target.files[0]})}
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
                    placeholder="Description"
                    ref={this.description}
                  />
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
              </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AddInspectionReport;
