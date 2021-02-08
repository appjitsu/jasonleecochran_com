import React, { Component } from 'react';

export default class Section extends Component {
  render() {
    const { styles, children } = this.props;
    return (
      <section className={ styles }>
    		{ children }
      </section>
    );
  }
}
