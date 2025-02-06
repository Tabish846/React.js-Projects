import React from 'react';
import Poster from './Poster';

const Row = ({title, posters}) => {
  return (
    <div>
      <div className="row">
        <h2>{title}</h2>
        <Poster posters={posters} />
        </div>
    </div>
  )
}

export default Row;
