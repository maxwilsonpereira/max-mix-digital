import React, { useState, useEffect } from 'react';
import classes from './style.module.css';
import Img1 from '../../assets/images/cubeAbout/img1.jpg';
import Img2 from '../../assets/images/cubeAbout/img2.jpg';
import Img3 from '../../assets/images/cubeAbout/img3.jpg';
import Img4 from '../../assets/images/cubeAbout/img4.jpg';
import Img5 from '../../assets/images/cubeAbout/img5.jpg';
import Img6 from '../../assets/images/cubeAbout/img6.jpg';

const Images = [Img2, Img3, Img4, Img5, Img6];

const links = [
  'https://www.instagram.com/maxwilsonpereira/',
  'https://github.com/maxwilsonpereira',
  'https://www.facebook.com/maxwilsonpereira',
  'https://www.youtube.com/user/maxwilsonpereira',
  'https://www.linkedin.com/in/maxwilsonpereira/',
];

export default function Cube3d(props) {
  const [cubeHover, setCubeHover] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setCubeHover('startHover');
    }, 5000);
  });

  return (
    <div className={classes.wrap}>
      <span className={classes[props.closeCubeClass]}>
        <div className={[classes.cube, classes[cubeHover]].join(' ')}>
          {/* // IMG 1 with NO LINK: */}
          <img className={classes.imageNoPointer} src={Img1} alt="" />
          {/* OTHER 5 IMAGES with links: */}
          {links.map((link, index) => (
            <img
              key={index}
              onClick={() => window.open(link, '_blank')}
              src={Images[index]}
              alt=""
            />
          ))}
        </div>
      </span>
    </div>
  );
}
