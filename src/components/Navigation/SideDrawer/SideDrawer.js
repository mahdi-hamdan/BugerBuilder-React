import React from 'react';
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigaitionItems/NavigationItems'
import clasess from './SideDrawer.css';
import BackDrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux'
const sideDrawer = (props) => {
    let attachedClasses = [clasess.SideDrawer, clasess.Close];
    if (props.open) {
        attachedClasses = [clasess.SideDrawer, clasess.Open];

    }
    return (
        <Aux>
            <BackDrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <div className={clasess.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
};


export default sideDrawer;