import React, { useEffect } from 'react'
import styled from 'styled-components'
import Glide from '@glidejs/glide'
import "@glidejs/glide/dist/css/glide.core.min.css"

const SlideContols = styled.div`
  position: absolute;
  top: 10px;
  right: 0;
`


const Slide = ({ children, uniqueName, perView, autoplay = false, controls = false }) => {


  useEffect(() => {

    const obj = new Glide(`.${uniqueName}`, {
      type: 'slider',
      startAt: 0,
      perView: 4,
      gap: 0,
      bound: true,
      autoplay: autoplay,
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


    return () => {
      obj.destroy();
    }


  }, [])

  return (
    <div className={uniqueName}>
      {controls &&
        <SlideContols className="container d-flex justify-content-end pe-5 me-5" data-glide-el="controls" style={{ color: "#E5C558" }}>
          <span className="me-3" data-glide-dir="<"><i className="fas fa-arrow-left"></i></span>
          <span className="me-5" data-glide-dir=">"><i className="fas fa-arrow-right"></i></span>
        </SlideContols>
      }
      <div className="glide__track" data-glide-el="track">
        <div className="glide__slides">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Slide
