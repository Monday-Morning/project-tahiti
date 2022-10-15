import React from 'react';

// libraries
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
  const columnh = Object.values(table[0]);

  const ThData = () => {
    return columnh.map((data) => {
      if (!blockFormatting.hasHeaderRow) {
        return (
          <TableCell className={classes.lighter} key={data}>
            {data}
          </TableCell>
        );
      } else {
        return (
          <TableCell className={classes.bolder} key={data}>
            {data}
          </TableCell>
        );
      }
    });
  };

  const tdData = () => {
    return table.map((data) => {
      if (table.indexOf(data)) {
        return (
          <TableRow>
            {column.map((v) => {
              if (data[v]) {
                if (!blockFormatting.hasHeaderColumn) {
                  return <TableCell>{data[v]}</TableCell>;
                } else {
                  if (!v) {
                    return (
                      <TableCell className={classes.bolder}>
                        {data[v]}
                      </TableCell>
                    );
                  } else {
                    return <TableCell>{data[v]}</TableCell>;
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
        <TableBody>
          <TableRow>{ThData()}</TableRow>
          {tdData()}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default ArticleTable;

const useStyles = makeStyles(() => ({
  wrapper: {
    margin: '3rem',
    // width: '95%'
    maxWidth: '90%',
  },
  bolder: {
    fontWeight: 'bold',
  },
  lighter: {
    fontWeight: 'regular',
  },
}));
