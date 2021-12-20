//MUI imports
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Typography from "@mui/material/Typography"
import Box from "@mui/system/Box"
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import {GiBookshelf} from 'react-icons/gi'
import {BsInfoSquare} from 'react-icons/bs'

const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
      author: 'bkristastucchio',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
      author: 'rollelflex_graphy726',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
      author: 'helloimnik',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
      author: 'nolanissac',
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
      author: 'hjrc33',
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
      author: 'arwinneil',
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
      author: 'tjdragotta',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
      author: 'katie_wasserman',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
      author: 'silverdalex',
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
      author: 'shelleypauls',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
      author: 'peterlaster',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
      author: 'southside_customs',
    },
  ];
function Bookshelf() {
    return (
        <div >
            
            <Divider><Typography variant="h3" color="white"> <Box sx={{display:"inline-block", color:"primary.light"}}><GiBookshelf/></Box> Bookshelf</Typography></Divider>
            
            <ImageList cols={5} sx={{ width: "100%", height: "60vh" }}>

            {itemData.map((item) => (
                <ImageListItem key={item.img}>

                    <img
                        src={`${item.img}?w=248&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                    />

                    <ImageListItemBar
                        sx={{bgcolor:"background.default"}}
                        title={item.title}
                        subtitle={<span>by: {item.author}</span>}
                        position="below"
                        actionIcon={
                            <IconButton sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                            aria-label={`info about ${item.title}`}>
                                <BsInfoSquare />
                            </IconButton>}
                    />

                </ImageListItem>
            ))}

            </ImageList>
        </div>
    )
}

export default Bookshelf