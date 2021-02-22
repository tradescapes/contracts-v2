import { HardhatUserConfig } from "hardhat/config"
import "@nomiclabs/hardhat-truffle5";
import "@nomiclabs/hardhat-web3";
import 'hardhat-deploy';

const config: HardhatUserConfig = {
  solidity: {
    version: '0.6.8',
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000000
      }
    }
  }
}

export default config