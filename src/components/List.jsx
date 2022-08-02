import React from 'react';
import ListItem from './ListItem';

export default function List({ data = [] }) {
  return (
    <>
      {data.map((item, idx) => (
        <ListItem key={idx} item={item} />
      ))}
    </>
  );
}
