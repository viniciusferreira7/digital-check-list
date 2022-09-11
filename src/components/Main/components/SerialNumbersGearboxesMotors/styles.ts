import styled from 'styled-components'

export const SerialNumbersGearboxesMotorsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1.5rem;

  width: 50rem;

  padding: 1rem 1rem 0 1rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;

    width: 26rem;
  }

  box-shadow: 5px 5px 30px 20px ${(props) => props.theme['gray-500']};

  border: 2px solid ${(props) => props.theme['gray-500']};
  border-radius: 15px;

  transition: all 300ms ease-in-out;

  overflow: hidden;

  cursor: pointer;

  &:hover {
    transform: scale(1.08);
    border: 2px solid ${(props) => props.theme['blue-700']};
  }

  table {
    border-collapse: collapse;

    strong {
      font-style: italic;
      color: ${(props) => props.theme['blue-200']};
    }

    th,
    tr {
      text-align: center;
    }

    th {
      font-size: 0.8rem;
    }

    th,
    td {
      border: 1px solid ${(props) => props.theme['blue-700']};
    }

    p {
      padding: 0.2rem;
      border: 1px solid ${(props) => props.theme['blue-700']};
    }
  }
`
