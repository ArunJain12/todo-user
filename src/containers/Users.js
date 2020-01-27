import React, { Component } from "react";
import { Button, Form, Input } from "antd";
import {
  toggleModal,
  addUser,
  deleteUser,
  laodUsersFromLocalStorage
} from "../store/actions/actionCreators";
import { connect } from "react-redux";
import Aux from "../hoc/Auxillary/Aux";
import DisplayData from "../components/DisplayData/DisplayData";
import DisplayModal from "../components/Modal/DisplayModal";

class Users extends Component {
  state = {
    username: "",
    email: ""
  };

  componentDidMount() {
    this.props.loadingUsers();
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = () => {
    let key = Math.floor(Math.random() * 100);
    this.props.addingUser(key, this.state.username, this.state.email);
    this.setState({ username: "", email: "" });
  };

  render() {
    const columns = [
      {
        title: "Name",
        dataIndex: "name",
        key: "name"
      }
    ];

    const form = (
      <Form layout="vertical">
        <Form.Item label="User-name">
          <Input
            id="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
        </Form.Item>

        <Form.Item label="E-mail">
          <Input
            id="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </Form.Item>
      </Form>
    );

    return (
      <Aux>
        <Button onClick={() => this.props.onTogglingModal(!this.props.show)}>
          Create User
        </Button>
        <br />
        <DisplayModal
          title="Add User"
          show={this.props.show}
          loading={this.props.loading}
          modaltext={form}
          handleCancel={this.props.onTogglingModal}
          onSubmit={this.handleSubmit}
        />
        <DisplayData
          id="users"
          columns={columns}
          data={this.props.users}
          delete={this.props.deletingUser}
        />
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    show: state.show,
    loading: state.confirmLoading,
    users: state.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTogglingModal: val => dispatch(toggleModal(val)),
    addingUser: (key, name, email) => dispatch(addUser(key, name, email)),
    deletingUser: key => dispatch(deleteUser(key)),
    loadingUsers: () => dispatch(laodUsersFromLocalStorage())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
