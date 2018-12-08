const PoBA = artifacts.require('./PoBA.sol')
const UserClaimHolder = artifacts.require('./UserClaimHolder.sol')
const ClaimVerifier = artifacts.require('./ClaimVerifier.sol')

module.exports = function(deployer, network, accounts) {
  deployer.deploy(PoBA)

  // Use the 5th account to interact with the DApp
  if (network === 'development') {
    deployer.deploy(UserClaimHolder, { from: accounts[4] })
    deployer.deploy(ClaimVerifier)
  }
}
