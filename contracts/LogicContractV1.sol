//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract LogicContractV1 {

    uint public calculateResult;
    address public user;

    event Add(uint a, uint b);
    
    function calc(uint a, uint b) public returns (uint) {
        calculateResult = a + b;
        assert(calculateResult >= a);

        emit Add(a, b);
        user = msg.sender;

        return calculateResult;
    }
}