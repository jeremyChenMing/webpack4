import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd'
import cx from 'classnames'
import l from './index.less'
// import '../style.css'
import { connect } from 'react-redux'
import { plus, reduce } from '../actions/todo'


class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  handle = () => {
    const { dispatch, todos: {value} } = this.props;
    dispatch(plus(value + 1))
  }
  render() {
    console.log(this.props)
    return (
      <div>
        hello jeremy!!!
        <div className={cx(l.box)}>
          klkalkd！！！
        </div>
        <p className={cx(l.name)}>hello jeremy</p>
        <img src="/static/images/produce.png" alt=""/>
        <Button onClick={this.handle} type="primary">按钮{this.props.todos.value}</Button>
      </div>
    );
  }
}
const mapState = state => {
  const { todos } = state;
  return {
    todos
  }
}

export default connect(mapState)(Main)