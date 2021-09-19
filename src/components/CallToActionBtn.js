import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export default function CallToActionBtn() {
  return (
    <>
      <Wrapper>
        <Link to="/contact">
          <button>Discover our Tours</button>
        </Link>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.section`
  button {
    background-color: #28b485;
    color: #fff;
    text-transform: uppercase;
    padding: 1rem 3rem;
    border-radius: 0.5rem;
    border: none;
    margin: 1rem 0;
    width: 300px;
    cursor: pointer;
  }
`
