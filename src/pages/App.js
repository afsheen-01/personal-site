import { useState } from 'react';
import '../styles/App.css';
import { Accountable } from './Accountable';


function App() {
  const [openAccountable, setOpenAccountable] = useState(false);

  return (
    <>
      <h1>Accountability tracker</h1>
      <button onClick={ () => setOpenAccountable(!openAccountable) }> What did we end up doing today?</button>
      { openAccountable ? <Accountable />:<></>}
    </>
  );
}

export default App;
