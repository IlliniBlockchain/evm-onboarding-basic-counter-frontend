import './App.css';
import { useState } from 'react';
import { ethers } from "ethers";
import getCount from './getCount';
//import increment from './Increment';

function App() {
  const [count, setCount] = useState(12);


  const ALCH_API_KEY = "V5c2edHQSwIjWo1BUWARZ8XO1yB2ygbl"; // don't do this in production - ever
  const CONTRACT_ADDRESS = "0xF67043b80f6BCDa14675836DD8CE8405Cef4090b";
  const network = "goerli" // what network do you think we should use.  We want to use a testnet . . .
  
  const provider = new ethers.AlchemyProvider(network, ALCH_API_KEY); // to access the blockchain we need acess to a node.  Alchemy runs some we can connect to.

  return (
    <div className="App">
      <header className="App-header">
        Count is {count}
        <button onClick={() => {setCount(getCount(provider, CONTRACT_ADDRESS))}}>Get Count!</button>
        {/* <button onClick={() => {(increment(provider, CONTRACT_ADDRESS))}}>Increment!</button> */}
      </header>
    </div>
  );
}

export default App;
