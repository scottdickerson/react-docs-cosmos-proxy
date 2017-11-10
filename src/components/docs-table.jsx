import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Docs extends Component {
  static propTypes = {
    displayName: PropTypes.string.isRequired,
    description: PropTypes.string,

    /**
     * Needs to be react-docgen compatible data.
     */
    props: PropTypes.objectOf(PropTypes.shape({
      type: PropTypes.shape({
        name: PropTypes.string.isRequired
      }).isRequired
    })).isRequired
  };

  static defaultProps = {
    description: ''
  };

  render() {
    const { displayName, description, props } = this.props;

    return <div className="docs">
      <header>
        <h1 className="title">{displayName}</h1>
        <h2 className="description">{description}</h2>
      </header>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(props).map(prop => <tr key={prop} className="prop">
            <td className="name">{prop}</td>
            <td className="type">{props[prop].type.name}</td>
          </tr>)}
        </tbody>
      </table>
    </div>;
  }
}
