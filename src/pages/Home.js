import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import _ from 'lodash';

import { FETCH_USERS } from '../reducers/users';

import Item from '../container/Home/Item';

const Main = styled.main`
  position: relative;
  margin: 1rem auto;
  width: 300px;
`;

function Home() {
  const dispatch = useDispatch();

  const { lists } = useSelector(state => state.users);

  useEffect(() => {
    dispatch({ type: FETCH_USERS });
  }, [dispatch]);

  const users = _.orderBy(lists, ['score'], ['desc']);

  const renderItem = (item) => {
    const { userID } = item;
    // find the index from users
    const index = _.findIndex(users, { userID });

    const key = `item-${userID}`;
    const top = `${index * 45}px`;
    const rank = index + 1;
    const props = { ...item, key, top, rank };

    return (<Item {...props} />);
  }

  return (
    <Main>
      {lists.map(renderItem.bind(this))}
    </Main>
  )
}

export default Home;
