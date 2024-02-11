import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Navbar from '../components/Navbar';
import '../styles/global.css';
const MyApp = ({ Component, pageProps }) => {
    return (_jsxs(_Fragment, { children: [_jsx(Navbar, {}), _jsx(Component, { ...pageProps })] }));
};
export default MyApp;
