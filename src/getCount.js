import { ethers } from "ethers";
import abi from "./utils/abi.json"; // you will have to update this with your contract's abi!  

export default function getCount(provider, contractAddress) {
    console.log("Calling get_count()!");
    // const counterContract = new ethers.Contract(contractAddress, abi, provider);

    // WE NOW HAVE A CONTRACT OBJECT ... we just have to call the method you defined in your contract to get the count!

    //  const result = counterContract.getCount() . . . something like this

    //  Also beware that result may be a big number, not an int!

    // https://docs.ethers.org/v5/api/contract/contract/#Contract--methods
    return 0;

}