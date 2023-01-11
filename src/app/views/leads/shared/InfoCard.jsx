import { Card, styled } from '@mui/material';
import { convertHexToRGB } from 'app/utils/utils';

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
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));



const InfoCard = () => {
  return (
    <CardRoot>
      <StyledCard elevation={0}>
        <img src="../assets/images/illustrations/info.png" alt="New Quotation" />

        <Paragraph>
          Kindly read the instructions before <b>placing the quote</b> <br />
          1. Currently supported files are images only (jpg/png)<br />
          2. Maximum of 10MB can be uploaded <br />
          3. All fields are mandatory <br />
          4. File retention period is 1 month <br />
          5. Kindly avoid duplicate files
        </Paragraph>
      </StyledCard>
    </CardRoot>
  );
};

export default InfoCard;
