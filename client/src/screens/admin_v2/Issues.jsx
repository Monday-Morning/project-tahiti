import React, { useEffect, useState } from 'react';

//graphql
import { GraphClient } from '../../config/ApolloClient';
import getIssueById from '../../graphql/queries/issues/getIssueById';
import removeIssue from '../../graphql/mutations/issues/removeIssue';
import getLatestIssues from '../../graphql/queries/issues/getLatestIssues';

//components
import Marginals from '../../components/admin_v2/Marginals/Marginals';
import IssueDialogBox from '../../components/admin_v2/issues/IssueDialogBox';

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
  const [dialogBoxOpen, setDialogBoxOpen] = useState(false);
  const [seletedIssue, setSelectedIssue] = useState({
    name: '',
    articles: [],
    featured: [],
  });
  const [action, setAction] = useState('Add');
  const [issueList, setIssueList] = useState(issues || []);
  const [offset, setOffset] = useState(0);

  const getIssueFromId = async (id) => {
    setAction('Update');
    setDialogBoxOpen(true);
    const {
      data: { getIssueByID: issue },
    } = await GraphClient.query({
      query: getIssueById,
      variables: {
        getIssueByIdId: id,
      },
    });
    setSelectedIssue(issue);
  };

  const deleteIssue = async (id) => {
    alert('Are you sure you want to delete this issue?');

    await GraphClient.mutate({
      mutation: removeIssue,
      variables: {
        removeIssueId: id,
      },
    });
    setIssueList(issueList.filter((issue) => issue.id !== id));
  };

  const getMoreissues = async () => {
    const {
      data: { getLatestIssues: issues },
    } = await GraphClient.query({
      query: getLatestIssues,
      variables: {
        limit: 9,
        offset: offset + 10,
      },
    });
    setOffset((prev) => prev + 10);
    setIssueList((prev) => [...prev, ...issues]);
  };

  return (
    <div>
      <Marginals>
        <IssueDialogBox
          seletedIssue={seletedIssue}
          dialogBoxOpen={dialogBoxOpen}
          setDialogBoxOpen={setDialogBoxOpen}
          action={action}
          issueList={issueList}
          setIssueList={setIssueList}
        />
        <Button
          sx={{
            marginBottom: '10px',
          }}
          variant='contained'
          color='primary'
          onClick={() => {
            setAction('Add'), setDialogBoxOpen(true);
          }}
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
            {issueList.map(({ id, name, startDate, endDate, isPublished }) => (
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
                  <EditIcon onClick={() => getIssueFromId(id)} />
                </StyledTableCell>
                <StyledTableCell align='center'>
                  <DeleteIcon onClick={() => deleteIssue(id)} />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>

        <Button onClick={getMoreissues}>Load More</Button>
      </Marginals>
    </div>
  );
};

export default Issues;
