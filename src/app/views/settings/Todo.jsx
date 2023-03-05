import { styled } from '@mui/material';
import { Fragment } from 'react';

const ContentBox = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
}));

const Todo = () => {

  return (
    <Fragment>
      <ContentBox className="analytics">
        <img src="../assets/images/illustrations/todo.svg" alt="Under Constructions" />
      </ContentBox>
    </Fragment>
  );
};

export default Todo;
