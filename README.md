# avsthon-work

Submitted to the 2024 AVSthon's main track.

## Motivation

Current state of peer to peer platforms are exploative to the workers. Usually these platforms abuse their platform and exploit their users
by hidden fees, infavourable work environment, etc. and the users become locked in these platforms. For example an Uber driver cannot
leave and start a private taxi company without taking a big pay-cut. There is no way for them to showcase their previous experience since
these data points belong to the app.
Furthermore bounty programs are becoming more and more mainstream, however these platforms lack clarity and there is a lot of risk for the bounty participants e.g. no payout after successful submission.

With AVSs and open architectures we can create a system where escrow payments secure the whole ecosystem and a public reputation system can minimize losses due to malicious actors. For example if we restake assets for 4% interest and keep a pubilc record of each actor we can tune the risk level to keep it under the rewards.

In short we aim to solve the following problems fo peer-to-peer job platforms:

- pooled security by restaked escrow payment
- security of payments, through restaking and slashing
- minimization of fraudalent activities
- free-market governance

Our system is open and opt-in by default. Given this, the frontend can be self-hosted. To join the system you only need to register as an operator.
Each contract defines their own level of risk e.g. independent dispute resolution, secured payments, etc.

## Architecture

![architecture](./img/architecture.png)

A bottom up description:

1.  Front-end applications
    - Marketplace e.g. Upwork
    - Self hosted by organization e.g. bounty program
    - B2B e.g. Freelance-to-SMEs
    - Task generator
2.  Operator
    - the operator can handle escrow payments and thus earning interest for the employer via restaking
    - following an on-chain signature verification the contract data can be aggregated into a marketplace
    - operators can handle dispute resolutions and earn some of the restaked funds
3.  AVS (ServiceManager + TaskManager)
    - Escrow payments restaked
    - For each contract participant a signature and proof is published. Each of these have to be validated and aggregated.

## Technical Details

![contract](./img/contract.png)

### Cryptography

The ideal cyrptographic scheme would be BBS+ and JSON-LD through which we can create proofs that are easier to build a marketplace around.
In a employer-employee contract each party has ownership of their information e.g. e.g. name, address, etc. and co-ownership of the contract's
data e.g. price, milestones, etc.
The marketplace aggregator can only include information that was signed and shared with by the respective owner. In case of co-ownership both
parties have to agree to it.
Each party can individually create circuits of co-owned data e.g. they can prove that the contract's price falls in a certain range.

### Economics

The parties optionally can keep their token e.g. Ether, any ERC20, LSTs, etc. and earn money by securing the AVS.
The escrow payments are kept in the AVS in the time between start of a contract and the conclusion of the contract.
This sum and the rewards earned on it secures the whole ecosystem.
Through stake delegation, slashing and a reputation system we can set up a dispute resolution system.

## Deployments

Holesky testnet:

## Resources

[Verifiable Credentials Flavors Explained](https://docs.google.com/document/d/1MqNTo7hIDBKZjLq7eZ7yaPsNFg6Ea3YahR8RR5RtSOM)  
[A linked data proof suite for BBS+ signatures](https://github.com/mattrglobal/jsonld-signatures-bbs)  
[EigenLayer Contracts](https://github.com/Layr-Labs/eigenlayer-contracts/tree/dev/docs#depositing-into-eigenlayer)  
[AVS Book](https://eigenlabs.gitbook.io/avs-book)