import { useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import {
  Avatar,
  Box,
  Button,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  Link,
} from '@mui/material';
import getInitials from '../../../utils/get-initials';

const ReferRequestList = ({ referRequests, ...rest }) => {
  const [selectedReferRequestIds, setSelectedReferRequestIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = (event) => {
    let newSelectedReferRequestIds;

    if (event.target.checked) {
      newSelectedReferRequestIds = referRequests.map((referRequest) => referRequest.id);
    } else {
      newSelectedReferRequestIds = [];
    }

    setSelectedReferRequestIds(newSelectedReferRequestIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedReferRequestIds.indexOf(id);
    let newSelectedReferRequestIds = [];

    if (selectedIndex === -1) {
      newSelectedReferRequestIds = newSelectedReferRequestIds.concat(selectedReferRequestIds, id);
    } else if (selectedIndex === 0) {
      newSelectedReferRequestIds = newSelectedReferRequestIds.concat(selectedReferRequestIds.slice(1));
    } else if (selectedIndex === selectedReferRequestIds.length - 1) {
      newSelectedReferRequestIds = newSelectedReferRequestIds.concat(selectedReferRequestIds.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedReferRequestIds = newSelectedReferRequestIds.concat(
        selectedReferRequestIds.slice(0, selectedIndex),
        selectedReferRequestIds.slice(selectedIndex + 1),
      );
    }

    setSelectedReferRequestIds(newSelectedReferRequestIds);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedReferRequestIds.length === referRequests.length}
                    color="primary"
                    indeterminate={
                      selectedReferRequestIds.length > 0 && selectedReferRequestIds.length < referRequests.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Job Title</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Request date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {referRequests.slice(0, limit).map((referRequest) => (
                <TableRow
                  hover
                  key={referRequest.id}
                  selected={selectedReferRequestIds.indexOf(referRequest.id) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedReferRequestIds.indexOf(referRequest.id) !== -1}
                      onChange={(event) => handleSelectOne(event, referRequest.id)}
                      value="true"
                    />
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex',
                      }}
                    >
                      <Avatar src={referRequest.avatarUrl} sx={{ mr: 2 }}>
                        {getInitials(referRequest.applicantName)}
                      </Avatar>
                      <Typography color="textPrimary" variant="body1">
                        <Link href={referRequest.applicantLinkedin} underline="hover">
                          {referRequest.applicantName}
                        </Link>
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Link href={referRequest.jobLink} underline="hover">
                      {referRequest.jobTitle}
                    </Link>
                  </TableCell>
                  <TableCell>{referRequest.email}</TableCell>
                  <TableCell>{referRequest.phone}</TableCell>
                  <TableCell>{format(referRequest.appliedAt, 'dd/MM/yyyy')}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>

      {selectedReferRequestIds.length !== 0 ? (
        <Button sx={{ mt: 3 }} color="primary" variant="contained">
          Mark as complete
        </Button>
      ) : (
        <></>
      )}

      <TablePagination
        component="div"
        count={referRequests.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

ReferRequestList.propTypes = {
  referRequests: PropTypes.array.isRequired,
};

export default ReferRequestList;
