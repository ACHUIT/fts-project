import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Box, Link } from '@mui/material';
import { styled } from '@mui/system';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  backgroundColor: 'black',
  color: 'white',
  border: '1px solid #DDB926',
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  '&:nth-of-type(even)': {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: 'black',
  color: 'white',
  padding: theme.spacing(2),
  border: '1px solid #DDB926',
}));

const MoveToRunProcessTable = () => {
  const rows = [
    {
      category: 'Back-end',
      criteria: 'KT done',
      owners: 'Global credit Team',
      dueDate: '04/15',
      status: 'Done',
      comment: '',
    },
    {
      category: 'Back-end',
      criteria: 'Reverse KT done',
      owners: 'Global credit Team',
      dueDate: '04/15',
      status: 'Done',
      comment: '',
    },
    {
      category: 'Back-end',
      criteria: 'Data mapping provided (Source to target lineage)',
      owners: 'Global credit Team',
      dueDate: '04/15',
      status: 'Done',
      comment: (
        <Link href="https://e-loreal.com" target="_blank" rel="noopener noreferrer">
          Confluence link - Supply Chain Data Domain Home - Supply Chain Data Domain - Confluence (e-loreal.com)
        </Link>
      ),
    },
    {
      category: 'Back-end',
      criteria: 'Threshold number of incidents respected during the hypercare',
      owners: 'Global credit Team',
      dueDate: '04/15',
      status: 'Done',
      comment: '1 incident open',
    },
    {
      category: 'Back-end',
      criteria: 'Access provided for FTS in required projects',
      owners: 'Global credit Team',
      dueDate: '04/15',
      status: 'Done',
      comment: '',
    },
    {
      category: 'Back-end',
      criteria: 'SLA is defined for each objects',
      owners: 'Global credit Team',
      dueDate: '04/15',
      status: 'N/A',
      comment: 'Not Applicable - checked with Soupayan',
    },
    {
      category: 'Back-end',
      criteria: 'Change Advisory Board for future enhancement, incident and problem tickets',
      owners: 'Global credit Team',
      dueDate: '04/15',
      status: 'Done',
      comment: 'Configured in SNOW',
    },
    {
      category: 'Front-end',
      criteria: 'KT done',
      owners: 'Global credit Team',
      dueDate: '04/15',
      status: 'Done',
      comment: '',
    },
    {
      category: 'Front-end',
      criteria: 'Reverse KT done',
      owners: 'Global credit Team',
      dueDate: '04/15',
      status: 'Done',
      comment: '',
    },
    {
      category: 'Front-end',
      criteria: 'Data mapping provided (Source to target lineage)',
      owners: 'Global credit Team',
      dueDate: '04/15',
      status: 'Done',
      comment: (
        <Link href="https://e-loreal.com" target="_blank" rel="noopener noreferrer">
          Confluence link - Supply Chain Data Domain Home - Supply Chain Data Domain - Confluence (e-loreal.com)
        </Link>
      ),
    },
    {
      category: 'Front-end',
      criteria: 'Threshold number of incidents respected during the hypercare',
      owners: 'Global credit Team',
      dueDate: '04/15',
      status: 'Done',
      comment: '1 incident open',
    },
    {
      category: 'Front-end',
      criteria: 'Access provided for FTS in required projects',
      owners: 'Global credit Team',
      dueDate: '04/15',
      status: 'Done',
      comment: '',
    },
    {
      category: 'Front-end',
      criteria: 'SLA is defined for each reports',
      owners: 'Global credit Team',
      dueDate: '04/15',
      status: 'N/A',
      comment: 'Not Applicable - checked with Soupayan',
    },
    {
      category: 'Front-end',
      criteria: 'Change Advisory Board for future enhancement, incident and problem tickets',
      owners: 'Global credit Team',
      dueDate: '04/15',
      status: 'Done',
      comment: 'Configured in SNOW',
    },
  ];

  const renderRows = (category) => (
    rows
      .filter(row => row.category === category)
      .map((row, index) => (
        <StyledTableRow key={index}>
          <StyledTableCell>{row.criteria}</StyledTableCell>
          <StyledTableCell>{row.owners}</StyledTableCell>
          <StyledTableCell>{row.dueDate}</StyledTableCell>
          <StyledTableCell>{row.status}</StyledTableCell>
          <StyledTableCell>{row.comment}</StyledTableCell>
        </StyledTableRow>
      ))
  );

  return (
    <StyledPaper sx={{ margin: "5px" }}>
      <Box sx={{ textAlign: 'center', marginBottom: 2 }}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          TRANSITION FROM HYPERCARE TO RUN | ACCEPTANCE CRITERIA
        </Typography>
      </Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell colSpan={5} align="center" sx={{ fontWeight: "bold", fontSize: "20px" }}>
                Back-end
              </StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>Criteria</StyledTableCell>
              <StyledTableCell>Owners</StyledTableCell>
              <StyledTableCell>Due date</StyledTableCell>
              <StyledTableCell>Status</StyledTableCell>
              <StyledTableCell>Comment</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {renderRows('Back-end')}
          </TableBody>
        </Table>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell colSpan={5} align="center" sx={{ fontWeight: "bold", fontSize: "20px" }}>
                Front-end
              </StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>Criteria</StyledTableCell>
              <StyledTableCell>Owners</StyledTableCell>
              <StyledTableCell>Due date</StyledTableCell>
              <StyledTableCell>Status</StyledTableCell>
              <StyledTableCell>Comment</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {renderRows('Front-end')}
          </TableBody>
        </Table>
      </TableContainer>
    </StyledPaper>
  );
};

export default MoveToRunProcessTable;
