// src/components/Organization.js
import React from 'react';
import { Box, Grid, Typography, Paper, Stack } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const sections = [
  {
    title: "Operations & Finance",
    leaders: "Prasi/Adil/Sidi",
    teamLeader: "Avijit/Mimant",
    domains: [
      { name: "Finance", lead: "Sohom" },
      { name: "Product", lead: "Pradeep A" },
      { name: "Sourcing", lead: "Riya" },
      { name: "Supply", lead: "Avijit" }
    ]
  },
  {
    title: "O+O (B2B/B2C)",
    leaders: "Hamza/El Hadi",
    teamLeader: "Luis/Vishal",
    domains: [
      { name: "Sell Out", lead: "Krishnaveni" },
      { name: "C & SA", lead: "Luis" },
      { name: "C. O+O", lead: "Vishal" },
      { name: "CI & PT", lead: "Vishal" }
    ]
  },
  {
    title: "Cross",
    leaders: "Arnaud",
    teamLeader: "Thasleem",
    domains: [
      { name: "Monitoring Tools", lead: "Thasleem" },
      { name: "Core/Data Services", lead: "Thasleem" },
      { name: "BI", lead: "Nitesh" }
    ]
  },
  {
    title: "ZONES, BTA, R&I",
    leaders: "Suresh",
    teamLeader: "Sriram/Pankaj",
    domains: [
      { name: "TrendSpotter", lead: "Vidyashree" },
      { name: "L4TF & PriceTracker", lead: "Ritika" },
      { name: "Consumer Loop", lead: "Pankaj (Sriram)" }
    ]
  }
];

const Organization = () => {
  return (
    <Box sx={{ backgroundColor: 'black', color: 'white', minHeight: '100vh', p: 4,margin:"5px",paddingTop:"15px"}}>
      <Typography variant="h6" fontWeight="bold" align="center" gutterBottom>
        FTS Proposed Organization by Domain
      </Typography>
      <Grid container spacing={2}>
        {sections.map((section, idx) => (
          <Grid item xs={12} md={6} key={idx}>
            <Paper sx={{ p: 2,border: '1px solid #DDB926', backgroundColor: '#222',color: 'white',textAlign:"center",justifyContent:"center",margin:"10px"}}>
              <Stack direction="row" spacing={2}>
                <Stack sx={{alignItems:"center",justifyContent:"center",border: '1px solid #DDB926',padding:"15px"}}>
              <Typography variant="h6" sx={{fontWeight:"bolder"}}>{section.title}</Typography>
              <Typography variant="subtitle2" sx={{fontWeight:"bolder"}}>{section.leaders}</Typography>
              <Typography variant="subtitle1" sx={{fontWeight:"bold"}}>{`FTS/Technical Team Leader: ${section.teamLeader}`}</Typography>
               </Stack>
               <Stack sx={{alignContent:"center", justifyContent:"center"}}>
               <ArrowForwardIcon />
               </Stack>
               <Stack direction="column" spacing={1} sx={{border: '1px solid #DDB926', padding:"15px"}}>
              {section.domains.map((domain, i) => (
                <Box key={i} sx={{ mt: 2 }}>
                  <Typography variant="h6" sx={{fontWeight:"bolder"}}>{domain.name}</Typography>
                  <Typography variant="body2" sx={{fontWeight:"bolder"}}>{`BTD Data Lead Engineer: ${domain.lead}`}</Typography>
                </Box>  
              ))}
              </Stack>
              </Stack>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Organization;
