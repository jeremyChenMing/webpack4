import React from 'react';
import cx from 'classnames';
import l from './IndexPage.less';

import Main from '../components/layout/MainLayout'

import { Carousel } from 'antd';

import Hello from '../components/bus/Hello'
import MainCom from '../components/bus/Main'


class IndexPage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <Main location={this.props.location}>
        <Carousel autoplay>
          <div className={cx(l.box)}><h3>1</h3></div>
          <div className={cx(l.box)}><h3>2</h3></div>
          <div className={cx(l.box)}><h3>3</h3></div>
          <div className={cx(l.box)}><h3>4</h3></div>
        </Carousel>
        <Hello name={'123'} />
        <MainCom />
        123
      </Main>
    );
  }
}


export default IndexPage
