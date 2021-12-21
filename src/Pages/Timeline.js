import NewReview from "../Components/NewReview"
import UserBar from "../Components/UserBar"

import Grid from '@mui/material/Grid';
import Fab from '@mui/material/Fab';

import {BiBookAdd} from 'react-icons/bi'


function Timeline() {
    return (
        <h1>
            <UserBar/>
            <Grid container>

                <Grid item lg={4} md={6}>
                <NewReview/>
                </Grid>
                <Grid item lg={4} md={6}>
                <NewReview/>
                </Grid>
                <Grid item lg={4} md={6}>
                <NewReview/>
                </Grid>
                <Grid item lg={4} md={6}>
                <NewReview/>
                </Grid>
                <Grid item lg={4} md={6}>
                <NewReview/>
                </Grid>
                <Grid item lg={4} md={6}>
                <NewReview/>
                </Grid>
                <Grid item lg={4} md={6}>
                <NewReview/>
                </Grid>
                <Grid item lg={4} md={6}>
                <NewReview/>
                </Grid>

            </Grid>
            
            <Fab variant="extended" size="large" color="secondary" aria-label="add" sx={{position:'fixed', bottom:50, right:10}}>
                <BiBookAdd style={{ marginRight: 10 }} />
                Add Book Review
            </Fab>
        </h1>
    )
}

export default Timeline
