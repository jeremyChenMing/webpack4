import React from 'react';
import cx from 'classnames';
import l from './IndexPage.less'
import Main from '../components/layout/MainLayout'
import { Collapse } from 'antd';
const Panel = Collapse.Panel;


class Us extends React.Component {
  constructor(props) {
    super(props);
  }
  callback = () => {

  }
  render() {
    const text = `
      A dog is a type of domesticated animal.
      Known for its loyalty and faithfulness,
      it can be found as a welcome guest in many households across the world.
    `;

    return (
      <Main location={this.props.location}>
        <Collapse defaultActiveKey={['1']} onChange={this.callback}>
          <Panel header="This is panel header 1!!" key="1">
            <p>{text}</p>
          </Panel>
          <Panel header="This is panel header 2" key="2">
            <p>{text}</p>
          </Panel>
          <Panel header="This is panel header 3" key="3" disabled>
            <p>{text}</p>
          </Panel>
        </Collapse>
      </Main>
    );
  }
}

export default Us
