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

const trans = [
  {
    id: uuid(),
    ref: 'CDD1049',
    amount: 30.5,
    project: {
      name: 'Ocean Power',
    },
    createdAt: 1555016400000,
    status: 'pending',
  },
  {
    id: uuid(),
    ref: 'CDD1048',
    amount: 25.1,
    project: {
      name: 'Whale Defender',
    },
    createdAt: 1555016400000,
    status: 'delivered',
  },
  {
    id: uuid(),
    ref: 'CDD1047',
    amount: 10.99,
    project: {
      name: 'Green City',
    },
    createdAt: 1554930000000,
    status: 'refunded',
  },
  {
    id: uuid(),
    ref: 'CDD1046',
    amount: 96.43,
    project: {
      name: 'Nanaimo Landfill Gas Capture',
    },
    createdAt: 1554757200000,
    status: 'pending',
  },
  {
    id: uuid(),
    ref: 'CDD1045',
    amount: 32.54,
    project: {
      name: 'NL Climate & Ecosystem Conservancy',
    },
    createdAt: 1554670800000,
    status: 'delivered',
  },
  {
    id: uuid(),
    ref: 'CDD1044',
    amount: 16.76,
    project: {
      name: 'Thermal Residential Heating Aggregation',
    },
    createdAt: 1554670800000,
    status: 'delivered',
  },
];

const LatestTransactions = (props) => (
  <Card {...props}>
    <CardHeader title="Latest Transactions" />
    <PerfectScrollbar>
      <Box sx={{ minWidth: 800 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Trans Ref</TableCell>
              <TableCell>Project</TableCell>
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
            {trans.map((tran) => (
              <TableRow hover key={tran.id}>
                <TableCell>{tran.ref}</TableCell>
                <TableCell>{tran.project.name}</TableCell>
                <TableCell>{format(tran.createdAt, 'dd/MM/yyyy')}</TableCell>
                <TableCell>
                  <SeverityPill
                    color={
                      (tran.status === 'delivered' && 'success') || (tran.status === 'refunded' && 'error') || 'warning'
                    }
                  >
                    {tran.status}
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

export default LatestTransactions;
