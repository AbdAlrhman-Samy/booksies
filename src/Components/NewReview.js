import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from "@mui/system/Box"

import ReviewModal from './ReviewModal';

import { useState } from 'react';



function NewReview() {

    const [open, setOpen] = useState(false);

    return (
        <Card sx={{ display:'flex', flexDirection:'row', m:1.5, alignItems:'center' }}>
            <CardMedia
                component="img"
                image="https://picsum.photos/200/300"
                sx={{p:0.5, width:"35%", height:"100%"}}
            />
            <Box sx={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Harry Potter
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat laboriosam ipsa voluptatibus ipsum tempore quas ipsam. Iure facilis voluptas ex beatae minus rem totam. Ipsum!
                    </Typography>
                </CardContent>

                <CardActions>
                    <Button size="small" onClick={()=>setOpen(true)}>Read Review</Button>
                </CardActions>
            </Box>

            <ReviewModal open={open} setOpen={setOpen}/>

        </Card>
    )
}

export default NewReview
