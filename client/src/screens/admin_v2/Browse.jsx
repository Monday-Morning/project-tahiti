import React, { useEffect, useState } from 'react';

import Link from 'next/link';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
// Material UI
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

import ArticleStatusMenu from '../../components/admin_v2/Browse/ArticleStatusMenu';
import DialogBox from '../../components/admin_v2/Browse/DialogBox';
import SnackBarAleart from '../../components/admin_v2/Common/SnackBarAleart';
import ArticleTags from '../../components/admin_v2/Common/Tags';
import Marginals from '../../components/admin_v2/Marginals/Marginals';
import { getGraphClient } from '../../context/ApolloContextProvider';
import updateArticlePublishStatus from '../../graphql/mutations/article/updateArticlePublishStatus';
import listAllArticles from '../../graphql/queries/article/listAllArticles';
import determineCategory from '../../utils/determineCategory';

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

const BrowseArticle = ({ articles, totalArticles }) => {
  const graphClient = getGraphClient(true);
  const [_articles, setArticles] = useState(articles);
  const [rowsPerPage, setRowsPerPage] = React.useState(25);
  const [row, setRow] = useState([]);
  const [page, setPage] = useState(0);

  const [openDialog, setOpenDialog] = useState(false);

  const [selectedArticle, setSelectedArticle] = useState({
    status: '',
    id: '',
    title: '',
  });

  const handleDialogOpen = (status, id, title) => {
    setSelectedArticle({ status, id, title });
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const handleChangePage = (_event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (_event) => {
    setRowsPerPage(+_event.target.value);
  };

  //snack bar aleart
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const [updatePublishStatusResponse, setUpdatePublishStatusResponse] =
    useState('');

  const updatePublishStatus = async ({ id, publishStatus }) => {
    try {
      const data = await graphClient.mutate({
        mutation: updateArticlePublishStatus,
        variables: {
          updateArticlePublishStatusId: id,
          publishStatus,
        },
      });
      setSuccess(true);
      setErrorMessage('Article updated successfully');
      setError(true);
      setUpdatePublishStatusResponse(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const rowData = _articles?.map(
      ({
        id,
        title,
        authors,
        categories,
        publishStatus,
        createdAt,
        adminTags,
        tags,
      }) => {
        const authorNames = authors?.map((author) => author.name).join(', ');
        const categoryNames = categories
          ?.map((category) => {
            if (category.number <= 6) {
              return determineCategory(category.number);
            }
          })
          .filter((category) => category)
          .join(', ');
        return {
          id,
          title,
          authorNames,
          categoryNames,
          publishStatus,
          adminTags,
          tags,
          createdAt: new Date(createdAt).toString().substring(4, 21),
        };
      },
    );
    if (rowData) setRow(rowData);
  }, [articles, _articles]);

  useEffect(() => {
    (async () => {
      const {
        data: { listAllArticles: articles },
      } = await graphClient.query({
        query: listAllArticles,
        variables: {
          limit: rowsPerPage,
          offset: rowsPerPage * page,
          onlyPublished: false,
        },
      });
      setArticles(articles);
    })();
  }, [rowsPerPage, page]);

  return (
    <div>
      <Marginals>
        <SnackBarAleart
          open={error}
          message={errorMessage}
          setOpen={setError}
          sentStatus={success}
        />
        <DialogBox
          openDialog={openDialog}
          handleDialogClose={handleDialogClose}
          selectedArticle={selectedArticle}
          updatePublishStatus={updatePublishStatus}
        />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} stickyHeader aria-label='sticky table'>
            <TableHead>
              <TableRow>
                <StyledTableCell sx={{ minWidth: '300px' }}>
                  Title
                </StyledTableCell>
                <StyledTableCell align='left'>Authors</StyledTableCell>
                <StyledTableCell align='left'>Categories</StyledTableCell>
                <StyledTableCell align='center'>Status</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {row?.map(
                ({
                  id,
                  title,
                  authorNames,
                  publishStatus,
                  categoryNames,
                  adminTags,
                  createdAt,
                }) => (
                  <StyledTableRow key={id}>
                    <StyledTableCell scope='row'>
                      {title}
                      <br />
                      <br />
                      <Box sx={{ display: 'flex' }}>
                        <Typography style={{ fontSize: '10px' }}>
                          Created On: {createdAt}
                        </Typography>
                        <Link href={`/admin_v2/edit/${id}`} passHref>
                          <a
                            target='_blank'
                            rel='noreferrer'
                            style={{ marginLeft: '10px', fontSize: '14px' }}
                          >
                            edit
                          </a>
                        </Link>
                      </Box>
                      <Box
                        sx={{
                          display: 'hidden',
                          '&:hover': { display: 'initial' },
                        }}
                      >
                        <ArticleTags
                          adminTags={adminTags}
                          tag={[]}
                          isAdmin={true}
                          id={id}
                        />
                      </Box>
                    </StyledTableCell>
                    <StyledTableCell align='left'>
                      {authorNames}
                    </StyledTableCell>
                    <StyledTableCell component='th' align='left'>
                      {categoryNames}
                    </StyledTableCell>
                    <StyledTableCell align='right' key={id + '123'}>
                      <ArticleStatusMenu
                        handleDialogOpen={handleDialogOpen}
                        publishStatus={publishStatus}
                        id={id}
                        title={title}
                        updatePublishStatusResponse={
                          updatePublishStatusResponse
                        }
                      />
                    </StyledTableCell>
                  </StyledTableRow>
                ),
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          component={Paper}
          rowsPerPageOptions={[25, 50, 100]}
          count={totalArticles}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Marginals>
    </div>
  );
};

export default BrowseArticle;
