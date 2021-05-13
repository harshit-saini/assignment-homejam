import React, { useEffect } from 'react'
import styled from 'styled-components'
import Glide from '@glidejs/glide'
import "@glidejs/glide/dist/css/glide.core.min.css"


import Navbar from '../components/Navbar'
import Rating from '../components/Rating'
import ShowCard from '../components/ShowCard'

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
  display: flex;
  justify-content: space-between;
  padding : 0px 100px;

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

// this is just temperarory data : this could be comming from an API
const Labels = ["label", "label", "label", "label"]

const shows = [
  {
    artistImage: `/images/artists/Benny Dayal.png`,
    artistName: "Benny Dayal",
    category: "Folk",
    infoLink: "#",
    ticketLink: "#"
  },
  {
    artistImage: `/images/artists/Vijay Yesudas.png`,
    artistName: "Vijay Yesudas",
    category: "Bollywood",
    infoLink: "#",
    ticketLink: "#"
  },
  {
    artistImage: `/images/artists/Andrea Jeremiah.png`,
    artistName: "Andrea Jeremiah",
    category: "Folk",
    infoLink: "#",
    ticketLink: "#"
  },
  {
    artistImage: `/images/artists/Shilpa Rao.png`,
    artistName: "Shilpa Rao",
    category: "Folk",
    infoLink: "#",
    ticketLink: "#"
  }
]

const Home = () => {


  /*
  This is done so that the mount process is done only after the components is loaded
  other it will give error
  */
  useEffect(() => {
    new Glide(".glide", {
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
            {Labels.map(label => (
              <Rating label={label} />
            ))}
          </Ratings>
        </div>
      </HeroSection >
      <Shows>
        <div className="container">
          <Heading>Upcoming Shows</Heading>
          <div className="glide">
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
    </>
  )
}


export default Home
