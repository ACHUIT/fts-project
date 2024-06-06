import React from 'react';
import { Box, Grid, Typography,CardContent, Divider, Paper, Stack } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';
import DoneIcon from '@mui/icons-material/Done';
import CheckIcon from '@mui/icons-material/Check';
import { styled } from '@mui/system';

const Section = styled(Paper)(({ theme }) => ({
  backgroundColor: 'rgba(175, 151, 16, 0.1)', 
  border: '1px solid #DDB926',
  color: 'white',
  padding: '10px',
  margin: '10px 0',
  
}));

const MoveToRunProcess = () => {
  return (
    <Box sx={{ padding: 4, backgroundColor: 'black', color: 'white',margin:"5px",paddingTop:"15px"}}>
      <Typography variant="h6" gutterBottom sx={{textAlign:"center",fontWeight:"bolder"}}>
        MOVE TO RUN PROCESS | DEFINITION AND OVERVIEW
      </Typography>
      <Stack direction="row" spacing={5}  backgroundColor= 'rgba(175, 151, 16, 0.1)' border= '1px solid #DDB926' padding="10px">
        <Stack sx={{alignItems:"center",justifyContent:"center"}}>
          <TipsAndUpdatesOutlinedIcon/>
        </Stack>
        <Stack direction="column" spacing={1}>
      <Typography variant="h5" fontWeight="Bold">
        3 phases:
      </Typography>
      <Typography variant="body1">
        1. <strong>Build/Pre-Hypercare:</strong> between the build team & the run team to validate the 1st Go/NoGo.
      </Typography>
      <Typography variant="body1">
        2. <strong>Hypercare:</strong> transition between end of build and start of run estimated to 2 sprints.
        Incidents handled by build team. 2nd Go/NoGo to check acceptance criteria.
      </Typography>
      <Typography variant="body1">
        3. <strong>Run Phase:</strong> incidents handled by FTS.
      </Typography>
      </Stack> 
      </Stack>
      <Divider sx={{ marginY: 2, borderColor: 'white' }} />
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Section>
            <CardContent>
              <Typography variant="h6" gutterBottom textAlign="center" fontWeight="Bold"> 
                Build/Pre-Hypercare
              </Typography>
                <Stack direction="column" spacing={1}>
                <Stack direction="row" spacing={1}>
                  <DoneIcon/> <Typography>Must be based on the technical BTD framework</Typography><br />
                </Stack>
                <Stack direction="row" spacing={1}>
                <DoneIcon/><Typography>Hypercare scope shared by the UC to FTS</Typography><br />
                </Stack>
                <Stack direction="row" spacing={1}>
                <DoneIcon/><Typography>SNOW configured</Typography><br />
                </Stack>
                <Stack direction="row" spacing={1}>
                <DoneIcon/><Typography>AD Group provided</Typography><br />
                </Stack>
                <Stack direction="row" spacing={1}>
                <DoneIcon/><Typography>Documentation provided: run book, technical documentation and KT planning</Typography><br />
                </Stack>
                <Stack direction="row" spacing={1}>
                <DoneIcon/><Typography>FTS team responsible to review the documentation before Hypercare KT</Typography><br />
                </Stack>
                <Stack direction="row" spacing={1}>
                <DoneIcon/><Typography>Complete the acceptance criteria for the 1st Go/NoGo</Typography>
                </Stack>
                </Stack>
              <Box sx={{ marginTop: 2, textAlign: 'center' }}>
                <Typography variant="caption" fontWeight="Bold" sx={{ color: 'white' }}>Build team (UC)</Typography>
              </Box>
            </CardContent>
          </Section>
        </Grid>
        <Grid item xs={12} md={4}>
          <Section>
            <CardContent>
              <Typography variant="h6" fontWeight="Bold" gutterBottom textAlign="center">
                Hypercare phase
              </Typography>
              <Stack direction="column" spacing={1}>
               <strong>First Sprint:</strong><br />
              <Stack direction="row" spacing={1}>
               <DoneIcon/><Typography>KT: build team KT to the run team</Typography><br />
               </Stack> 
               <Stack direction="row" spacing={1}>
                <DoneIcon/><Typography>Reverse KT: FTS team raise their questions and concerns to the UC team</Typography><br />
                </Stack>
                <strong>2nd Sprint:</strong><br />
                <Stack direction="row" spacing={1}>
                 <DoneIcon/><Typography>Parallel: run team do the analysis on the incident and contact the build team to check the analysis</Typography><br />
                </Stack>
                <Stack direction="row" spacing={1}>
                 <DoneIcon/><Typography>Complete the acceptance criteria for the 2nd Go/NoGo</Typography>
                </Stack>
                </Stack>
              <Box sx={{ marginTop: 2, textAlign: 'center' }}>
                <Typography variant="caption"  sx={{ color: 'white',fontWeight:"bold" }}>Hypercare</Typography>
              </Box>
            </CardContent>
          </Section>
        </Grid>
        <Grid item xs={12} md={4}>
          <Section>
            <CardContent>
              <Typography variant="h6" gutterBottom fontWeight="Bold" textAlign="center">
                Run Phase
              </Typography>
              <Stack direction="column" spacing={1}>
              <Stack direction="row" spacing={1}>
               <DoneIcon/><Typography>Email confirmation will be sent by FTS dev. Lead to validate the run handover to FTS</Typography><br />
                </Stack>
                <Stack direction="row" spacing={1}>
                 <DoneIcon/><Typography>Hypercare is over and all the incidents are handled by the run team</Typography><br />
                </Stack>
                <Stack direction="row" spacing={1}>
                 <DoneIcon/><Typography>Adhoc meetings can be organized to clarify specific questions/issues</Typography><br />
                </Stack>
                <Stack direction="row" spacing={1}>
                 <DoneIcon/><Typography>Tag "FTS" is added by the FTS Managers in the SNOW Application Service of the Use Case</Typography>
                </Stack>
                </Stack>
              <Box sx={{ marginTop: 2, textAlign: 'center' }}>
                <Typography variant="caption" sx={{ color: 'white', fontWeight:"bold"}}>Run team (FTS)</Typography>
              </Box>
            </CardContent>
          </Section>
        </Grid>
      </Grid>
      <Divider sx={{ marginY: 2, borderColor: 'white' }} />
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={4} textAlign="center">
          <CheckIcon sx={{ color: 'white' }} />
          <Typography variant="body2" fontWeight="bold">Build team (UC)</Typography>
        </Grid>
        <Grid item xs={4} textAlign="center">
          <ArrowRightAltIcon sx={{ color: 'white' }} />
        </Grid>
        <Grid item xs={4} textAlign="center">
          <CheckIcon sx={{ color: 'white' }} />
          <Typography variant="body2" fontWeight="bold">Run team (FTS)</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MoveToRunProcess;
