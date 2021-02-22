import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';

// deploy/00_deploy_my_contract.js
module.exports = async ({getNamedAccounts, deployments}) => {
  const {deploy} = deployments;
  const {deployer} = await getNamedAccounts();
  await deploy('FakeERC20', {
    from: deployer,
    log: true,
  });
  await deploy('PineCore', {
    from: deployer,
    log: true,
  });
  await deploy('', {
    from: deployer,
    log: true,
  });
};
module.exports.tags = ['FakeERC20']