// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Marketplace {
    struct User {
        string name;
    }

    struct Contract {
        string name;
    }

    constructor(string memory name) {}

    function parseJsonLdContract(
        bytes[] memory confidentialContract
    ) internal returns (Contract memory parsedConfidentialContract) {}
}
