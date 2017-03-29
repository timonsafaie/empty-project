// let's go!
import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import css from './styles/my_style.styl';

const propTypes = {
  initialNumber: PropTypes.number
};

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: null
    };
  }

  handleClick(i) {
    console.log(i);
  }

  render() {
    const { initialNumber } = this.props;

    return (
      <div className="number">
        {initialNumber}
      </div>
    );
  }
}

MyComponent.propTypes = propTypes;

// ========================================

ReactDOM.render(
  <MyComponent initialNumber={5} />,
  document.getElementById('root')
);
