import { useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from '@mui/material';

const MyApplicationList = ({ applications, ...rest }) => {
  const [selectedApplicationIds, setSelectedApplicationIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = (event) => {
    let newSelectedApplicationIds;

    if (event.target.checked) {
      newSelectedApplicationIds = applications.map((application) => application.id);
    } else {
      newSelectedApplicationIds = [];
    }

    setSelectedApplicationIds(newSelectedApplicationIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedApplicationIds.indexOf(id);
    let newSelectedApplicationIds = [];

    if (selectedIndex === -1) {
      newSelectedApplicationIds = newSelectedApplicationIds.concat(selectedApplicationIds, id);
    } else if (selectedIndex === 0) {
      newSelectedApplicationIds = newSelectedApplicationIds.concat(selectedApplicationIds.slice(1));
    } else if (selectedIndex === selectedApplicationIds.length - 1) {
      newSelectedApplicationIds = newSelectedApplicationIds.concat(selectedApplicationIds.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedApplicationIds = newSelectedApplicationIds.concat(
        selectedApplicationIds.slice(0, selectedIndex),
        selectedApplicationIds.slice(selectedIndex + 1),
      );
    }

    setSelectedApplicationIds(newSelectedApplicationIds);
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
                    checked={selectedApplicationIds.length === applications.length}
                    color="primary"
                    indeterminate={
                      selectedApplicationIds.length > 0 && selectedApplicationIds.length < applications.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>Company Name</TableCell>
                <TableCell>Job Title</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Referrer</TableCell>
                <TableCell>Application date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {applications.slice(0, limit).map((application) => (
                <TableRow hover key={application.id} selected={selectedApplicationIds.indexOf(application.id) !== -1}>
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedApplicationIds.indexOf(application.id) !== -1}
                      onChange={(event) => handleSelectOne(event, application.id)}
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
                      <Avatar src={application.avatarUrl} sx={{ mr: 2 }} />
                      <Typography color="textPrimary" variant="body1">
                        {application.name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>{application.title}</TableCell>
                  <TableCell>
                    {`${application.address.city}, ${application.address.state}, ${application.address.country}`}
                  </TableCell>
                  <TableCell>{application.referrer}</TableCell>
                  <TableCell>{format(application.appliedAt, 'dd/MM/yyyy')}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>

      <TablePagination
        component="div"
        count={applications.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

MyApplicationList.propTypes = {
  applications: PropTypes.array.isRequired,
};

export default MyApplicationList;
