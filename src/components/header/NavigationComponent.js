import React from 'react'
import { Navbar, NavbarBrand } from 'reactstrap';

const NavigationComponent = () => {
    return (
        <div>
            <Navbar
                className="my-2" color="secondary" dark
            >
                <NavbarBrand href="/">
                    Reastaurant
                </NavbarBrand>
            </Navbar>
        </div>
    )

}

export default NavigationComponent;

