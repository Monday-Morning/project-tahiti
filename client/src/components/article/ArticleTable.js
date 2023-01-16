import React from 'react';

// Libraries
import makeStyles from '@mui/styles/makeStyles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const ArticleTable = ({ data, blockFormatting }) => {
  const tableData = JSON.parse(data);

  const table = tableData
    .slice(3, -3)
    .replace(/\\\"/g, '')
    .split('],[')
    .map((row) => row.split('","'))
    .map((row) =>
      row.map((cell) => {
        return cell.replace(/"/g, '');
      }),
    );

  const { hasHeaderColumn, hasHeaderRow } = blockFormatting;

  const classes = useStyles();

  return (
    <TableContainer className={classes.wrapper} component={Paper}>
      <Table aria-label='simple table'>
        <TableBody>
          {table.map((row, _index) => (
            <TableRow>
              {row.map((data, index) => (
                <TableCell
                  className={
                    (_index === 0 && hasHeaderRow) ||
                    (index === 0 && hasHeaderColumn)
                      ? classes.bolder
                      : classes.lighter
                  }
                >
                  {data}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default ArticleTable;

const useStyles = makeStyles((theme) => ({
  wrapper: {
    margin: '2rem 0',
    [theme.breakpoints.down('sm')]: {
      width: '90vw',
    },
  },
  bolder: {
    fontWeight: 'bold',
  },
  lighter: {
    fontWeight: 'regular',
  },
}));