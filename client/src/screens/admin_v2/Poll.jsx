import React, { useEffect, useState } from 'react';
import Marginals from '../../components/admin_v2/Marginals/Marginals';
//mui
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DialogPoll from '../../components/admin_v2/Poll/PollDialogBox';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 13,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const Poll = ({ PollList }) => {
  const [dialogBoxOpen, setDialogBoxOpen] = useState(false);
  const handleDialogBoxOpen = () => setDialogBoxOpen(true);
  return (
    <>
      <div>
        <Marginals>
          <DialogPoll
            dialogBoxOpen={dialogBoxOpen}
            setDialogBoxOpen={setDialogBoxOpen}
          />
          <Button
            sx={{
              marginBottom: '10px',
            }}
            variant='contained'
            color='primary'
            onClick={handleDialogBoxOpen}
          >
            <AddCircleOutlineIcon sx={{ marginRight: '10px' }} />
            Add Poll
          </Button>
          <Table sx={{ minWidth: 700 }} stickyHeader aria-label='sticky table'>
            <TableHead>
              <TableRow>
                <StyledTableCell align='left'>Content</StyledTableCell>
                <StyledTableCell align='center'>Date</StyledTableCell>
                <StyledTableCell align='center'>Timer</StyledTableCell>
                <StyledTableCell align='center'>Status</StyledTableCell>
                <StyledTableCell align='center'>Edit</StyledTableCell>
                <StyledTableCell align='center'>Delete</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody></TableBody>
          </Table>
          <Button>Load More</Button>
        </Marginals>
      </div>
    </>
  );
};
export default Poll;
