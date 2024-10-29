# avsthon-work

This repo containts the submission to the 2024 AVSthon's main track.

## Motivation

Current state of peer to peer platforms are exploative to the workers. Usually these platforms overuse their platform and exploit their users
by hidden fees, infavourable work environment, etc. and the users become locked in these platforms. For example an Uber driver cannot
leave and start a private taxi company without taking a big pay-cut. There is no way for them to showcase their previous experience since
these data points belong to the app.
Furthermore bounty programs are becoming more and more mainstream, however these platforms lack clarity and there is a lot of risk for the bounty participants.
With the help of cryptography and smart contracts we can create a system that works for a case by case basis and can take advantage of the network effect. Our solution can be separated into two parts:

- a set of tools through which individuals can set up
- an AVS that can collect the willing participants and create a marketplace. This sharing would happen through ZK proofs
  This creates the right environment where the user would only share their data if they get something in return i.e. the platform and the users would only work together if it is beneficial for both of them.
  Tools like ZKPass could help bring on users w/ as little friction as possible.

In short we aim to solve the following problems fo peer-to-peer job platforms:

- dispute resolution, through pooled security
- security of payments, through restaking and slashing
- minimization of fraudalent activities,
- free-market governance,

Due to restaking, escrow payments become an attractive option for employers due to the interest they can earn on it.
Being an open system anyone can build on top of it, for example due to LLMs a lot of closed platforms suffer from spam. Some user could build a
reputation protocol on top the marketplace.

Our system is open and opt-in by default. Given this, the frontend can be self-hosted. To join the system you only need to register as an operator.

## Technical Details

### Cryptography

Through BBS+ and JSON-LD we can create a ...

### Smart Contract Architecture

There are two main smart contract groups:

- ..., these are necessary to generate a new entry and to keep contract information, etc.
- ..., which is responsible for aggregation and creating an interface for a marketplace.

Each new contract has to be created with a message that is signed by every participant.

### Economics

The parties optionally can keep their token e.g. Ether, any ERC20, LSTs, etc. and earn money by securing the AVS.
Or they can send money to the governing DAO to improve the whole ecosystem.

## Run locally

## Resources
