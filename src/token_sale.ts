import { ethers } from "ethers";
import ERC20_ABI from "./abi/ERC20_TokenSale.ts";

/**
 * Run approve method on a TokenSale contract to approve spender to spend the token holded by runner wallet
 * @param {ethers.ContractRunner} runner
 * @param {string} tokenAddress
 * @param {string} spender
 */
export async function approve(
	runner: ethers.ContractRunner,
	tokenAddress: string,
	spender: string,
): Promise<[string | null, Error | null]> {
	try {
		const contract = new ethers.Contract(tokenAddress, ERC20_ABI, runner);

		// biome-ignore lint/complexity/useLiteralKeys: contract is not strictly typed
		const tx = await contract["approve"](spender, ethers.MaxUint256);
		const receipt = await tx.wait();
		console.log(`Transaction mined in block ${receipt.blockNumber}`);
    return [receipt, null]
	} catch (error) {
    console.error("Transaction failed:", error);
    return [null, error as Error]
	}
}
