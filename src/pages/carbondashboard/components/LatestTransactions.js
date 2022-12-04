import { format } from 'date-fns';
import { v4 as uuid } from 'uuid';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip,
} from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import SeverityPill from '../SeverityPill';
import { useEffect, useState } from 'react';

const LatestTransactions = (props) => {
  const [currentUserTrans, setCurrentUserTrans] = useState([]);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem('users'));
    const systemRole = localStorage.getItem('currentrole');
    const currentUser = localStorage.getItem('currentuser');
    if (systemRole !== users[currentUser].role) {
      alert('Role not match, please try another incognito window');
    }
    setCurrentUserTrans(users[currentUser].transactions);
  }, []);

  return (
    <Card {...props}>
      <CardHeader title="Latest Transactions" />
      <PerfectScrollbar>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Trans Ref</TableCell>
                <TableCell>Project</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell sortDirection="desc">
                  <Tooltip enterDelay={300} title="Sort">
                    <TableSortLabel active direction="desc">
                      Date
                    </TableSortLabel>
                  </Tooltip>
                </TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {currentUserTrans.map((tran) => (
                <TableRow hover key={tran.id}>
                  <TableCell>{tran.ref}</TableCell>
                  <TableCell>{tran.projectName}</TableCell>
                  <TableCell>{tran.amount}</TableCell>
                  <TableCell>{tran.date}</TableCell>
                  <TableCell>
                    <SeverityPill
                      color={
                        (tran.type === 'delivered' && 'success') || (tran.type === 'refunded' && 'error') || 'warning'
                      }
                    >
                      {tran.type}
                    </SeverityPill>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          p: 2,
        }}
      >
        <Button color="primary" endIcon={<ArrowRightIcon fontSize="small" />} size="small" variant="text">
          View all
        </Button>
      </Box>
    </Card>
  );
};

export default LatestTransactions;
