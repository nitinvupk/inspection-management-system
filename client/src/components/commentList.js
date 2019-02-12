import React from "react";

class CommentList extends React.Component {
  render() {
    return (
      <React.Fragment>
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

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <h4>
                  Comment List <span className="sr-only">(current)</span>
                </h4>
              </li>
            </ul>

            <button
              className="btn btn-outline-success my-2 my-sm-0"
              onClick={this.props.handleShowList}
            >
              Back
            </button>
          </div>
        </nav>
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Owner</th>
                <th scope="col">Body</th>
                <th scope="col">Created Date</th>
              </tr>
            </thead>
            <tbody>
              {this.props.comments.map((comment, index) => (
                <React.Fragment>
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{comment.user}</td>
                    <td>{comment.body}</td>
                    <td>{comment.created_at}</td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default CommentList;
