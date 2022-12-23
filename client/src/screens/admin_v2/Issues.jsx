import React from 'react';
import Marginals from '../../components/admin_v2/Marginals/Marginals';

//mui
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TablePagination from '@mui/material/TablePagination';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

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

const Issues = ({ issues }) => {
  return (
    <div>
      <Marginals>
        <Button
          sx={{
            marginBottom: '10px',
          }}
          variant='contained'
          color='primary'
        >
          <AddCircleOutlineIcon sx={{ marginRight: '10px' }} />
          Add Issue
        </Button>
        <Table sx={{ minWidth: 700 }} stickyHeader aria-label='sticky table'>
          <TableHead>
            <TableRow>
              <StyledTableCell>Issue</StyledTableCell>
              <StyledTableCell align='left'>Start</StyledTableCell>
              <StyledTableCell align='left'>End</StyledTableCell>
              <StyledTableCell align='center'>Status</StyledTableCell>
              <StyledTableCell align='center'>Edit</StyledTableCell>
              <StyledTableCell align='center'>Delete</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {issues.map(({ id, name, startDate, endDate, isPublished }) => (
              <StyledTableRow>
                <StyledTableCell scope='row'>{name}</StyledTableCell>
                <StyledTableCell align='left'>
                  {new Date(startDate).toString().substring(0, 21)}
                </StyledTableCell>
                <StyledTableCell align='left'>
                  {new Date(endDate).toString().substring(0, 21)}
                </StyledTableCell>
                <StyledTableCell align='center'>Published</StyledTableCell>
                <StyledTableCell align='center'>
                  <EditIcon />
                </StyledTableCell>
                <StyledTableCell align='center'>
                  <DeleteIcon />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </Marginals>
    </div>
  );
};

export default Issues;
