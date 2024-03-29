import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Tab extends Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  }

  render() {
    const { onClick, props: { activeTab, label }} = this;

    let className = 'nav-item nav-link';

    if (activeTab === label) {
      className += ' active';
    }

    return (
      <a style={{width:'50%'}}
        className={className}
        onClick={onClick}
      >
        {label}
      </a>
    );
  }
}