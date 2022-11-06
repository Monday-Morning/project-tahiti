/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// libraries
import { alpha } from '@mui/material/styles';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Toolbar,
  Typography,
  Paper,
  Checkbox,
  IconButton,
  Tooltip,
} from '@mui/material';
import {
  Delete,
  FilterList,
  Edit,
  Publish,
  Archive,
  Comment,
  CircleSharp,
} from '@mui/icons-material';
import { visuallyHidden } from '@mui/utils';

import determineCategory from '../../utils/determineCategory';
import limitAuthor from '../../utils/limitAuthor';

//graphql
import { GraphClient } from '../../config/ApolloClient';
import listAllArticles from '../../graphql/queries/article/listAllArticles';
import countTotalArticles from '../../graphql/queries/article/countTotalArticles';
import getArticleLink from '../../utils/getArticleLink';

const headCells = [
  {
    id: 'title',
    numeric: false,
    disablePadding: true,
    label: 'Title',
  },
  {
    id: 'timestamps',
    numeric: false,
    disablePadding: false,
    label: 'Timestamps',
  },
  {
    id: 'authors',
    numeric: false,
    disablePadding: false,
    label: 'Authors',
  },
  {
    id: 'category',
    numeric: false,
    disablePadding: false,
    label: 'Category',
  },
  {
    id: 'comments',
    numeric: false,
    disablePadding: false,
    label: '',
    icon: <Comment />,
  },
  {
    id: 'status',
    numeric: false,
    disablePadding: true,
    label: 'Status',
  },
  {
    id: 'actions',
    numeric: false,
    disablePadding: true,
    label: 'Actions',
  },
];

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding='checkbox'>
          <Checkbox
            color='primary'
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label !== '' ? headCell.label : headCell.icon}
              {orderBy === headCell.id ? (
                <Box component='span' sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

const EnhancedTableToolbar = (props) => {
  const { numSelected } = props;

  const iconBar = (
    <>
      <Tooltip title='Edit'>
        <IconButton>
          <Edit />
        </IconButton>
      </Tooltip>
      <Tooltip title='Publish'>
        <IconButton>
          <Publish />
        </IconButton>
      </Tooltip>
      <Tooltip title='Archive'>
        <IconButton>
          <Archive />
        </IconButton>
      </Tooltip>
      <Tooltip title='Delete'>
        <IconButton>
          <Delete />
        </IconButton>
      </Tooltip>
    </>
  );

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity,
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color='inherit'
          variant='subtitle1'
          component='div'
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant='h6'
          id='tableTitle'
          component='div'
        >
          Articles
        </Typography>
      )}

      {numSelected <= 0 ? (
        <Tooltip title='Filter list'>
          <IconButton>
            <FilterList />
          </IconButton>
        </Tooltip>
      ) : numSelected === 1 ? (
        iconBar
      ) : (
        <Tooltip title='Delete'>
          <IconButton>
            <Delete />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};
<Tooltip title='Filter list'>
  <IconButton>
    <FilterList />
  </IconButton>
</Tooltip>;

export default function Browse() {
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('calories');
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(25);
  const [rowData, setRowData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [noOfArticles, setNoOfArticles] = useState(0);

  useEffect(() => {
    (async () => {
      setLoading(true);

      try {
        const {
          data: { countTotalArticles: articleCount },
        } = await GraphClient.query({
          query: countTotalArticles,
          variables: {
            onlyPublished: true,
          },
        });
        setNoOfArticles(articleCount);
      } catch (error) {
        console.log(error);
      }

      const {
        data: { listAllArticles: articleArray },
      } = await GraphClient.query({
        query: listAllArticles,
        variables: {
          onlyPublished: false,
          limit: rowsPerPage,
          offset: page * rowsPerPage,
        },
      });
      const data = articleArray?.reduce(
        (
          acc,
          {
            id,
            title,
            createdAt,
            authors,
            categories,
            comments,
            publishStatus,
          },
        ) => [
          ...acc,
          [
            id,
            title,
            new Date(createdAt).toDateString(),
            authors
              .map(({ name }) => limitAuthor(name))
              .reduce((acc, red) => acc + red + ', ', '')
              .slice(0, -2),
            categories
              .filter(({ number }) => number < 10)
              .map(({ number }) => determineCategory(number))
              .reduce((acc, red) => acc + red + ', ', '')
              .slice(0, -2),
            comments,
            publishStatus,
          ],
        ],
        [],
      );

      const rows = data?.map((row) => {
        const [
          id,
          title,
          createdAt,
          authors,
          categories,
          comments,
          publishStatus,
        ] = row;
        return {
          id,
          title,
          createdAt,
          authors,
          categories,
          comments,
          publishStatus,
        };
      });
      setRowData(rows);
      setLoading(false);
    })();
  }, [page, rowsPerPage]);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rowData.map((n, index) => index);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    console.log(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const statusColor = (status) => {
    if (status === 'UNPUBLISHED') {
      return 'yellow';
    }
    if (status === 'ARCHIVED') {
      return 'blue';
    }
    if (status === 'TRASHED') {
      return 'red';
    }
    return 'green';
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - 2000) : 0;

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby='tableTitle'
            size='medium'
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={noOfArticles}
            />
            {loading ? (
              <>loading</>
            ) : (
              <TableBody>
                {rowData?.map((row, index) => {
                  const isItemSelected = isSelected(index);
                  const labelId = `enhanced-table-checkbox-${index}`;
                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, index)}
                      role='checkbox'
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.id}
                      selected={isItemSelected}
                    >
                      <TableCell padding='checkbox'>
                        <Checkbox
                          color='primary'
                          checked={isItemSelected}
                          inputProps={{
                            'aria-labelledby': labelId,
                          }}
                        />
                      </TableCell>
                      <TableCell
                        component='th'
                        id={labelId}
                        scope='row'
                        padding='none'
                      >
                        <a
                          href={getArticleLink(row.id, row.title)}
                          target='_blank'
                        >
                          {row.title}
                        </a>
                      </TableCell>
                      <TableCell align='left'>{row.createdAt}</TableCell>
                      <TableCell align='left'>{row.authors}</TableCell>
                      <TableCell align='left'>{row.categories}</TableCell>
                      <TableCell align='left'>{row.comments}</TableCell>
                      <TableCell
                        align='center'
                        style={{ color: `${statusColor(row.status)}` }}
                      >
                        <Tooltip title={row.status}>
                          <CircleSharp />
                        </Tooltip>
                      </TableCell>
                      <TableCell
                        align='center'
                        style={{ color: `${statusColor(row.status)}` }}
                      >
                        <Tooltip title='Edit'>
                          <IconButton>
                            <Edit />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  );
                })}
                {emptyRows > 0 && (
                  <TableRow
                    style={{
                      height: 53 * emptyRows,
                    }}
                  >
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            )}
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 50]}
          component='div'
          count={noOfArticles}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
