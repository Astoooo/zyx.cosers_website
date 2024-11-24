import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import one from '../img/one.jpg';
import two from '../img/two.jpg';
import three from '../img/three.jpg';
import four from '../img/four.jpg';

export default function StandardImageList() {
  return (
    <ImageList sx={{ width: 900, height: 850, overflow: 'hidden' }} cols={3} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: one,
    title: '1',
  },
  {
    img: two,
    title: '2',
  },
  {
    img: three,
    title: '3',
  },
  {
    img: four,
    title: '4',
  }
];