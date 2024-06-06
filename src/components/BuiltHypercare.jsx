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
      criteria: 'BTD framework compliant',
      owners: 'Global credit Team',
      dueDate: '01/12',
      status: 'Done',
      comment: 'Compliant, email sent',
    },
    {
      category: 'Back-end',
      criteria: 'DevOps toolchain compliant with DevOps process',
      owners: 'Global credit Team',
      dueDate: '01/12',
      status: 'Done',
      comment: '',
    },
    {
      category: 'Back-end',
      criteria: 'Snow configured',
      owners: 'Global credit Team',
      dueDate: '01/12',
      status: 'Done',
      comment: 'Application service # SNSVC0019005',
    },
    {
      category: 'Back-end',
      criteria: 'Scope shared',
      owners: 'Global credit Team',
      dueDate: '03/31',
      status: 'Done',
      comment: 'The back end GCP scope is shared.',
    },
    {
      category: 'Back-end',
      criteria: 'Documentation provided',
      owners: 'Global credit Team',
      dueDate: '03/31',
      status: 'Done',
      comment: (
        <Link href="https://e-loreal.com" target="_blank" rel="noopener noreferrer">
          Link to confluence - Credit Management - Supply Chain Data Domain - Confluence
        </Link>
      ),
    },
    {
      category: 'Back-end',
      criteria: 'Compliant with FTS monitoring standards',
      owners: 'Global credit Team',
      dueDate: '04/09',
      status: 'Done',
      comment: 'Compliant, email sent',
    },
    {
      category: 'Front-end',
      criteria: 'Snow configured',
      owners: 'Global credit Team',
      dueDate: '01/12',
      status: 'Done',
      comment: 'Application service #SNSVC0019005',
    },
    {
      category: 'Front-end',
      criteria: 'Scope shared',
      owners: 'Global credit Team',
      dueDate: '01/12',
      status: 'Done',
      comment: '4 PBI Reports -\n- Credit days\n- Credit management\n- DGO\n- Account receivables VS Credit limit',
    },
    {
      category: 'Front-end',
      criteria: 'Documentation provided',
      owners: 'Global credit Team',
      dueDate: '03/31',
      status: 'Done',
      comment: (
        <Link href="https://e-loreal.com" target="_blank" rel="noopener noreferrer">
          Confluence link - Supply Chain Data Domain Home - Supply Chain Data Domain - Confluence (e-loreal.com)
        </Link>
      ),
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
    <StyledPaper sx={{margin:"5px"}}>
      <Box sx={{ textAlign: 'center', marginBottom: 2 }}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          TRANSITION FROM BUILD TO HYPERCARE | ACCEPTANCE CRITERIA
        </Typography>
      </Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell colSpan={5} align="center" sx={{fontWeight:"bold", fontSize:"20px"}}>
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
            <TableRow>
              <StyledTableCell colSpan={5} align="center" sx={{fontWeight:"bold", fontSize:"20px"}}>
                Front-end
              </StyledTableCell>
            </TableRow>
            {renderRows('Front-end')}
          </TableBody>
        </Table>
      </TableContainer>
    </StyledPaper>
  );
};

export default MoveToRunProcessTable;
