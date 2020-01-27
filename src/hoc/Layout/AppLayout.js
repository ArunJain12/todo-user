import React, { Component } from "react";
import { Layout } from "antd";
import { connect } from "react-redux";
import MenuBar from "../../components/MenuBar/MenuBar";
import { setLink } from "../../store/actions/actionCreators";

const { Content } = Layout;
class AppLayout extends Component {
  render() {
    return (
      <React.Fragment>
        <MenuBar link={this.props.link} clicked={this.props.onLinkClick} />
        <br />
        <Content>{this.props.children}</Content>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    link: state.link
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLinkClick: link => dispatch(setLink(link))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppLayout);
