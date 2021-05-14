import React, { useEffect } from 'react'
import styled from 'styled-components'
import Glide from '@glidejs/glide'
import "@glidejs/glide/dist/css/glide.core.min.css"


import Navbar from '../components/Navbar'
import Rating from '../components/Rating'
import ShowCard from '../components/ShowCard'
import ReviewCard from '../components/ReviewCard'

import { Labels, reviews, shows } from '../data/dummyData'

// **** Styled Components : Start
const HeroSection = styled.div`
  background-image: url("/images/hero-section.png");
  background-position : center;
  background-repeat: none;
  min-height: 100vh;
  background-size: cover;
  color: white;
  position: relative;
`

const Main = styled.div`
  position: absolute;
  top: 250px;

`

const Ratings = styled.div`
  /* position: absolute; */
  margin-top:calc(100vh - 300px);
  bottom  : 20px;

`

const Shows = styled.div`
  background-color: #0A0B1A;
  padding-top : 100px;

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
  padding : 100px 0;
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
// **** styled components : End


const Home = () => {


  /*
  This is done so that the mount process is done only after the components is loaded
  other it will give error
  */
  useEffect(() => {

    const forRatings = new Glide(".glide1", {
      type: 'slider',
      startAt: 0,
      perView: 4,
      gap: 0,
      bound: true,
      breakpoints: {
        556: {
          perView: 1,
          peek: {
            before: 0,
            after: 100
          }
        },
        768: {
          perView: 2,
          peek: {
            after: 100
          }
        },
        992: {
          perView: 3,
          peek: {
            after: 100
          }
        }
      }
    }).mount()

    const forShows = new Glide(".glide2", {
      type: 'slider',
      startAt: 0,
      perView: 4,
      gap: 20,
      bound: true,
      breakpoints: {
        556: {
          perView: 1
        },
        768: {
          perView: 2
        },
        992: {
          perView: 3
        }
      }
    }).mount()

    const forReviews = new Glide(".glide3", {
      type: 'slider',
      startAt: 0,
      perView: 3,
      gap: 20,
      bound: true,
      breakpoints: {
        556: {
          perView: 1
        },
        768: {
          perView: 2
        },
        992: {
          perView: 3
        }
      }
    }).mount()

    return () => {
      forReviews.destroy();
      forShows.destroy();
      forRatings.destroy();
    }

  }, [])

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
            <div className="glide1">
              <div className="glide__track" data-glide-el="track">
                <div className="glide__slides">
                  {Labels.map(label => (
                    <Rating {...label} />
                  ))}
                </div>
              </div>
            </div>
          </Ratings>
        </div>
      </HeroSection >
      <Shows>
        <div className="container">
          <SectionStart>
            <Heading>Upcoming Shows</Heading>
            <div>View All</div>
          </SectionStart>
          <div className="glide2">
            <div className="glide__track" data-glide-el="track">
              <div className="glide__slides">
                {/* this is the glide__slide */}
                {shows.map((show, index) => (
                  <ShowCard key={index} {...show} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Shows>
      <Reviews>
        <div className="container" >
          <SectionStart>
            <Heading>Reviews</Heading>
            <div>
              12
            </div>
          </SectionStart>
          <div className="glide3">
            <div className="glide__track" data-glide-el="track">
              <div className="glide__slides">
                {reviews.map((review, index) => (
                  <ReviewCard key={index}{...review} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Reviews>
    </>
  )
}


export default Home
