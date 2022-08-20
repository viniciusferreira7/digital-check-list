import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;

  padding: 2rem;

  border: 2px solid ${(props) => props.theme['gray-300']};

  background-color: ${(props) => props.theme['white-100']};

  img {
    width: 20rem;
  }
`
