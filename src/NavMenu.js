import React , {Component} from 'react';
import {Nav , Navbar , NavItem , NavLink} from 'reactstrap';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

export class NavMenu extends Component {
    static displayName = NavMenu.name;

    render () {
        return (
            <Navbar className="d-flex container-sm align-content-center">
                <Nav navbar className="text-uppercase fs-1">
                    <NavItem>
                        <NavLink tag={ Link } className="text-white navigation-button" to="/">Новости</NavLink>
                    </NavItem >
                </Nav>
                <Nav navbar className="text-uppercase fs-1">
                    <NavItem>
                        <NavLink tag={ Link } className="text-white navigation-button" to="/ton">Тональность</NavLink>
                    </NavItem >
                </Nav>
                <Nav navbar className="text-uppercase fs-1">
                    <NavItem>
                        <NavLink tag={ Link } className="text-white navigation-button" to="/other">Другой сервис</NavLink>
                    </NavItem >
                </Nav>
            </Navbar>
        );
    }
}