import React from "react";
import { Link } from "react-router-dom";

class InspectionReport extends React.Component {

  componentDidMount() {
    this.props.getInspectionReport()
  }

  render() {
    const { reports } = this.props;
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
                    Inspection Report <span className="sr-only">(current)</span>
                </h4>
                </li>
              </ul>

              <Link
                className="btn btn-outline-success my-2 my-sm-0"
                to="/AddInspectionReport"
              >
                Create Inspection Report
              </Link>
            </div>
          </nav>
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Title</th>
                  <th scope="col">Project Name</th>
                  <th scope="col">Floor Number</th>
                  <th scope="col">Zone Name</th>
                  <th scope="col">Description</th>
                  <th scope="col">Status</th>
                  <th scope="col">Date</th>
                </tr>
              </thead>
              <tbody>
              {reports.map((report, index) =>
                <tr>
                  <th scope="row">{index+1}</th>
                  <td>{report.title}</td>
                  <td>{report.project_name}</td>
                  <td>{report.floor}</td>
                  <td>{report.zone}</td>
                  <td>{report.description}</td>
                  <td>{report.status}</td>
                  <td>{report.created_at}</td>
                </tr>
              )}
              </tbody>
            </table>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default InspectionReport;
