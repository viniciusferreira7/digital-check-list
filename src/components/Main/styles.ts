import styled from 'styled-components'

export const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  gap: 2rem;

  padding-top: 2rem;

  background-color: ${(props) => props.theme['gray-300']};
`
