// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconChartBar, IconUsers, IconDashboard, IconDeviceAnalytics } from '@tabler/icons';
// constant
const icons = {
    IconDashboard,
    IconDeviceAnalytics,
    IconUsers,
    IconChartBar
};

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const charts = {
    id: 'charts',
    title: <FormattedMessage id="chart" />,
    icon: icons.IconChartBar,
    type: 'group',
    children: [
        // {
        //     id: 'default',
        //     title: <FormattedMessage id="default" />,
        //     type: 'item',
        //     url: '/dashboard/default',
        //     icon: icons.IconDashboard,
        //     breadcrumbs: false
        // },
        // {
        //     id: 'analytics',
        //     title: <FormattedMessage id="analytics" />,
        //     type: 'item',
        //     url: '/dashboard/analytics',
        //     icon: icons.IconDeviceAnalytics,
        //     breadcrumbs: false
        // },
        {
            id: 'chart',
            title: <FormattedMessage id="charts" />,
            type: 'item',
            url: '/chart',
            icon: icons.IconChartBar,
            breadcrumbs: false
        },
        {
            id: 'sample',
            title: <FormattedMessage id="sample" />,
            type: 'item',
            url: '/sampless',
            icon: icons.IconChartBar,
            breadcrumbs: false
        }
    ]
};

export default charts;
