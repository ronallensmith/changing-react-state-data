import React from 'react';

const  Musicians = ({musicians, deleteMusician}) => {
  const musiciansList = musicians.map(musician => {
    return (
      <div className="musician" key={musician.id}>
        <div>Name: { musician.name }</div>
        <div>Instrument: { musician.instrument }</div>
        <div>Band: { musician.band }</div>
        <button onClick={() => {deleteMusician(musician.id)}}>Delete Musician</button>
        <br/>
      </div>
    )
  })
  return(
    <div className="musicians-list">
      { musiciansList }
    </div>
  )
};

export default Musicians;