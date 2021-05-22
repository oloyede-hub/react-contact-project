import React, { useContext } from 'react'
import { Menu, Image, Icon, Button } from 'semantic-ui-react'
import logo from "../../assets/images/logo.svg"
import { Link, useHistory, useLocation } from "react-router-dom"
import { GlobalContext } from "../../context/Provider"
import logout from '../../context/actions/auth/logout'
import isAuthenticated from '../../utils/isAuthenticated'

const Header = () => {

    const history = useHistory()
    const { contactsDispatch } = useContext(GlobalContext)


    const handleUserLogout = () => {
        logout(history)(contactsDispatch);
    }
    const { pathname } = useLocation();

    return (
        <Menu secondary pointing>
            <Image src={logo} width={60} />
            <Menu.Item as={Link} to="/" style={{ fontSize: 24 }}>React contact</Menu.Item>
            {pathname === "/" && (<Menu.Item position="right">
                <Button as={Link} to="/contacts/create" icon basic primary>
                    <Icon name="add" />
                    Add Contact
                 </Button>
            </Menu.Item>)}
            {isAuthenticated() && (<Menu.Item position="right">
                <Button onClick={() => handleUserLogout()} icon color="red" basic position="right">
                    <Icon name="log out" />
                    Logout
                 </Button>
            </Menu.Item>)}
        </Menu>
    )
}

export default Header
