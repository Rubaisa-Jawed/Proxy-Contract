//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "./LogicContractV1.sol";

contract LogicContractV2 {
    
    uint public calculateResult;
    address public user;

    event Sub(uint a, uint b);
    
    function calc(uint a, uint b) public returns (uint) {
        calculateResult = a - b;
        assert(calculateResult >= a);

        emit Sub(a, b);
        user = msg.sender;

        return calculateResult;
    }
}