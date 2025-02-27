import { ethers } from "ethers";
import { approve } from "./token_sale.ts";

const RPC_URL = process.env.RPC_URL;
const ACCOUNT_PRIVATE_KEY = process.env.ACCOUNT_PRIVATE_KEY;

const CHAPEL_SWAP_CONTRACT = "0x6770CeCE58f06ED8E24ef424474aC70F2fD7754E";

async function main() {
    const provider = new ethers.JsonRpcProvider(RPC_URL);
    const wallet = new ethers.Wallet(ACCOUNT_PRIVATE_KEY, provider);
    
    const [receipt, error] = await approve(
      wallet,
      "0x2b8cbd57eded952c49162bfa23be9acf595f2b0f", // token to approve
      CHAPEL_SWAP_CONTRACT,
    );

    if(error !== null) {
      throw error
    }

    return receipt
}

await main()
	.then((receipt) => {
		console.log(`Result: ${JSON.stringify(receipt)}`);
	})
	.catch(console.error);
