import styled from 'styled-components'

export const ProductionOrderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1.5rem;

  width: 50rem;

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
`
