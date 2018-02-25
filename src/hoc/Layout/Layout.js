
import React, { Component } from 'react';
import classes from './Layout.css';
import Aux from '../Aux/Aux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
class Layout extends Component {
    state = {
        showSideDrawer: false
    }
    SideDrawerClosedHandler = () => {

        this.setState({ showSideDrawer: false });
    }

    SideDrawerToogleHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        });
    }
    render() {
        return (
            <Aux>
                <Toolbar drawerToogleClicked={this.SideDrawerToogleHandler} />
                <SideDrawer open={this.state.showSideDrawer}
                    closed={this.SideDrawerClosedHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>);


    }
}

export default Layout;