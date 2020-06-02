import React, { Component } from 'react';
import { connect } from 'react-redux';

class Phone extends Component {
  componentDidMount() {
    this.props.fetchPhoneById();
  }

  render() {
    return <div>Phone</div>;
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  fetchPhoneById,
};

export default connect(mapStateToProps, mapDispatchToProps)(Phone);
