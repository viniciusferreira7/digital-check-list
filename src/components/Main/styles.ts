import styled from 'styled-components'

export const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  gap: 2rem;

  padding: 1rem 0;

  background-color: ${(props) => props.theme['gray-300']};

  @media screen and (max-width: 768px) {
    padding: 0;
    padding-top: 1rem;
  }
`
