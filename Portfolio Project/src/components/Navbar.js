import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './Navbar.module.css';
const Navbar = () => {
    return (_jsx("nav", { className: styles.nav, children: _jsxs("ul", { className: styles.navList, children: [_jsx("li", { className: styles.navItem, children: "Home" }), _jsx("li", { className: styles.navItem, children: "About" })] }) }));
};
export default Navbar;
