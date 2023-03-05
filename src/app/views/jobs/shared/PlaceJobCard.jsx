import { Button, Card, styled } from '@mui/material';
import { convertHexToRGB } from 'app/utils/utils';
import { useNavigate } from 'react-router-dom';

const CardRoot = styled(Card)(({ theme }) => ({
  marginBottom: '24px',
  padding: '24px !important',
  [theme.breakpoints.down('sm')]: { paddingLeft: '16px !important' },
}));

const StyledCard = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  position: 'relative',
  padding: '24px !important',
  background: `rgb(${convertHexToRGB(theme.palette.primary.main)}, 0.15) !important`,
  [theme.breakpoints.down('sm')]: { padding: '16px !important' },
}));

const Paragraph = styled('p')(({ theme }) => ({
  margin: 0,
  paddingTop: '24px',
  paddingBottom: '24px',
  color: theme.palette.text.secondary,
}));



const PlaceJobCard = () => {
  const navigate = useNavigate();
  const redirectToCreateQuote = () => {
    navigate('/csp/job/create')
  }
  return (
    <CardRoot>
      <StyledCard elevation={0}>
        <img src="../assets/images/illustrations/upgrade.png" alt="New Job" />

        <Paragraph>
          Once the job is placed, our<b> client service team</b> <br /> will check and acknowledge it and provide the estimation within 30mins. If there are any additional details required, you will get a request mail / notification from the team.
        </Paragraph>

        <Button
          size="large"
          color="primary"
          variant="contained"
          sx={{ textTransform: 'uppercase' }}
          onClick={redirectToCreateQuote}
        >
          Create a Job
        </Button>
      </StyledCard>
    </CardRoot>
  );
};

export default PlaceJobCard;
