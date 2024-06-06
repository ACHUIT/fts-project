import React from 'react';
import { Box, Divider, Grid, Paper, Typography } from '@mui/material';
import { styled } from '@mui/system';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const Container = styled(Box)({
  padding: '20px',
  minHeight: '100vh',
  backgroundColor: '#000',
  color: '#fff',
});

const Section = styled(Paper)({
  padding: '20px',
  margin: '20px 0',
  backgroundColor: '#222',
});

const Title = styled(Typography)({
  fontWeight: 'bolder',
  marginBottom: '10px',
  textAlign: "center",
  color: "#ffffff",
  fontSize: "20px"
});

const Item = styled(Paper)(({ color }) => ({
  backgroundColor: 'rgba(175, 151, 16, 0.1)',
  border: '1px solid #DDB926',
  color: "#ffffff",
  padding: '10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  margin: "8px 0",
  fontWeight: "bold",
  fontFamily: "sans-serif",
}));

const categories = [
  {
    name: 'GCP',
    inScope: ['Cloud Workflow', 'Cloud Build', 'Cloud Storage', 'Cloud Functions', 'Pub/Sub', 'Cloud Scheduler', 'BigQuery', 'Cloud Run', 'IAM', 'Firestore', 'Cloud SQL', 'AutoML', 'Vertex AI', 'Apigee'],
    couldBeInScope: ['Spanner', 'Composer', 'Bigtable', 'Dataflow', 'App Engine'],
    notInScope: ['Kubernetes', 'VM'],
  },
  {
    name: 'Dataviz',
    inScope: ['React JS', 'Power BI', 'Looker'],
    couldBeInScope: [],
    notInScope: ['Tableau'],
  },
  {
    name: 'EPM',
    inScope: [],
    couldBeInScope: [],
    notInScope: ['Anaplan'],
  },
  {
    name: 'Other',
    inScope: ['SAP HANA', 'Databricks', 'Python', 'SAP SLT', 'MongoDB', 'GIT', 'Terraform'],
    couldBeInScope: [],
    notInScope: ['SAP S/4 HANA', 'Informatica', 'IBM Cognos', 'TIBCO EBX', 'SAP ECC', 'HIP', 'Microsoft .NET', 'GO'],
  },
];

const FtsTechnicalStack = () => {
  return (
    <Container sx={{margin:"5px"}}>
      <Typography variant="h6" sx={{ textAlign: "center", fontWeight: 'bolder', color: "white", marginBottom: '20px' }} gutterBottom>
        FTS-TECHNICAL STACKS
      </Typography>
      <Grid container spacing={3}>
        {categories.map((category) => (
          <Grid item xs={12} key={category.name}>
            <Section>
              <Title variant="h6">{category.name}</Title>
              <Divider sx={{ marginY: 2, borderColor: '#DDB926' }} />
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <Title variant="subtitle1">In Scope</Title>
                  {category.inScope.map((item) => (
                    <Item key={item}>
                      {item}
                      <CheckCircleIcon sx={{ color: '#4caf50' }} />
                    </Item>
                  ))}
                </Grid>
                <Grid item xs={4}>
                  <Title variant="subtitle1">Could be in Scope</Title>
                  {category.couldBeInScope.map((item) => (
                    <Item key={item}>
                      {item}
                      <HelpOutlineIcon sx={{ color: '#ff9800' }} />
                    </Item>
                  ))}
                </Grid>
                <Grid item xs={4}>
                  <Title variant="subtitle1">Not in Scope</Title>
                  {category.notInScope.map((item) => (
                    <Item key={item}>
                      {item}
                      <HighlightOffIcon sx={{ color: '#f44336' }} />
                    </Item>
                  ))}
                </Grid>
              </Grid>
            </Section>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default FtsTechnicalStack;
