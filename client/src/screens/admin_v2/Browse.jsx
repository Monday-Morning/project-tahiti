import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// Material UI
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TablePagination from '@mui/material/TablePagination';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ArticleStatusMenu from '../../components/admin_v2/Browse/ArticleStatusMenu';
import DialogBox from '../../components/admin_v2/Browse/DialogBox';
import ArticleTags from '../../components/admin_v2/Common/Tags';

import determineCategory from '../../utils/determineCategory';
import Marginals from '../../components/admin_v2/Marginals/Marginals';
import { GraphClient } from '../../config/ApolloClient';
import listAllArticles from '../../graphql/queries/article/listAllArticles';
import updateArticlePublishStatus from '../../graphql/mutations/article/updateArticlePublishStatus';
import SnackBarAleart from '../../components/admin_v2/Common/SnackBarAleart';

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
  const [_articles, setArticles] = useState(articles);
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

  //snack bar aleart
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const [updatePublishStatusResponse, setUpdatePublishStatusResponse] =
    useState('');

  const updatePublishStatus = async ({ id, publishStatus }) => {
    try {
      const data = await GraphClient.mutate({
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
      } = await GraphClient.query({
        query: listAllArticles,
        variables: { limit: 25, offset: 25 * page, onlyPublished: false },
      });
      setArticles(articles);
    })();
  }, [page]);

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
                        <ArticleTags underlineVisible={true} tag={adminTags} />
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
          rowsPerPageOptions={[25]}
          count={totalArticles}
          rowsPerPage={25}
          page={page}
          onPageChange={handleChangePage}
          // onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Marginals>
    </div>
  );
};

export default BrowseArticle;
