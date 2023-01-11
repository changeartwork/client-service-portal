import { Grid, styled } from '@mui/material';
import { Fragment } from 'react';
import InfoCard from './shared/InfoCard';
import QuoteForm from './shared/QuoteForm';

const ContentBox = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: { margin: '16px' },
}));

const Analytics = () => {
    return (
        <Fragment>
            <ContentBox className="analytics">
                <Grid container spacing={3}>
                    <Grid item lg={8} md={8} sm={12} xs={12}>
                        {/* <StatCards /> */}
                        <QuoteForm />
                        {/* <StatCards2 />

            <H4>Ongoing Projects</H4>
            <RowCards /> */}
                    </Grid>

                    <Grid item lg={4} md={4} sm={12} xs={12}>
                        {/* <Card sx={{ px: 3, py: 2, mb: 3 }}>
              <Title>Traffic Sources</Title>
              <SubTitle>Last 30 days</SubTitle>

              <DoughnutChart
                height="300px"
                color={[palette.primary.dark, palette.primary.main, palette.primary.light]}
              />
            </Card> */}

                        <InfoCard />
                        {/* <Campaigns /> */}
                    </Grid>
                </Grid>
            </ContentBox>
        </Fragment>
    );
};

export default Analytics;
