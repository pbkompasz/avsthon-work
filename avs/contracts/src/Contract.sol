// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract WorkContract {
    bytes privacyFilter;
    bool isMarketplaceParticipant;

    constructor(bytes[] memory confidentialContract) {
      parseJsonLdContract(confidentialContract);
    }

    function parseJsonLdContract(
        bytes[] memory confidentialContract
    ) internal {}
}
