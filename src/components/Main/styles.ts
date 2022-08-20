import styled from 'styled-components'

export const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  gap: 2rem;

  padding: 2rem 0;

  background-color: ${(props) => props.theme['gray-300']};
`
