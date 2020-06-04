import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPhoneById } from './../../reducers/phones';

class Phone extends Component {
  componentDidMount() {
    this.props.fetchPhoneById(this.props.match.params.id);
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
