import React from 'react';
import Header from '../components/Header';
import '../style/reset.css';
import '../style/grid.css';
import '../style/styles.css';

class Template extends React.Component {
  render() {
    const { location, children } = this.props;
    let header;
    if (location.pathname === '/') {
      header = <Header />;
    } else {
      header = <Header />;
    }
    return (
      <div>
        {header}
        {children()}
      </div>
    );
  }
}

export default Template;
