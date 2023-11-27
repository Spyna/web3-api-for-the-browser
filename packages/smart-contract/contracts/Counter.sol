// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract Counter {
    int256 public count;

    function increment() public {
        count += 1;
    }

    function decrement() public {
        count -= 1;
    }

}



