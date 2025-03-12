import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Container,
  Box,
  Grid,
} from '@mui/material';
import { Check } from 'lucide-react';
import React from 'react';
import { FcApproval } from 'react-icons/fc';

import { styled } from '@mui/system';

const StyledContainer = styled(Container)({
  maxWidth: '1280px', // Equivalent to max-w-7xl
  margin: '0 auto',
  padding: '2rem',
});

const StyledTableContainer = styled(TableContainer)({
  marginTop: '2rem',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  borderRadius: '8px',
  overflowX: 'auto', // This ensures the table is scrollable on mobile
});

const StyledTable = styled(Table)({
  minWidth: '650px', // Ensures the table has a minimum width for scrolling
});

const StyledTableCell = styled(TableCell)({
  fontWeight: 'bold',
  backgroundColor: '#f5f5f5',
});

const StyledGridContainer = styled(Grid)({
  marginTop: '2rem',
});

const StyledCard = styled(Paper)({
  padding: '1rem',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  borderRadius: '8px',
});

const jobData = [
  {
    job: 'Digital Marketing',
    naukri: 18686,
    timesJob: 21170,
    careerJet: 12386,
    freshers: 9815,
    clickIndia: 14506,
    avgSalary: '2L-6.5L',
  },
  {
    job: 'Social Media Marketing',
    naukri: 15345,
    timesJob: 22506,
    careerJet: 8974,
    freshers: 2969,
    clickIndia: 8148,
    avgSalary: '2L-7L',
  },
  {
    job: 'Content Marketing',
    naukri: 10799,
    timesJob: 58834,
    careerJet: 14797,
    freshers: 5346,
    clickIndia: 5095,
    avgSalary: '2L-8L',
  },
  {
    job: 'SEO',
    naukri: 12368,
    timesJob: 5787,
    careerJet: 6654,
    freshers: 2578,
    clickIndia: 4678,
    avgSalary: '2L-6L',
  },
  {
    job: 'SEM',
    naukri: 10068,
    timesJob: 21909,
    careerJet: 2425,
    freshers: 2578,
    clickIndia: 2922,
    avgSalary: '2L-7L',
  },
  {
    job: 'Email Marketing',
    naukri: 5570,
    timesJob: 25633,
    careerJet: 50223,
    freshers: 1458,
    clickIndia: 1100,
    avgSalary: '2L-5.5L',
  },
  {
    job: 'Digital Analyst',
    naukri: 5835,
    timesJob: 23264,
    careerJet: 5599,
    freshers: 1774,
    clickIndia: 4415,
    avgSalary: '2L-5L',
  },
];

const Opportunity = () => {
  return (
    <StyledContainer>
      <Box my={4}>
        <Typography
          className='text-blue-950'
          variant='h4'
          style={{ textAlign: 'center' }}
          component='h1'
          gutterBottom
        >
          Job Opportunities and Average Salaries in Digital Marketing (India)
        </Typography>
        <StyledTableContainer component={Paper}>
          <StyledTable>
            <TableHead>
              <TableRow>
                <StyledTableCell>Job Description</StyledTableCell>
                <StyledTableCell align='right'>Naukri</StyledTableCell>
                <StyledTableCell align='right'>Times Job</StyledTableCell>
                <StyledTableCell align='right'>Career Jet</StyledTableCell>
                <StyledTableCell align='right'>Freshers</StyledTableCell>
                <StyledTableCell align='right'>Click India</StyledTableCell>
                <StyledTableCell align='right'>
                  Average Salary (Per Annum)
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {jobData.map((row) => (
                <TableRow key={row.job}>
                  <TableCell component='th' scope='row'>
                    {row.job}
                  </TableCell>
                  <TableCell align='right'>{row.naukri}</TableCell>
                  <TableCell align='right'>{row.timesJob}</TableCell>
                  <TableCell align='right'>{row.careerJet}</TableCell>
                  <TableCell align='right'>{row.freshers}</TableCell>
                  <TableCell align='right'>{row.clickIndia}</TableCell>
                  <TableCell align='right'>{row.avgSalary}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </StyledTable>
        </StyledTableContainer>
      </Box>
      {/* <StyledGridContainer container spacing={2}>
        <Grid item xs={12} md={6}>
          <StyledCard>
            <Typography variant='h5' component='h2' gutterBottom>
              Future of Digital Marketing
            </Typography>
            <Typography
              variant='body1'
              gutterBottom
              style={{ display: 'flex', gap: 12 }}
            >
              <FcApproval className='text-2xl' />
              Marketing is evolving with the internet boom.
            </Typography>
            <Typography
              variant='body1'
              gutterBottom
              style={{ display: 'flex', gap: 12 }}
            >
              <FcApproval className='text-2xl' />
              Digital Marketing has emerged as a new form of marketing.
            </Typography>
            <Typography
              variant='body1'
              gutterBottom
              style={{ display: 'flex', gap: 12 }}
            >
              <FcApproval className='text-2xl' />
              It offers niche and lucrative career options for the youth in
              India.
            </Typography>
          </StyledCard>
        </Grid>
        <Grid item xs={12} md={6}>
          <StyledCard>
            <Typography variant='h5' component='h2' gutterBottom>
              Scope of Digital Marketing
            </Typography>
            <Typography
              variant='body1'
              gutterBottom
              style={{ display: 'flex', gap: 12 }}
            >
              <FcApproval className='text-3xl' />
              India has overtaken the U.S. as the second-largest country in
              terms of internet users.
            </Typography>
            <Typography
              variant='body1'
              gutterBottom
              style={{ display: 'flex', gap: 12 }}
            >
              <FcApproval className='text-2xl' />
              India&apos;s Digital Marketing Industry is growing at 33.5%.
            </Typography>
            <Typography
              variant='body1'
              gutterBottom
              style={{ display: 'flex', gap: 12 }}
            >
              <FcApproval className='text-2xl' />
              The industry is currently worth around $68 billion.
            </Typography>
            <Typography
              variant='body1'
              gutterBottom
              style={{ display: 'flex', gap: 12 }}
            >
              <FcApproval className='text-4xl' />
              Advertising through mobile phones and tablets has risen to $6
              billion, predicted to reach $7.8 billion by 2022.
            </Typography>
            <Typography
              variant='body1'
              gutterBottom
              style={{ display: 'flex', gap: 12 }}
            >
              <FcApproval className='text-2xl' />
              The digital industry will produce more than 30 lakh jobs in India
              by 2022.
            </Typography>
          </StyledCard>
        </Grid>
      </StyledGridContainer> */}
    </StyledContainer>
  );
};

export default Opportunity;
