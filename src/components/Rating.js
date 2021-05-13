import React from 'react'
import styled from 'styled-components'

const Cricle = styled.div`
  border-radius: 50%;
  border: 1px solid grey;
  height: 180px;
  width: 180px;
  display: flex;
  justify-content: center;
  align-items: center;

`

const Rating = ({ label }) => {
  return (
    <Cricle >
      <div>
        <p>{label}</p>
      </div>
    </Cricle>
  )
}

export default Rating
