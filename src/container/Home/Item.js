import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { transitions } from 'polished';

import DynamicNumber from '../../components/DynamicNumber';

const Main = styled.div`
  position: absolute;
  left: 0;
  display: flex;
  align-items: center;
  width: 100%;
  ${transitions(['top'], '.3s ease-in-out')};
`;

const Rank = styled.div`
  width: 20px;
  text-align: center;
`;

const Avatar = styled.div`
  margin: 0 .5rem;
  width: 32px;
  height: 32px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 100%;
`;

const DisplayName = styled.div``;

const Score = styled.div`
  flex-grow: 1;
  text-align: right;

  &::after {
    content: 'pt';
  }
`;

function Item(props) {

  const { displayName, picture, score, top, rank } = props;

  return (
    <Main style={{ top }}>
      <Rank>{rank}</Rank>
      <Avatar style={{ backgroundImage: `url(${picture})` }}></Avatar>
      <DisplayName>{displayName}</DisplayName>
      <Score><DynamicNumber score={score} /></Score>
    </Main>
  )
}

Item.propTypes = {
  displayName: propTypes.string.isRequired,
  picture: propTypes.string.isRequired,
  score: propTypes.number.isRequired,
  top: propTypes.string.isRequired,
  rank: propTypes.number.isRequired,
}

export default Item;
