//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;


contract Proxy {
    
    address public implementation;
    address public owner;
    
    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    } 
    constructor() {
        owner = msg.sender;
    }

    function upgradeTo(address _newImplementation) external onlyOwner {
        _setImplementation(_newImplementation);
    }
    
    function calculateValues(uint a, uint b) public returns (uint) {
        (bool success, bytes memory result) = 
                implementation.delegatecall(abi.encodeWithSignature("calc(uint,uint)", a, b));
        return abi.decode(result, (uint));
    }

    function _setImplementation(address _newImp) internal {
        implementation = _newImp;
    }

}