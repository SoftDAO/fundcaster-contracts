//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "./CustomToken.sol";

contract CustomTokenFactory {
   event TokenCreated(address tokenContractAddress);

   CustomToken[] public CustomTokenArray;

   function CreateNewCustomToken(string memory name, string memory symbol, uint initial_supply, address feeDepositAddress) public payable {
      CustomToken customToken = new CustomToken(name, symbol, initial_supply);

      // deposit 0.1% of the initial supply of the new token to the feeDepositAddress
      customToken.transfer(feeDepositAddress, initial_supply / 1000);
      
      CustomTokenArray.push(customToken);
      emit TokenCreated(address(customToken));
   }

}