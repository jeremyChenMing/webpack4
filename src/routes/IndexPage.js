import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import l from './IndexPage.less';

import Main from '../components/layout/MainLayout'

import { Carousel } from 'antd';

import Hello from '../components/bus/Hello'
import MainCom from '../components/bus/Main'

export const random = (m, n) => {
  return parseInt(Math.random() * n + m) 
}


class Lo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.context)
    return (
      <div style={this.context}>
        lo 
      </div>
    );
  }
}

Lo.contextTypes = {  
  color: PropTypes.string
};

class Son extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Lo />
    );
  }
}

console.log(PropTypes)

class MainComponents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'blue'
    }
  }

  getChildContext = ( ) => {
    return {color: this.state.color}
  }
  change = () => {
    this.setState({
      color: 'yellow'
    })
  }
  render() {
    return (
      <div>
        <Son />
        <button onClick={this.change}>按钮</button>
      </div>
      
    );
  }
}
MainComponents.childContextTypes = {
  color: PropTypes.string
}



class IndexPage extends React.Component {
  render() {
    console.log(this)
    return (
      <Main location={this.props.location}>
        <Carousel autoplay>
          <div className={cx(l.box)}><h3>1</h3></div>
          <div className={cx(l.box)}><h3>2</h3></div>
          <div className={cx(l.box)}><h3>3</h3></div>
          <div className={cx(l.box)}><h3>4</h3></div>
        </Carousel>

        <div className={cx(l.flexBox)}>
          {
            [{},{},{},{}].map( (item, index) => {
              return <div key={index} style={{backgroundColor: `rgba(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)},1)`}}>{index}</div>
            })
          }
        </div>
        <MainCom />
      </Main>
    );
  }
}




export default IndexPage
