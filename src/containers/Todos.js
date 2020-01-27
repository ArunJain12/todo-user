import React, { Component } from "react";
import { Button, Form, Input, DatePicker } from "antd";
import {
  toggleModal,
  addTodo,
  deleteTodo,
  laodTodosFromLocalStorage
} from "../store/actions/actionCreators";
import { connect } from "react-redux";
import Aux from "../hoc/Auxillary/Aux";
import DisplayData from "../components/DisplayData/DisplayData";
import DisplayModal from "../components/Modal/DisplayModal";

class Todos extends Component {
  state = {
    todo: "",
    date: new Date()
  };

  componentDidMount() {
    this.props.loadingTodos();
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleDate = e => {
    this.setState({ date: e._d });
  };

  handleSubmit = () => {
    let key = Math.floor(Math.random() * 100);
    this.props.addingTodo(key, this.state.todo, this.state.date);
    this.setState({ todo: "", date: new Date() });
  };

  render() {
    const columns = [
      {
        title: "TodoItem",
        dataIndex: "todo",
        key: "todo"
      }
    ];

    const form = (
      <Form layout="vertical">
        <Form.Item label="Todo-item">
          <Input
            id="todo"
            value={this.state.todo}
            onChange={this.handleChange}
          />
        </Form.Item>

        <Form.Item label="Date">
          <DatePicker id="date" onChange={this.handleDate} />
        </Form.Item>
      </Form>
    );

    return (
      <Aux>
        <Button onClick={() => this.props.onTogglingModal(!this.props.show)}>
          Create Todo
        </Button>
        <br />
        <DisplayModal
          title="Add Todo"
          show={this.props.show}
          loading={this.props.loading}
          modaltext={form}
          handleCancel={this.props.onTogglingModal}
          onSubmit={this.handleSubmit}
        />
        <DisplayData
          id="todos"
          columns={columns}
          data={this.props.todos}
          delete={this.props.deletingTodo}
        />
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    show: state.show,
    loading: state.confirmLoading,
    todos: state.todos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTogglingModal: val => dispatch(toggleModal(val)),
    addingTodo: (key, todo, date) => dispatch(addTodo(key, todo, date)),
    deletingTodo: key => dispatch(deleteTodo(key)),
    loadingTodos: () => dispatch(laodTodosFromLocalStorage())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos);
