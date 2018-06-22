import React, { PureComponent } from 'react';
import { connect } from 'unistore/react';
import styled from 'styled-components';

import AppActions from './AppActions';
import initStyle from './AppStyle';

initStyle();

const AppWrapper = styled.div`
  height: 100%;
  position: relative;
`;

class App extends PureComponent {
  componentDidMount() {
    this.props.loadData();
  }

  render() {
    return !this.props.isLoading && (
      <AppWrapper>Hello There!</AppWrapper>
    );
  }
}

export default connect(
  state => state,
  AppActions
)(App);
