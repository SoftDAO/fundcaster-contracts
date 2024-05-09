//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol"; 

contract CustomToken is ERC20 {

    constructor(string memory name, string memory symbol, uint initial_supply) ERC20(name, symbol) {
        _mint(msg.sender, initial_supply);
    }
}