import React from "react";
import Aux from "../../hoc/Auxillary/Aux";
import { Modal } from "antd";

const DisplayModal = props => {
  return (
    <Aux>
      <Modal
        title={props.title}
        visible={props.show}
        confirmLoading={props.loading}
        onCancel={() => props.handleCancel(false)}
        okText="Save"
        onOk={props.onSubmit}
      >
        {props.modaltext}
      </Modal>
    </Aux>
  );
};

export default DisplayModal;
