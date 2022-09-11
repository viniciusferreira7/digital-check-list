import styled from 'styled-components'

export const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

  padding: 1rem 0;
  margin: 0 auto;

  background-color: ${(props) => props.theme['gray-300']};

  @media screen and (max-width: 768px) {
    padding: 1rem 0.4rem 0 0.2rem;
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

  .slider-wrapper {
    width: 60rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .slide {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.8rem 0;

    background-color: transparent;
  }
`
