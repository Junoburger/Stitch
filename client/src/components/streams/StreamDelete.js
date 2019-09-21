import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import Modal from "../Modal";
import history from "../../history";
import { fetchStream, deleteStream } from "../../actions";

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  renderActions() {
      const { id }= this.props.match.params;
    return (
      <React.Fragment>
        <button onClick={() => this.props.deleteStream(id)} className="ui button negative">Delete</button>
        <Link to="/" className="ui button">Cancel</Link>
      </React.Fragment>
    );
  }

  renderContent() {
    if (!this.props.stream) {
      return "Are you sure?";
    }
    return (
      <div>
        Are you sure? This will delete{" "}
        <h3 style={{ background: "yellow", textAlign: "center" }}>
          {this.props.stream.title}
        </h3>
      </div>
    );
  }

  render() {
    return (
      <Modal
        onDismiss={() => history.push("/")}
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchStream, deleteStream }
)(StreamDelete);
