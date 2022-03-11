// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

contract TestContract {
    address owner;
    uint public totalSupplyToken;
    mapping(address=>uint) public balanceOfToken;

    constructor(){
        owner=msg.sender;
        totalSupplyToken=1000;
        balanceOfToken[owner]=totalSupplyToken;
    }

    function purchaseToken(uint amount ) public payable {
        require(msg.value >= amount *0.1 ether,"You need to pay 0.1 ether per token");
        require(balanceOfToken[owner]>=amount,"No Tokens available");
        balanceOfToken[owner]-=amount;
        balanceOfToken[msg.sender]+=amount;
    }
}
