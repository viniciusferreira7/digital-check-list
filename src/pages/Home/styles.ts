import styled from 'styled-components'

export const HomeContainer = styled.main`
  max-width: 50rem;

  margin: auto;
  margin-top: 2rem;

  h1 {
    padding-bottom: 1.5rem;
    text-align: center;
    color: ${(props) => props.theme['blue-200']};
  }

  h2 {
    font-size: 1.3rem;
    color: ${(props) => props.theme['blue-700']};
    text-align: center;

    strong {
      font-style: italic;
      color: ${(props) => props.theme['blue-200']};
    }
  }
`

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1.5rem;

  width: 100%;

  border: 2px solid ${(props) => props.theme['gray-500']};
  border-radius: 15px;

  transition: all 300ms ease-in-out;

  overflow: hidden;

  cursor: pointer;

  &:hover {
    border: 2px solid ${(props) => props.theme['blue-700']};
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;

    width: 100%;
  }

  h2 {
    padding-top: 0.8rem;
  }
`
