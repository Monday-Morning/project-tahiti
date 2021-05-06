import React from 'react';

import { Card, CardContent, makeStyles, Typography } from '@material-ui/core';
import { ChevronLeft, ChevronRight } from 'react-feather';

function Calendar() {
  const classes = useStyles();
  return (
    <Card className={classes.calendar}>
      <CardContent>
        <Typography variant='h1'>Events</Typography>
        <div className={classes.monthRow}>
          <Typography variant='h4'>May 2021</Typography>
          <div className={classes.calendarActions}>
            <ChevronLeft className={classes.calendarAction} />
            <ChevronRight className={classes.calendarAction} />
          </div>
        </div>
        <table className={classes.table}>
          <thead>
            <tr>
              <th>Mo</th>
              <th>Tu</th>
              <th>We</th>
              <th>Th</th>
              <th>Fr</th>
              <th>Sa</th>
              <th>Su</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>1</td>
              <td>2</td>
            </tr>
            <tr>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
              <td className={classes.today}>7</td>
              <td>8</td>
              <td>9</td>
            </tr>
            <tr>
              <td>10</td>
              <td>11</td>
              <td>12</td>
              <td>13</td>
              <td>14</td>
              <td>15</td>
              <td>16</td>
            </tr>
            <tr>
              <td>17</td>
              <td>18</td>
              <td>19</td>
              <td>20</td>
              <td>21</td>
              <td>22</td>
              <td>23</td>
            </tr>
            <tr>
              <td>24</td>
              <td>25</td>
              <td>26</td>
              <td>27</td>
              <td>28</td>
              <td>29</td>
              <td>30</td>
            </tr>
            <tr>
              <td>31</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <div className={classes.eventIndex}>
          <div className={classes.eventType}>
            <div className={classes.redDot}></div>
            Insti Events
          </div>
          <div className={classes.eventType}>
            <div className={classes.yellowDot}></div>
            Club Events
          </div>
          <div className={classes.eventType}>
            <div className={classes.greenDot}></div>
            Insti Holidays
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
export default Calendar;

const useStyles = makeStyles((theme) => ({
  calendar: {
    boxShadow: theme.shadows[0],
    backgroundColor: theme.palette.common.white,
    height: '100%',
  },
  monthRow: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '1.5rem',
  },
  calendarAction: {
    marginLeft: '1rem',
  },
  table: {
    marginTop: '1.5rem',
    width: '100%',
    '& th': {
      // textAlign: 'left',
      color: theme.palette.secondary.neutral50,
    },
    '& td': {
      fontSize: '14px',
      fontWeight: '500',
      paddingTop: '0.85rem',
      paddingBottom: '0.85rem',
      textAlign: 'center',
    },
  },
  today: {
    background: theme.palette.primary.blue50,
    color: theme.palette.common.white,
    borderRadius: '50%',
  },
  eventIndex: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '1rem',
  },
  eventType: {
    display: 'flex',
    alignItems: 'center',
  },
  redDot: {
    backgroundColor: theme.palette.accent.red,
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    marginRight: '0.5rem',
  },
  yellowDot: {
    backgroundColor: theme.palette.accent.yellow,
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    marginRight: '0.5rem',
  },
  greenDot: {
    backgroundColor: theme.palette.accent.green,
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    marginRight: '0.5rem',
  },
}));
