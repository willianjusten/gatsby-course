import styled from 'styled-components'

export const PaginationWrapper = styled.section`
  align-items: center;
  border-top: 1px solid #38444d;
  color: #8899a6;
  display: flex;
  padding: 1.5rem 3rem;
  justify-content: space-between;

  a {
    color: #8899a6;
    text-decoration: none;
    transition: color 0.5s;

    &:hover {
      color: #1fa1f2;
    }
  }
`
