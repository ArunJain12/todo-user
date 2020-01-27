import React from "react";
import "antd/dist/antd.css";
import Layout from "./hoc/Layout/AppLayout";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import Todos from "./containers/Todos";
import Users from "./containers/Users";

function App(props) {
  return (
    <div>
      <Layout>
        {props.link === "todos" ? (
          <Route path="/" exact component={Todos} />
        ) : (
          <Route path="/" exact component={Users} />
        )}
      </Layout>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    link: state.link
  };
};

export default connect(mapStateToProps)(App);
