import HistoryCard1 from "./history-card/history-card-1";
import HistoryCard2 from "./history-card/history-card-2";
import HistoryCard3 from "./history-card/history-card-3";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import HistoryCard4 from "./history-card/history-card-4";
import { Container } from "@mui/material";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0),
  color: theme.palette.text.secondary,
}));


export default function RowAndColumnSpacing() {
    return (
      <Container maxWidth="auto">
        <Grid container rowSpacing={ 4 } columnSpacing={{ xs: 1, sm: 2, md: 4 }}>
          <Grid item xs={3}>
            <Item><HistoryCard1/></Item>
            </Grid>
            <Grid item xs={3}>
            <Item><HistoryCard2/></Item>
            </Grid>
            <Grid item xs={3}>
            <Item><HistoryCard3/></Item>
            </Grid>
            <Grid item xs={3}>
            <Item><HistoryCard4/></Item>
            </Grid>
            <Grid item xs={3}>
            <Item><HistoryCard4/></Item>
            </Grid>
          </Grid><br/ >
        </Container>
    );
} 