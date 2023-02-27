import { slide as Menu } from 'react-burger-menu';

export const Sidebar = () => {
    return (
        <Menu>
            <a className="menu-item" href="/">
                About
            </a>
            <a className="menu-item" href="/salads">
                Presale
            </a>
            <a className="menu-item" href="/pizzas">
                News
            </a>
            <a className="menu-item" href="/desserts">
                Info
            </a>
        </Menu>
    );
}