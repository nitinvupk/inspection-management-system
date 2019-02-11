import React from "react";
import { Link } from "react-router-dom";
import CommentModal from "../commentModal";
import CommentList from "../commentList";

class InspectionReport extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reportId: "",
      showList: false,
      userRole: window.localStorage.getItem('role')
    };
    this.msg = React.createRef();
    this.user = React.createRef();
    this.handleComment = this.handleComment.bind(this);
    this.handleShowComment = this.handleShowComment.bind(this);
    this.handleShowList = this.handleShowList.bind(this);
    this.handleStatus = this.handleStatus.bind(this);
  }

  handleComment() {
    const body = this.msg.current.value;
    const report_id = this.state.reportId;
    const user = this.user.current.value;
    this.props.addComment({ body, report_id, user });
  }

  handleShowComment(reportId) {
    this.props.getComments(reportId);
    this.setState({ showList: true });
  }

  handleShowList() {
    this.setState({ showList: false });
  }

  componentDidMount() {
    this.props.getInspectionReport();
  }

  handleStatus(e, reportId) {
    const status = e.target.value;
    this.props.updateStatus({status, reportId })
  }

  render() {
    const { reports, comments } = this.props;
    return (
      <React.Fragment>
        <div className="container">
        {!this.state.showList ? ( <React.Fragment><nav className="navbar navbar-expand-lg navbar-light bg-light">
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

              {this.state.userRole === 'Safety Officer' && <Link
                className="btn btn-outline-success my-2 my-sm-0"
                to="/AddInspectionReport"
              >
                Create Inspection Report
              </Link>}



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
                    <th scope="col">Action</th>
                    <th scope="col">Comment View</th>
                    {(this.state.userRole === 'Safety Manager' || this.state.userRole === 'Safety Engineer') &&  <th> Assign Status </th>}
                  </tr>
                </thead>
                <tbody>
                  {reports.map((report, index) => (
                    <React.Fragment>
                      <tr>
                        <th scope="row">{index + 1}</th>
                        <td>{report.title}</td>
                        <td>{report.project_name}</td>
                        <td>{report.floor}</td>
                        <td>{report.zone}</td>
                        <td>{report.description}</td>
                        <td>{report.status}</td>
                        <td>{report.created_at}</td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-primary"
                            data-toggle="modal"
                            data-target="#exampleModal"
                            onClick={() =>
                              this.setState({ reportId: report._id })
                            }
                          >
                            Comment
                          </button>
                        </td>
                        <td>
                          <a
                            className="btn btn-primary"
                            data-toggle="collapse"
                            href="#multiCollapseExample1"
                            role="button"
                            aria-expanded="false"
                            aria-controls="multiCollapseExample1"
                            onClick={() => this.handleShowComment(report._id)}
                          >
                            View
                          </a>
                        </td>
                        <td>
                        {(this.state.userRole === 'Safety Manager' || this.state.userRole === 'Safety Engineer')  &&

                          <select className="form-control" onChange={(e) => this.handleStatus(e,report._id)}>
                          <option>Select Option</option>
                          {this.state.userRole === 'Safety Manager' &&
                          <React.Fragment>
                           <option>Completed</option>
                           <option>Re-assigned to Officer</option>
                           <option>Assigned to Engineer</option>
                           </React.Fragment>
                         }
                         {this.state.userRole === 'Safety Engineer' &&
                         <option>Resolved, Waiting for Review</option> }
                         </select>
                      }

                        </td>
                      </tr>
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
              <CommentModal
                onClick={this.handleComment}
                message={this.msg}
                user={this.user}
              />
            </div></React.Fragment>
          ) : (
            <CommentList comments={comments} handleShowList={this.handleShowList}  />
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default InspectionReport;
