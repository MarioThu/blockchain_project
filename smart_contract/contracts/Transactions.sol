// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

contract Transactions {

    uint256 transactionCount;

    event Transfer(address from, address receiver, uint amount, uint timestamp);

    struct TransferStruct{
        address sender;
        address receiver;
        uint amount;
        uint timestamp;
    }

    TransferStruct[] transactions;

    function addToBlockchain(address payable receiver, uint amount) public {
        transactionCount+=1;
        transactions.push(TransferStruct(msg.sender,receiver,amount,block.timestamp));
        emit Transfer(msg.sender,receiver,amount,block.timestamp);
    }
}