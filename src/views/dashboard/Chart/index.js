// material-ui
import { Grid } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

// charts
import ColumnChart from './ColumnChart';
import BarChart from './BarChart';
import PieChart from './PieChart';
import RedialBarChart from './RedialBarChart';
import PolarChart from './PolarChart';

// ==============================|| APEX CHARTS ||============================== //

const Chart = () => (
    <Grid container spacing={gridSpacing}>
        <Grid item xs={12} md={6} lg={6}>
            <MainCard title="Column Chart">
                <ColumnChart />
            </MainCard>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
            <MainCard title="Bar Chart">
                <BarChart />
            </MainCard>
        </Grid>
        <Grid item xs={12} md={6} xl={4}>
            <MainCard title="Redial Chart">
                <RedialBarChart />
            </MainCard>
        </Grid>
        <Grid item xs={12} md={6} xl={4}>
            <MainCard title="Polar Chart">
                <PolarChart />
            </MainCard>
        </Grid>
        <Grid item xs={12} md={6} xl={4}>
            <MainCard title="Pie Chart">
                <PieChart />
            </MainCard>
        </Grid>
    </Grid>
);

export default Chart;
