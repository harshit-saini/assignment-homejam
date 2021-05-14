import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
  position: relative;
  background: #0A0B1A;
  border: 2px solid #E5AF56;
  border-radius: 16px;
  padding : 32px;
  color: white;
  /* z-index: 1; */

  &::after{
  content : "";
  position: absolute;
  left: 2.99%;
  right: -2.99%;
  top: -4.07%;
  bottom: 4.07%;

  background: linear-gradient(143.63deg, #276C73 5.43%, #5293E8 110.6%);
  border-radius: 16px;
  z-index: -1;
  }


`

const ReviewCard = ({ name, profileImage, location, review }) => {
  return (
    <div>
      <Card className=" glide__slide" className="m-3">
        <div style={{ marginBottom: "28px" }} className="d-flex" >
          <img src={profileImage} alt={name} height="48ox" width="48px" />
          <div className="ms-4 mt-1">
            <h6>{name}</h6>
            <p style={{
              color: "#E5C558"
            }}>{location}</p>
          </div>
        </div>
        <div>
          <div style={{ wordBreak: "break-all", whiteSpace: "normal" }}>
            {review}
          </div>
        </div>
      </Card>
    </div>
  )
}

export default ReviewCard
