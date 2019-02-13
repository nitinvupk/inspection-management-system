import React from "react";

class EditModal extends React.Component {
  render() {
    // const user = window.localStorage.getItem('user');
    return (
        <div
          className="modal fade"
          id="editModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="editModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Edit
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label  className="col-form-label">
                      Title:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue=""
                      id="recipient-name"
                      ref = {this.props.title}
                      name="title"
                    />
                  </div>
                  <div className="form-group">
                    <label  className="col-form-label">
                      Description:
                    </label>
                    <textarea className="form-control" id="message-text" name="description" defaultValue="" ref={this.props.description} />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary" onClick={this.props.onClick} data-dismiss="modal">
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default EditModal;
