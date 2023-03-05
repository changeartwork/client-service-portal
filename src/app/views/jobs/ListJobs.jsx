import { Grid, styled } from '@mui/material';
import { Fragment } from 'react';
import JobListTable from './shared/JobListTable';
import PlaceJobCard from './shared/PlaceJobCard';

const ContentBox = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
}));

const ListJobs = () => {

  return (
    <Fragment>
      <ContentBox className="analytics">
        <Grid container spacing={3}>
          <Grid item lg={8} md={8} sm={12} xs={12}>
            <JobListTable />
          </Grid>

          <Grid item lg={4} md={4} sm={12} xs={12}>
            <PlaceJobCard />
          </Grid>
        </Grid>
      </ContentBox>
    </Fragment>
  );
};

export default ListJobs;
