import styled from 'styled-components'

export const ReadBarcodeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  width: 100%;

  padding-bottom: 1rem;

  p {
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
    color: ${(props) => props.theme['white-100']};

    background-color: ${(props) => props.theme['blue-700']};

    transition: all 300ms ease-in-out;
  }
`
export const CameraContainer = styled.div`
  background-color: ${(props) => props.theme['blue-200']};

  width: inherit;
  max-width: 35rem;
  height: 23.5rem;
`
