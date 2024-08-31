import { useState } from 'react';
import data from './data';
import List from './List';

const App = () => {
  const [pepole, setPepole] = useState(data);

  return (
    <main>
      <section className='container'>
        <h3>{pepole.length} birthdays to day</h3>
        <List pepole={pepole} />
        <button
          type='button'
          className='btn btn-block'
          onClick={() => {
            setPepole([]);
          }}
        >
          {' '}
          clear all
        </button>
      </section>
    </main>
  );
};
export default App;
