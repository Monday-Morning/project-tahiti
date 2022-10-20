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
    .replaceAll(`\"`, '')
    .split('],[')
    .map((row) => row.split(','));

  const column = Object.keys(table);

  const createTable = () => {
    return table.map((data) => {
      if (table.indexOf(data)) {
        return (
          <TableRow>
            {column.map((colData) => {
              if (data[colData]) {
                if (!blockFormatting.hasHeaderColumn) {
                  return <TableCell>{data[colData]}</TableCell>;
                } else {
                  return (
                    <TableCell className={!parseInt(colData)? classes.bolder : classes.lighter}>
                      {data[colData]}
                    </TableCell>
                  );
                }
              }
            })}
          </TableRow>
        );
      }else{
        return (
          <TableRow>
            {column.map((colData) => {
              if (data[colData]) {
                if (!blockFormatting.hasHeaderColumn) {
                  return <TableCell className={!blockFormatting.hasHeaderRow? classes.lighter:classes.bolder}>{data[colData]}</TableCell>;
                } else {
                  if (!parseInt(colData)) {
                    return (
                      <TableCell className={classes.bolder}>
                        {data[colData]}
                      </TableCell>
                    );
                  } else {
                    return <TableCell className={!blockFormatting.hasHeaderRow? classes.lighter:classes.bolder}>{data[colData]}</TableCell>;
                  }
                }
              }
            })}
          </TableRow>
        );
      }
    });
  };

  const classes = useStyles();

  return (
    <TableContainer className={classes.wrapper} component={Paper}>
      <Table aria-label='simple table'>
        <TableBody>{createTable()}</TableBody>
      </Table>
    </TableContainer>
  );
};
export default ArticleTable;

const useStyles = makeStyles(() => ({
  wrapper: {
    margin: '3rem',
    maxWidth: '90%',
  },
  bolder: {
    fontWeight: 'bold',
  },
  lighter: {
    fontWeight: 'regular',
  },
}));
