// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconUsers, IconDashboard, IconDeviceAnalytics } from '@tabler/icons';

// constant
const icons = {
    IconDashboard,
    IconDeviceAnalytics,
    IconUsers
};

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
    id: 'dashboard',
    title: <FormattedMessage id="Dashboard" />,
    icon: icons.IconDashboard,
    type: 'group',
    children: [
        {
            id: 'default',
            title: <FormattedMessage id="dashboard" />,
            type: 'item',
            url: '/dashboard/default',
            icon: icons.IconDashboard,
            breadcrumbs: false
        },
        // {
        //     id: 'analytics',
        //     title: <FormattedMessage id="analytics" />,
        //     type: 'item',
        //     url: '/dashboard/analytics',
        //     icon: icons.IconDeviceAnalytics,
        //     breadcrumbs: false
        // },
        {
            id: 'profiles',
            title: <FormattedMessage id="Profile" />,
            type: 'collapse',
            icon: icons.IconUsers,
            breadcrumbs: false,
            children: [
                {
                    id: 'userlist',
                    title: <FormattedMessage id="Userlist" />,
                    type: 'item',
                    url: '/dashboard/profiles/userlist',
                    icon: icons.IconUsers,
                    breadcrumbs: false
                },
                {
                    id: 'adduser',
                    title: <FormattedMessage id="Adduser" />,
                    type: 'item',
                    url: '/dashboard/profiles/adduser',
                    icon: icons.IconUsers,
                    breadcrumbs: false
                }
            ]
        }
    ]
};

export default dashboard;
