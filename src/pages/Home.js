import React, { useEffect } from 'react'
import styled from 'styled-components'

import Slide from '../components/Slide'


import Navbar from '../components/Navbar'
import Rating from '../components/Rating'
import ShowCard from '../components/ShowCard'
import ReviewCard from '../components/ReviewCard'

import { Labels, reviews, shows } from '../data/dummyData'

// **** Styled Components : Start
const HeroSection = styled.div`
  background-image: url("/images/hero-section.webp");
  background-position : center;
  background-repeat: none;
  min-height: 100vh;
  background-size: cover;
  color: white;
  position: relative;
`

const Main = styled.div`
  position: absolute;
  top: 30%;

`

const Ratings = styled.div`
  /* position: absolute; */
  margin-top:calc(100vh - 300px);
  bottom  : 20px;

`

const Shows = styled.div`
  background-color: #0A0B1A;
  padding-top : 100px;
  padding-bottom : 100px;

`

const Heading = styled.h2`

  color : white;
  margin-bottom : 40px;
  display: inline-block;

  &::after{
    content : "";
    display :block;
    /* position: absolute; */
    height: 3px;
    width: 50px;
    background-color : #0259EB;
    border-radius: 16px;
    margin-top : 10px;
  }
`

const Reviews = styled.div`
  /* padding : 100px; */
  position : relative;
`

const SectionStart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  & > div{
    color: #E5C558;
    cursor : pointer;
  }
`

const SlideContols = styled.div`
  position: absolute;
  top: 10px;
  right: 0;
`



// **** styled components : End


const Home = () => {


  return (
    <>
      <HeroSection>
        <Navbar />
        <div className="container">
          <Main>
            <h1 className="display-1">Cari Cari</h1>
            <p className="fs-4 text-light" style={{ maxWidth: "600px" }}>Live from their sofa to yours. Get closer to your favorite artists, and never miss out.</p>
          </Main>
          <Ratings>
            <Slide uniqueName="glide1">
              {Labels.map(label => (
                <Rating {...label} />
              ))}
            </Slide>
          </Ratings>
        </div>
      </HeroSection >
      <Shows>
        <div className="container">
          <SectionStart>
            <Heading>Upcoming Shows</Heading>
            <div>View All</div>
          </SectionStart>
          <Slide uniqueName="glide2">
            {shows.map((show, index) => (
              <ShowCard key={index} {...show} />
            ))}
          </Slide>
        </div>
      </Shows>
      <Reviews>
        <div className="container" >
          <SectionStart style={{ position: "relative" }}>
            <Heading>Reviews</Heading>

          </SectionStart>
          <Slide uniqueName="glide3" controls={true}>
            {reviews.map((review, index) => (
              <ReviewCard key={index}{...review} />
            ))}
          </Slide>
        </div>
      </Reviews>
    </>
  )
}


export default Home
