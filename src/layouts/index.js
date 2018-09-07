import React from 'react';
import Header from '../components/Header';

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

Template.propTypes = {
  children: React.PropTypes.func,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
};

export default Template;
