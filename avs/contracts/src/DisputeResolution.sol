// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract DisputeResolution {
    struct Dispute {
        uint8 stage;
        uint8 requestedParticipants;
    }

    mapping(string => Dispute) disputes;

    function assignRandomParticipants(
        string memory disputeId,
        uint8 requestedParticipants
    ) external returns (string[] memory ids) {}
}
