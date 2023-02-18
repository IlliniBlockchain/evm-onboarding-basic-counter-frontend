import './App.css';
import { useState } from 'react';
import { ethers } from "ethers";
import getCount from './getCount';

function App() {
  const [count, setCount] = useState(0);


  const ALCH_API_KEY = "INSERT_YOUR_ALCHEMY_API_KEY"; // don't do this in production - ever
  const CONTRACT_ADDRESS = "INSERT_YOUR_COUNTER_ADDRESS";
  const network = "goerli" // what network do you think we should use.  We want to use a testnet . . .
  const provider = new ethers.AlchemyProvider(network, ALCH_API_KEY); // to access the blockchain we need acess to a node.  Alchemy runs some we can connect to.

  // async function setCount() {
  //   count = getCount(provider, CONTRACT_ADDRESS)
  // }
  return (
    <div className="App">
      <header className="App-header">
        Count is {count}
        <button onClick={() => {setCount(getCount(provider, CONTRACT_ADDRESS))}}>Get Count!</button>
      </header>
    </div>
  );
}

export default App;
