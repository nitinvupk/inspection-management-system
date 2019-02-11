import React from "react";

class CommentModal extends React.Component {
  render() {
    const user = window.localStorage.getItem('user');
    return (
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  New Comment
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
                      Recipient:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={user}
                      id="recipient-name"
                      ref = {this.props.user}
                    />
                  </div>
                  <div className="form-group">
                    <label  className="col-form-label">
                      Comment:
                    </label>
                    <textarea className="form-control" id="message-text" ref={this.props.message}/>
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
                  Send Comment
                </button>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default CommentModal;
