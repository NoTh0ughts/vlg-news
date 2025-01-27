import React, {Component} from 'react';
import {Container} from 'reactstrap';
import {NavMenu} from './NavMenu'


export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div>
          <div className="d-inline p-4">
                <NavMenu/>
                <Container>
                    {this.props.children}
                </Container>
          </div>
      </div>
    );
  }
}