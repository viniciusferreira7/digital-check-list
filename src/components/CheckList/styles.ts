import styled from 'styled-components'

export const CheckListContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  width: 30rem;
  height: 35rem;

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
    height: 13rem;

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

    padding: 1rem;

    h4 {
      color: ${(props) => props.theme['blue-700']};

      strong {
        font-style: italic;
        color: ${(props) => props.theme['blue-200']};
      }
    }
  }
`
