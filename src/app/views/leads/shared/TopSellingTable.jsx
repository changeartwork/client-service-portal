import {
  Avatar,
  Box,
  Card,
  Icon,
  IconButton,
  MenuItem,
  Select,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TablePagination,
  useTheme,
} from '@mui/material';
import { Paragraph } from 'app/components/Typography';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CardHeader = styled(Box)(() => ({
  display: 'flex',
  paddingLeft: '24px',
  paddingRight: '24px',
  marginBottom: '12px',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

const Title = styled('span')(() => ({
  fontSize: '1rem',
  fontWeight: '500',
  textTransform: 'capitalize',
}));

const ProductTable = styled(Table)(() => ({
  minWidth: 400,
  whiteSpace: 'pre',
  '& small': {
    width: 50,
    height: 15,
    borderRadius: 500,
    boxShadow: '0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)',
  },
  '& td': { borderBottom: 'none' },
  '& td:first-of-type': { paddingLeft: '16px !important' },
}));

const Small = styled('small')(({ bgcolor }) => ({
  width: 50,
  height: 15,
  color: '#fff',
  padding: '2px 8px',
  borderRadius: '4px',
  overflow: 'hidden',
  background: bgcolor,
  boxShadow: '0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)',
}));

const TopSellingTable = () => {
  const { palette } = useTheme();
  const bgError = palette.error.main;
  const bgPrimary = palette.primary.main;
  const bgSecondary = palette.secondary.main;

  const [filesList, setFilesList] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  // const [previewSrc, setPreviewSrc] = useState(''); // state for storing previewImage
  // const [isPreviewAvailable, setIsPreviewAvailable] = useState(false); // state to show preview only for images


  useEffect(() => {
    const getFilesList = async () => {
      try {
        const { data } = await axios.get(`${process.env.REACT_APP_QS_URL}/list`, { headers: { Authorization: localStorage.getItem('accessToken') } });
        console.log('from API', data)
        setFilesList(data);
        console.log('from hook', filesList)
      } catch (error) {
        console.log('inside catch', error)
        error.response && setErrorMsg(error.response.data);
      }
    };
    getFilesList();
  }, []);

  return (
    <Card elevation={3} sx={{ pt: '20px', mb: 3 }}>
      <CardHeader>
        <Title>List of Quotations</Title>
        <Select size="small" defaultValue="this_month">
          <MenuItem value="this_month">This Month</MenuItem>
          <MenuItem value="last_month">Last Month</MenuItem>
        </Select>
      </CardHeader>

      <Box overflow="auto">
        {errorMsg && <p className="errorMsg">{errorMsg}</p>}
        <ProductTable>
          <TableHead>
            <TableRow>
              <TableCell sx={{ px: 4 }} colSpan={2}>
                Created Date
              </TableCell>
              <TableCell sx={{ px: 3 }} colSpan={2}>
                Client Name
              </TableCell>
              <TableCell sx={{ px: 0 }} colSpan={2}>
                EMail
              </TableCell>
              <TableCell sx={{ px: 0 }} colSpan={2}>
                Status
              </TableCell>
              <TableCell sx={{ px: 3 }} colSpan={2}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {filesList.length > 0 &&
              filesList
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((product, index) => (
                  <TableRow key={index} hover>
                    <TableCell colSpan={2} align="left" sx={{ px: 0, textTransform: 'capitalize' }}>
                      <Box display="flex" alignItems="center">
                        <Paragraph sx={{ m: 0, ml: 2 }}>{product.createdAt}</Paragraph>
                      </Box>
                    </TableCell>
                    <TableCell colSpan={2} align="left" sx={{ px: 0, textTransform: 'capitalize' }}>
                      <Box display="flex" alignItems="center">
                        {/* <Avatar src={product.imgUrl} /> */}
                        <Paragraph sx={{ m: 0, ml: 2 }}>{product.name}</Paragraph>
                      </Box>
                    </TableCell>

                    <TableCell align="left" colSpan={2} sx={{ px: 0 }}>
                      {/* ${product.price > 999 ? (product.price / 1000).toFixed(1) + 'k' : product.price} */}
                      {product.mail}
                    </TableCell>

                    <TableCell sx={{ px: 0 }} align="left" colSpan={2}>
                      {product.status ? (
                        product.status === "NEW" ? (
                          <Small bgcolor={bgSecondary}>{product.status}</Small>
                        ) : (
                          <Small bgcolor={bgPrimary}>INPROGRESS</Small>
                        )
                      ) : (
                        <Small bgcolor={bgError}>ONHOLD</Small>
                      )}
                    </TableCell>

                    <TableCell sx={{ px: 0 }} colSpan={1}>
                      <IconButton>
                        <Icon color="primary">download</Icon>
                      </IconButton>
                      <IconButton>
                        <Icon color="primary">mail</Icon>
                      </IconButton>
                      {/* <IconButton>
                    <Icon color="primary">delete</Icon>
                  </IconButton> */}
                      {/* <IconButton>
                    <Icon color="primary">archive</Icon>
                  </IconButton> */}
                    </TableCell>
                  </TableRow>
                ))}
          </TableBody>
        </ProductTable>
        <TablePagination
          rowsPerPageOptions={[5, 10, 15]}
          component="div"
          count={filesList.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>
    </Card>
  );
};

const productList = [
  {
    start_date: '12.01.2023',
    name: 'Peter John',
    email: 'peter.john@gmail.com',
    status: 'NEW',
  },
  {
    start_date: '12.02.2023',
    name: 'Kings Morgan',
    email: 'morgan.kings@gmail.com',
    status: 'INPROGRESS',
  },
  {
    start_date: '22.01.2023',
    name: 'Jenifer Annie',
    email: 'annie.jenifer@gmail.com',
    status: 'ONHOLD',
  },
  {
    start_date: '16.11.2022',
    name: 'Mohammed Yusuf',
    email: 'md.yusuf@gmail.com',
    status: 'NEW',
  }
];

export default TopSellingTable;
