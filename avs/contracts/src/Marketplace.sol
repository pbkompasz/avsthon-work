// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import {WorkContract} from "./Contract.sol";

contract Marketplace {
    struct User {
        string name;
    }

    WorkContract[] contracts;
    User[] users;

    constructor(string memory name) {}

    function insertContract() external {

    }
}
