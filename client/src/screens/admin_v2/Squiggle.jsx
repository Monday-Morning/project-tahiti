import { useEffect, useState } from 'react';
import Marginals from '../../components/admin_v2/Marginals/Marginals';
import { Button } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import listSquiggles from '../../graphql/queries/squiggles/listSquiggles';
// import SquiggleDialogBox from '../../components/admin_v2/Squiggles/SquiggleDialogBox';
import { getGraphClient } from '../../context/ApolloContextProvider';


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
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
const Squiggle = ({ squiggles }) => {
  const graphClient = getGraphClient(true);
  const [squiggleList, setSquiggleList] = useState(squiggles || []);
  const [offset, setOffset] = useState(0);
  const getMoreSquiggles = async () => {
    // setDialogBoxOpen(true);
    const {
      data: { listSquiggles: squiggles },
    } = await graphClient.query({
      query: listSquiggles,
      variables: {
        limit: 9,
        offset: offset + 10,
      },
    });
    setOffset((prev) => prev + 10);
    setSquiggleList((prev) => [...prev, ...squiggles])
  };
  return (
    <div>
      <Marginals>
        <Button
          sx={{
            marginBottom: '10px',
          }}
          variant='contained'
          color='secondary'
          onClick={() => {
            // setAction('Add'), setDialogBoxOpen(true);
          }}>
          <AddCircleOutlineIcon sx={{ marginRight: '10px' }} />
          Add Squiggle
        </Button>
        <Table sx={{ minWidth: 700 }} stickyHeader aria-label='sticky table'>
          <TableHead>
            <TableRow>
              <StyledTableCell>Squiggle</StyledTableCell>
              <StyledTableCell align='left'>Created Date</StyledTableCell>
              <StyledTableCell align='center'>Edit</StyledTableCell>
              <StyledTableCell align='center'>Delete</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {squiggleList.map((data, index) => {
              return (
                <StyledTableRow key={index}>
                  <StyledTableCell scope='row'>{data.content}</StyledTableCell>
                  <StyledTableCell align='left'>
                    {data.createdAt}
                  </StyledTableCell>
                  <StyledTableCell align='center'>
                    <EditIcon />
                  </StyledTableCell>
                  <StyledTableCell align='center'>
                    <DeleteIcon />
                  </StyledTableCell>
                </StyledTableRow>
              )
            })}
          </TableBody>
        </Table>
        <Button onClick={() => getMoreSquiggles()}>Load More</Button>
      </Marginals>
    </div>
  )
}

export default Squiggle
