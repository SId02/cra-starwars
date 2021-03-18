
import React from 'react';
import { useQuery, gql } from '@apollo/client';
import './App.css';


const ALL_STARSHIPS = gql`
{
  allStarships{
    id
    name
  }
}
`
function App() {
  const { loading, error, data } = useQuery(ALL_STARSHIPS);
  if (loading) return <p>Loading ...</p>
  if(error) return <p>Something went wrong...</p>
  return (
    <>
      <h2>Star Wars Spaceships</h2>
      {data.allStarships.map((starship, id) => (
        <p key={id}>{starship.name }</p>
      ))}
    </>
  );
}

export default App;
