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



const UpgradeCard = () => {
  const navigate = useNavigate();
  const redirectToCreateQuote = () => {
    navigate('/csp/quote/create')
  }
  return (
    <CardRoot>
      <StyledCard elevation={0}>
        <img src="../assets/images/illustrations/upgrade.png" alt="New Quotation" />

        <Paragraph>
          It is not advisable to create a quote <b>for client</b> <br /> If possible ask the client to create quote from their client portal or using our web portal.
          If client is unable to place through any portals, kindly create with justification.
        </Paragraph>

        <Button
          size="large"
          color="primary"
          variant="contained"
          sx={{ textTransform: 'uppercase' }}
          onClick={redirectToCreateQuote}
        >
          Place a Quote
        </Button>
      </StyledCard>
    </CardRoot>
  );
};

export default UpgradeCard;
