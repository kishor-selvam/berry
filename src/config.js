import LAYOUT_CONST from 'constant';

export const JWT_API = {
    secret: 'SECRET-KEY',
    timeout: '1 days'
};

export const API_URL = 'http://localhost:8083';
export const APP_URL = 'http://localhost:3000';

export const FIREBASE_API = {
    apiKey: 'AIzaSyBs62Fx-AoXtG-YPMK2XiD9h8fpzBBOWlc',
    authDomain: 'full-version-a4d46.firebaseapp.com',
    projectId: 'full-version-a4d46',
    storageBucket: 'full-version-a4d46.appspot.com',
    messagingSenderId: '1057992174506',
    appId: '1:1057992174506:web:de679d476cdb6fc8a799d3',
    measurementId: 'G-JD90F6KX6M'
};

export const AUTH0_API = {
    client_id: '7T4IlWis4DKHSbG8JAye4Ipk0rvXkH9V',
    domain: 'dev-w0-vxep3.us.auth0.com'
};

export const AWS_API = {
    poolId: 'us-east-1_AOfOTXLvD',
    appClientId: '3eau2osduslvb7vks3vsh9t7b0'
};

// basename: only at build time to set, and Don't add '/' at end off BASENAME for breadcrumbs, also Don't put only '/' use blank('') instead,
// like '/berry-material-react/react/default'
export const BASE_PATH = '';

export const DASHBOARD_PATH = '/dashboard/default';

export const HORIZONTAL_MAX_ITEM = 6;

const config = {
    layout: LAYOUT_CONST.VERTICAL_LAYOUT, // vertical, horizontal
    drawerType: LAYOUT_CONST.DEFAULT_DRAWER, // default, mini-drawer
    fontFamily: `'Roboto', sans-serif`,
    borderRadius: 8,
    outlinedFilled: true,
    navType: 'light', // light, dark
    presetColor: 'default', // default, theme1, theme2, theme3, theme4, theme5, theme6
    locale: 'en', // 'en' - English, 'fr' - French, 'ro' - Romanian, 'zh' - Chinese
    rtlLayout: false,
    container: false
};

export default config;
