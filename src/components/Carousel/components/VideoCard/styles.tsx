import styled from 'styled-components';

interface Props {
  url: string;
}

const VideoCardContainer = styled.a`
  box-shadow: 10px 10px 8px 10px black;
  text-decoration: none;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  min-width: 298px;
  min-height: 197px;
  background-image: ${({ url }: Props) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;

  margin: 20px 0px;

  transition: transform .2s, margin .2s;

  &:hover {
    transform: scale(1.2);
    margin: 20px 40px;
  }

  @media (max-width: 800px) {
    min-width: 150px;
    min-height: 100px;
    box-shadow: none;

    &:hover {
      transform: scale(1.2);
      margin: 20px 20px;
    }
  }

`;

export default VideoCardContainer;
