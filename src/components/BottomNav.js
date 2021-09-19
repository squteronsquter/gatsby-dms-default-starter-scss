import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

export default function BottomNav() {
  return (
    <>
      <Wrapper>
        <nav>
          <ul>
            <li>
              <Link to="/image01">Palm Trees</Link>
            </li>
            <li>
              <Link to="/image02">High Cliff</Link>
            </li>
            <li>
              <Link to="/image03">Tuscany</Link>
            </li>
            <li>
              <Link to="/image04">Roaring Waves</Link>
            </li>
          </ul>
        </nav>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.section`
  min-height: 8rem;
  background-color: #2a2a2a;
  color: #fafafa;
  ul {
    height: 8rem;
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  a {
    text-decoration: none;
    padding: 0.4rem 1rem;
    cursor: pointer;
    font-weight: 700;
  }
  a:hover {
    color: #fafafa;
  }
`
