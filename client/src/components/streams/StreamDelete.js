import React from "react";
import Modal from "../Modal";
import history from "../../history";


const StreamDelete = () => {
  const actions = (
    <React.Fragment>
      <button className="ui button negative">Delete</button>
      <button className="ui button">Cancel</button>
    </React.Fragment>
  );

  return (
    <div>
      Delete your stream
      <Modal onDismiss={() => history.push('/')} 
             title="Delete Stream"
             content="Are you sure?" 
             actions={actions} />
    </div>
  );
};

export default StreamDelete;
