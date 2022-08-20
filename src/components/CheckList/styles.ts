import styled from 'styled-components'

export const CheckListContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  width: 30rem;
  height: 40rem;

  box-shadow: 5px 5px 30px 20px ${(props) => props.theme['gray-500']};

  border: 2px solid ${(props) => props.theme['gray-500']};
  border-radius: 15px;

  transition: all 300ms ease-in-out;

  overflow: hidden;

  cursor: pointer;

  &:hover {
    transform: scale(1.08);
    border: 2px solid ${(props) => props.theme['blue-700']};

    img {
      transform: scale(1.2);
    }
  }

  header {
    width: inherit;
    height: 16rem;
    min-height: 16rem;

    border-top-left-radius: 12px;
    border-top-right-radius: 12px;

    overflow: hidden;

    img {
      width: 100%;

      transition: all 500ms ease-in-out;
    }
  }

  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.4rem;

    padding: 1rem;
  }
`

export const ArticleContainer = styled.article`
  display: flex;
  justify-content: space-around;

  text-align: center;
`
export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  margin: 0 auto;

  h4 {
    font-size: 1.3rem;
    color: ${(props) => props.theme['blue-700']};

    strong {
      font-style: italic;
      color: ${(props) => props.theme['blue-200']};
    }
  }

  & > div {
    width: inherit;
    height: 6rem;

    overflow: auto;
  }

  p {
    strong {
      color: ${(props) => props.theme['blue-200']};
      font-style: italic;
    }
  }
`
export const InputContainer = styled.footer`
  display: flex;
  gap: 0.8rem;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    padding: 0.2rem 0.5rem;
    margin: 0 auto;

    cursor: pointer;

    border: 2px solid ${(props) => props.theme['blue-700']};
    border-radius: 5px;

    font-size: 1.1rem;
    color: ${(props) => props.theme['blue-700']};

    background-color: transparent;

    transition: all 300ms ease-in-out;

    &:hover {
      color: ${(props) => props.theme['white-100']};
      background-color: ${(props) => props.theme['blue-700']};
    }
  }
`
