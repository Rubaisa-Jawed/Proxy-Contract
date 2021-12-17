# Proxy Contract

In this code, the user interacts with a proxy contract that then interacts with logic contracts, which process the transaction, whose data is then retrieved by the proxy contract.

Logic contracts are upgradable, in a sense they can be changed. An upgraded version can be deployed and then arranged so that the proxy contract points at it.