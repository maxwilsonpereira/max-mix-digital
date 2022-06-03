import React, { useState, useEffect } from 'react';
// npm install classnames
import cn from 'classnames';
// import Button from './button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';

import img1 from '../../assets/images/jpg/main1.jpg';
import img2 from '../../assets/images/jpg/main2.jpg';
import img3 from '../../assets/images/jpg/main3.jpg';

const HomeCarousel = () => {
  const classes = useStyles();
  const [activeCarouselItem, setActiveCarouselItem] = useState(0);
  const [data, setData] = useState([]);
  // Local scope reference to prevent state changes issues
  let index = activeCarouselItem;
  const changeCarouselTime = 4000;

  // const prevCarouselItem = () => {
  //   const numberOfItems = data.length - 1;
  //   if (numberOfItems > 0) {
  //     index--;
  //     // Reset the carousel
  //     if (index < 0) {
  //       index = numberOfItems;
  //     }
  //     setActiveCarouselItem(index);
  //   }
  // };

  useEffect(() => {
    setTimeout(() => {
      setData([
        {
          backgroundImage: img1,
          title: 'Max Wilson Pereira',
          color: 'ad6f36',
          specialty: 'Software engineer',
          // subtitle: '',
        },
        {
          backgroundImage: img3,
          title: 'Max Wilson Pereira',
          color: '71a3c5',
          specialty: 'Developing with passion',
          // subtitle: '',
        },
        {
          backgroundImage: img2,
          title: 'Max Wilson Pereira',
          color: 'e8cf7d',
          specialty: 'An application is a work of art',
          // subtitle: '',
        },
      ]);
    }, 1000);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => nextCarouselItem(), changeCarouselTime);
    return () => clearTimeout(t);
  }, [data]);

  useEffect(() => {
    const t = setTimeout(() => nextCarouselItem(), changeCarouselTime);
    return () => clearTimeout(t);
  }, [activeCarouselItem]);

  const nextCarouselItem = () => {
    const numberOfItems = data.length - 1;
    if (numberOfItems > 0) {
      index++;
      // Reset the carousel
      if (index > numberOfItems) {
        index = 0;
      }
      setActiveCarouselItem(index);
    }
  };

  return (
    <Container id="home-carousel" className={classes.root} maxWidth={false}>
      <div id="home-carousel-items">
        {data.map((item, i) => {
          return (
            <div className={classes.contentRoot}>
              <div
                className={classes.navigation}
                style={
                  activeCarouselItem === i
                    ? {
                        backgroundColor: `#${item.color}`,
                      }
                    : {}
                }
              />
              <div
                key={`carousel-item-${i}`}
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3)), url('${item.backgroundImage}')`,
                  backgroundRepeat: 'no-repeat',
                  backgroundAttachment: 'fixed',
                  backgroundPosition: 'center',
                }}
                className={cn({
                  [classes.item]: true,
                  [classes.show]: activeCarouselItem === i,
                  [classes.hide]: activeCarouselItem !== i,
                })}
              >
                <div className={classes.itemContainer}>
                  {/* {item.icon == '' ? (
                    <></>
                  ) : (
                    <img
                      className={classes.icon}
                      src={item.icon}
                      alt={item.title}
                    />
                  )} */}
                  <Typography
                    variant="h3"
                    component="h3"
                    gutterBottom
                    className={classes.itemTitle}
                  >
                    {item.title}
                    <br />
                    <span style={{ color: `#${item.color}` }}>
                      {item.specialty}
                    </span>
                  </Typography>
                  <Typography
                    className={classes.subtitle}
                    variant="body1"
                    paragraph
                  >
                    {item.subtitle}
                  </Typography>

                  {/* <div className={classes.itemButton}>
                    <Button
                      // onClick={}
                      backgroundColor={`#${item.color}`}
                    >
                      {item.buttonText}
                    </Button>
                  </div> */}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default HomeCarousel;
