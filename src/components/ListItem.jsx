import React from 'react';

export default function ListItem({ item }) {
  return (
    <div style={{ whiteSpace: 'pre' }}>{JSON.stringify(item, null, 2)}</div>
  );
}
