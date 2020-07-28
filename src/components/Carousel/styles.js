import styled from 'styled-components';

export const Title = styled.a`
  font-style: normal;
  font-weight: normal;
  font-size: 35px;
  line-height: 1;
  margin-bottom: 16px;
  margin-left: 50px;
  display: inline-block;
  padding: 20px;
  background: red;
  line-height: 1;
  border-radius: 4px;
  text-decoration: none;

  @media (max-width: 800px) {
    font-size: 18px;
    padding: 10px;
  }

  transition: opacity .1s;

  &:hover {
    opacity: 0.8;
  }
`;

export const ExtraLink = styled.p`
  margin-bottom: 20px;
  margin-left: 8px;
  font-size: 12px;

  @media (max-width: 800px) {
    font-size: 10px;
    display: block;
    margin-bottom: 16px;
    margin-left: 2px;
  }
`;

export const VideoCardList = styled.ul`
  margin: 0;
  padding-left: 0;
  padding-bottom: 32px;
  list-style: none;
  display: flex;
  overflow-x: auto;
  flex-direction: row;
  
  li {
    margin-right: 16px;
  }
`;

export const VideoCardGroupContainer = styled.section`
  color: white;
  min-height: 197px;
  margin-left: 2%;
  margin-right: 2%;
  margin-bottom: 16px;
`;
