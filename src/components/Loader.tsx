import styled from 'styled-components';

const LoaderInt = styled.div`
  width: 48px;
  margin-top: 2.4vh;
  text-align: center;
  height: 48px;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  border: 3px solid;
  border-color: #FFF #FFF transparent;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  &::after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    border: 3px solid;
    border-color: transparent var(--color-main) var(--color-main);
    width: 24px;
    height: 24px;
    border-radius: 50%;
    animation: rotationBack 0.5s linear infinite;
    transform-origin: center center;
  }
`;

const Loader = () => {
    return(
        <LoaderInt></LoaderInt>
    )
}

export default Loader;