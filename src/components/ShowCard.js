import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Card = styled.div`
  background: #111229;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  position: relative;
  color : white;
  /* cursor : pointer; */

  &::before{
    content: "";
    position: absolute;
    left: 2.99%;
    right: -2.99%;
    top: -2.07%;
    bottom: 2.07%;
    background: linear-gradient(163.41deg, #301A68 0.11%, #234C97 170.69%);
    border-radius: 8px;
    z-index : -1;
  }
`

const Category = styled.span`
  background-color : #E5C558;
  color :#682F26;
  align-items: center;
  padding: 2px 6px;
  border-radius: 1px;
  width: 35px;
  height: 18px;
  font-weight: 600;
  font-size: 12px;
  margin-top: 10px;
`

const StyledLink = styled(Link)`
  font-weight: 500;
  font-size: 16px;
  line-height: 32px;
  color: #0259EB;
  width: 69px;
  height: 32px;
  text-decoration : none;
  margin-top:20px;
`
const Icon = styled.i`
  cursor: pointer;
  color: #253176;
  transform: rotate(90deg);

  &:hover{
    color: #B727F3;
  }
`


const ShowCard = ({ artistImage, artistName, category, infoLink, ticketLink }) => {
  return (
    <Card className="card glide__slide" className="m-3" style={{ width: "260px" }}>
      <img src={artistImage} style={{ objectFit: "cover" }} className="card-img-top" alt={artistName} />
      <div className="card-body">
        <Category>{category}</Category>
        <h5 className="card-title mt-3 mb-4">{artistName}</h5>
        <div className="d-flex justify-content-between align-items-baseline">
          <StyledLink to={infoLink} class="">More Info <i style={{ fontSize: "12px" }} className="fas fa-arrow-right"></i></StyledLink>
          <Icon className="fas fa-ticket-alt fs-3"></Icon>
        </div>
      </div>
    </Card>
  )
}

export default ShowCard
