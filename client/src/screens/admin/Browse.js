/* eslint-disable no-nested-ternary */
import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import EditIcon from '@mui/icons-material/Edit';
import PublishIcon from '@mui/icons-material/Publish';
import ArchiveIcon from '@mui/icons-material/Archive';
import CommentIcon from '@mui/icons-material/Comment';
import CircleSharpIcon from '@mui/icons-material/CircleSharp';

function createData(name, calories, fat, carbs, protein, status) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    status,
  };
}

const rows = [
  createData(
    'RamaKruna Behera and Debabrata',
    '05/04/2022, 12:25pm',
    'Siddharth, Sriram, Rishika',
    'Fests, Campus Buzz',
    0,
    'Unpublished',
  ),
  createData(
    'RamaKrushna Behera and Debabrata',
    '05/04/2022, 12:25pm',
    'Siddharth, Sriram, Rishika',
    'Fests, Campus Buzz',
    0,
    'Unpublished',
  ),
  createData(
    'RamaKrushna Behera and Debabrata',
    '05/04/2022, 12:25pm',
    'Siddharth, Sriram, Rishika',
    'Fests, Campus Buzz',
    0,
    'Unpublished and Approved',
  ),
  createData(
    'RamaKrushna Behera and Debabrata',
    '05/04/2022, 12:25pm',
    'Siddharth, Sriram, Rishika',
    'Fests, Campus Buzz',
    0,
    'Unpublished',
  ),
  createData(
    'RamaKrushna Behera and Debabrata',
    '05/04/2022, 12:25pm',
    'Siddharth, Sriram, Rishika',
    'Fests, Campus Buzz',
    0,
    'Published',
  ),
  createData(
    'RamaKrushna Behera and Debabrata',
    '05/04/2022, 12:25pm',
    'Siddharth, Sriram, Rishika',
    'Fests, Campus Buzz',
    0,
    'Unpublished and Approved',
  ),
  createData(
    'RamaKrushna Behera and Debabrata',
    '05/04/2022, 12:25pm',
    'Siddharth, Sriram, Rishika',
    'Fests, Campus Buzz',
    0,
    'Published',
  ),
  createData(
    'RamaKrushna Behera and Debabrata',
    '05/04/2022, 12:25pm',
    'Siddharth, Sriram, Rishika',
    'Fests, Campus Buzz',
    0,
    'Unpublished',
  ),
  createData(
    'RamaKrushna Behera and Debabrata',
    '05/04/2022, 12:25pm',
    'Siddharth, Sriram, Rishika',
    'Fests, Campus Buzz',
    0,
    'Unpublished',
  ),
  createData(
    'RamaKrushna Behera and Debabrata',
    '05/04/2022, 12:25pm',
    'Siddharth, Sriram, Rishika',
    'Fests, Campus Buzz',
    0,
    'Unpublished and Approved',
  ),
  createData(
    'RamaKrushna Behera and Debabrata',
    '05/04/2022, 12:25pm',
    'Siddharth, Sriram, Rishika',
    'Fests, Campus Buzz',
    0,
    'Unpublished',
  ),
  createData(
    'RamaKrushna Behera and Debabrata',
    '05/04/2022, 12:25pm',
    'Siddharth, Sriram, Rishika',
    'Fests, Campus Buzz',
    0,
    'Unpublished',
  ),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'title',
    numeric: false,
    disablePadding: true,
    label: 'Title',
  },
  {
    id: 'timestamps',
    numeric: true,
    disablePadding: false,
    label: 'Timestamps',
  },
  {
    id: 'authors',
    numeric: true,
    disablePadding: false,
    label: 'Authors',
  },
  {
    id: 'category',
    numeric: true,
    disablePadding: false,
    label: 'Category',
  },
  {
    id: 'comments',
    numeric: true,
    disablePadding: false,
    label: '',
    icon: <CommentIcon />,
  },
  {
    id: 'status',
    numeric: true,
    disablePadding: false,
    label: 'Status',
  },
  {
    id: 'actions',
    numeric: true,
    disablePadding: false,
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

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const EnhancedTableToolbar = (props) => {
  const { numSelected } = props;

  const iconBar = (
    <>
      <Tooltip title='Edit'>
        <IconButton>
          <EditIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title='Publish'>
        <IconButton>
          <PublishIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title='Archive'>
        <IconButton>
          <ArchiveIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title='Delete'>
        <IconButton>
          <DeleteIcon />
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
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      ) : numSelected === 1 ? (
        iconBar
      ) : (
        <Tooltip title='Delete'>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};
<Tooltip title='Filter list'>
  <IconButton>
    <FilterListIcon />
  </IconButton>
</Tooltip>;

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function Browse() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n, index) => index);
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
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const statusColor = (status) => {
    if (status === 'Unpublished') {
      return 'red';
    }
    if (status === 'Unpublished and Approved') {
      return 'yellow';
    }
    return 'green';
  };

  // const handleChangeDense = (event) => {
  //     setDense(event.target.checked);
  // };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

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
              rowCount={rows.length}
            />
            <TableBody>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(index);
                  const labelId = `enhanced-table-checkbox-${index}`;
                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, index)}
                      role='checkbox'
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={index}
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
                        {row.name}
                      </TableCell>
                      <TableCell align='right'>{row.calories}</TableCell>
                      <TableCell align='right'>{row.fat}</TableCell>
                      <TableCell align='right'>{row.carbs}</TableCell>
                      <TableCell align='right'>{row.protein}</TableCell>
                      <TableCell
                        align='right'
                        style={{ color: `${statusColor(row.status)}` }}
                      >
                        <Tooltip title={row.status}>
                          <CircleSharpIcon />
                        </Tooltip>
                      </TableCell>
                      <TableCell
                        align='right'
                        style={{ color: `${statusColor(row.status)}` }}
                      >
                        <Tooltip title='Edit'>
                          <IconButton>
                            <EditIcon />
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
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component='div'
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
