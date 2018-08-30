import React from 'react';
import Prop_Types from 'prop-types';
import cx from 'classnames'
import l from './Index.less'


class Hello extends React.Component {
  static propTypes = {
    name: Prop_Types.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.name}12312
        <div className={cx(l.cts)}>
          {
            ['','','',''].map( (item,index) => {
              return <div key={index}>
                {index}
              </div>
            })
          }
        </div>
      </div>
    );
  }
}

export default Hello
