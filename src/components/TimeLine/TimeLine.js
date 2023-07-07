import React, { useState, useRef, useEffect } from 'react';

import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: 'smooth' });
  }

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));

      scroll(carouselRef.current, scrollLeft);
    }
  }

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);

      setActiveItem(index);
    }
  }

  // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    }

    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <Section id="about">
      <SectionDivider/>
      <br/><br/>
      <SectionTitle>About Me</SectionTitle>
      <br />
      <SectionText>
        I'm a born and bred Londoner through and through. I love Beer, Pizza, 90's HipHop, Cars, Bikes and anything with an engine. But, I also have passion for Social Change, Entreprenuerialism, Technology and Coding too. That's why I chose to Career Switch and become a Full Stack Dev. I did it to follow my passions and to hopefully combine them all one day.
        <br/><br/>
        I have experience in B2C and B2B Sales, I'm a natural people person. Native English speaker, and Fluent in Italian. I create lasting connections with everyone I meet, and I am hardworking by nature. I'm friendly, have an attentive demeanour, willing to learn quickly and can take constructive criticism in my stride.
        <br/><br/>
        Some of my builds include Create-React-App, Express and reusable components. Knowledge of FireDB and MongoDB. Version Control using Git and Hosting using Heroku, Netlify and Vercel. I believe that the tech you use is just a tool to get a job done. So, anything I do not know I am willing to learn, and I learn fast.
        <br/><br/>
        Currently, I am expanding my skill set through self-teaching and building MERN Stack Projects. I aim to achieve the best results in every role. I also believe my ability to work independently, adapt and eagerness to learn, makes me a valuable addition to any team.
        </SectionText>
        <br/>
        <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
          <>
            {TimeLineData.map((item, index) => (
              <CarouselMobileScrollNode key={index} final={index === TOTAL_CAROUSEL_COUNT - 1}>
                <CarouselItem
                  index={index}
                  id={`carousel__item-${index}`}
                  active={activeItem}
                  onClick={(e) => handleClick(e, index)}
                >
                  <CarouselItemTitle>
                    {item.year}
                    <CarouselItemImg
                    width="208"
                    height="6"
                    viewBox="0 0 208 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z"
                      fill="url(#paint0_linear)"
                      fill-opacity="0.33"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="-4.30412e-10"
                        y1="0.5"
                        x2="208"
                        y2="0.500295"
                        gradientUnits="userSpaceOnUse">
                        <stop stop-color="white" />
                        <stop
                          offset="0.79478"
                          stop-color="white"
                          stop-opacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </CarouselItemImg>
                  </CarouselItemTitle>
                  <CarouselItemText>{item.text}</CarouselItemText>
                </CarouselItem>
              </CarouselMobileScrollNode>
            ))}
          </>
        </CarouselContainer>
        <CarouselButtons>
          {TimeLineData.map((item, index) => (
            <CarouselButton
              key={index}
              index={index}
              active={activeItem}
              onClick={(e) => handleClick(e, index)}
              type="button"
            >
              <CarouselButtonDot active={activeItem}/>
            </CarouselButton>
          ))}
        </CarouselButtons>
        <SectionDivider/>
    </Section>
  );
};

export default Timeline;
