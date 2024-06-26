/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  ZkLinkPeriphery,
  ZkLinkPeripheryInterface,
} from "../ZkLinkPeriphery";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "acceptor",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint32",
        name: "accountId",
        type: "uint32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "tokenId",
        type: "uint16",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "amount",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "withdrawFeeRate",
        type: "uint16",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "accountIdOfNonce",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "subAccountIdOfNonce",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "nonce",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "amountSent",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "amountReceive",
        type: "uint128",
      },
    ],
    name: "Accept",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "bridge",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "bridgeIndex",
        type: "uint256",
      },
    ],
    name: "AddBridge",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "blockNumber",
        type: "uint32",
      },
    ],
    name: "BlockCommit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "blockNumber",
        type: "uint32",
      },
    ],
    name: "BlockExecuted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "blockNumber",
        type: "uint32",
      },
    ],
    name: "BlockProven",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint32",
        name: "totalBlocksVerified",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "totalBlocksCommitted",
        type: "uint32",
      },
    ],
    name: "BlocksRevert",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint16",
        name: "tokenId",
        type: "uint16",
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "amount",
        type: "uint128",
      },
    ],
    name: "BrokerApprove",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "ExodusMode",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "nonce",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "fact",
        type: "bytes",
      },
    ],
    name: "FactAuth",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "nonce",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "time",
        type: "uint256",
      },
    ],
    name: "FactAuthResetTime",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "newGovernor",
        type: "address",
      },
    ],
    name: "NewGovernor",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "serialId",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "enum Operations.OpType",
        name: "opType",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "pubData",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "expirationBlock",
        type: "uint256",
      },
    ],
    name: "NewPriorityRequest",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint16",
        name: "tokenId",
        type: "uint16",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "decimals",
        type: "uint8",
      },
    ],
    name: "NewToken",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint16",
        name: "token",
        type: "uint16",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "paused",
        type: "bool",
      },
    ],
    name: "TokenPausedUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "bridgeIndex",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "enableBridgeTo",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "enableBridgeFrom",
        type: "bool",
      },
    ],
    name: "UpdateBridge",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "validatorAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isActive",
        type: "bool",
      },
    ],
    name: "ValidatorStatusUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint16",
        name: "tokenId",
        type: "uint16",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "amount",
        type: "uint128",
      },
    ],
    name: "Withdrawal",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint16",
        name: "tokenId",
        type: "uint16",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "recepient",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "amount",
        type: "uint128",
      },
    ],
    name: "WithdrawalPending",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "acceptor",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "accountId",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "uint16",
        name: "tokenId",
        type: "uint16",
      },
      {
        internalType: "uint128",
        name: "amount",
        type: "uint128",
      },
      {
        internalType: "uint16",
        name: "withdrawFeeRate",
        type: "uint16",
      },
      {
        internalType: "uint32",
        name: "accountIdOfNonce",
        type: "uint32",
      },
      {
        internalType: "uint8",
        name: "subAccountIdOfNonce",
        type: "uint8",
      },
      {
        internalType: "uint32",
        name: "nonce",
        type: "uint32",
      },
      {
        internalType: "uint128",
        name: "amountTransfer",
        type: "uint128",
      },
    ],
    name: "acceptERC20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "acceptor",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "accountId",
        type: "uint32",
      },
      {
        internalType: "address payable",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "uint128",
        name: "amount",
        type: "uint128",
      },
      {
        internalType: "uint16",
        name: "withdrawFeeRate",
        type: "uint16",
      },
      {
        internalType: "uint32",
        name: "accountIdOfNonce",
        type: "uint32",
      },
      {
        internalType: "uint8",
        name: "subAccountIdOfNonce",
        type: "uint8",
      },
      {
        internalType: "uint32",
        name: "nonce",
        type: "uint32",
      },
    ],
    name: "acceptETH",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "accepts",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "activateExodusMode",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "bridge",
        type: "address",
      },
    ],
    name: "addBridge",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_tokenId",
        type: "uint16",
      },
      {
        internalType: "address",
        name: "_tokenAddress",
        type: "address",
      },
      {
        internalType: "uint8",
        name: "_decimals",
        type: "uint8",
      },
      {
        internalType: "bool",
        name: "_standard",
        type: "bool",
      },
    ],
    name: "addToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint16",
            name: "tokenId",
            type: "uint16",
          },
          {
            internalType: "address",
            name: "tokenAddress",
            type: "address",
          },
          {
            internalType: "uint8",
            name: "decimals",
            type: "uint8",
          },
          {
            internalType: "bool",
            name: "standard",
            type: "bool",
          },
        ],
        internalType: "struct ZkLinkPeriphery.Token[]",
        name: "_tokenList",
        type: "tuple[]",
      },
    ],
    name: "addTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    name: "authFacts",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "bridgeIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "bridges",
    outputs: [
      {
        internalType: "address",
        name: "bridge",
        type: "address",
      },
      {
        internalType: "bool",
        name: "enableBridgeTo",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "enableBridgeFrom",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "tokenId",
        type: "uint16",
      },
      {
        internalType: "address",
        name: "acceptor",
        type: "address",
      },
      {
        internalType: "address",
        name: "broker",
        type: "address",
      },
    ],
    name: "brokerAllowance",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "tokenId",
        type: "uint16",
      },
      {
        internalType: "address",
        name: "broker",
        type: "address",
      },
      {
        internalType: "uint128",
        name: "amount",
        type: "uint128",
      },
    ],
    name: "brokerApprove",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "_n",
        type: "uint64",
      },
      {
        internalType: "bytes[]",
        name: "_depositsPubdata",
        type: "bytes[]",
      },
    ],
    name: "cancelOutstandingDepositsForExodusMode",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newGovernor",
        type: "address",
      },
    ],
    name: "changeGovernor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "exodusMode",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "firstPriorityRequestId",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_address",
        type: "bytes32",
      },
      {
        internalType: "uint16",
        name: "_tokenId",
        type: "uint16",
      },
    ],
    name: "getPendingBalance",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "blockNumber",
            type: "uint32",
          },
          {
            internalType: "uint64",
            name: "priorityOperations",
            type: "uint64",
          },
          {
            internalType: "bytes32",
            name: "pendingOnchainOperationsHash",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "stateHash",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "commitment",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "syncHash",
            type: "bytes32",
          },
        ],
        internalType: "struct Storage.StoredBlockInfo",
        name: "_block",
        type: "tuple",
      },
    ],
    name: "getSynchronizedProgress",
    outputs: [
      {
        internalType: "uint256",
        name: "progress",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "bridge",
        type: "address",
      },
    ],
    name: "isBridgeFromEnabled",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "bridge",
        type: "address",
      },
    ],
    name: "isBridgeToEnabled",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "networkGovernor",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "blockNumber",
            type: "uint32",
          },
          {
            internalType: "uint64",
            name: "priorityOperations",
            type: "uint64",
          },
          {
            internalType: "bytes32",
            name: "pendingOnchainOperationsHash",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "stateHash",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "commitment",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "syncHash",
            type: "bytes32",
          },
        ],
        internalType: "struct Storage.StoredBlockInfo",
        name: "_storedBlockInfo",
        type: "tuple",
      },
      {
        internalType: "bytes32",
        name: "_owner",
        type: "bytes32",
      },
      {
        internalType: "uint32",
        name: "_accountId",
        type: "uint32",
      },
      {
        internalType: "uint8",
        name: "_subAccountId",
        type: "uint8",
      },
      {
        internalType: "uint16",
        name: "_withdrawTokenId",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "_deductTokenId",
        type: "uint16",
      },
      {
        internalType: "uint128",
        name: "_amount",
        type: "uint128",
      },
      {
        internalType: "uint256[]",
        name: "_proof",
        type: "uint256[]",
      },
    ],
    name: "performExodus",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    name: "performedExodus",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "periphery",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "blockNumber",
            type: "uint32",
          },
          {
            internalType: "uint64",
            name: "priorityOperations",
            type: "uint64",
          },
          {
            internalType: "bytes32",
            name: "pendingOnchainOperationsHash",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "stateHash",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "commitment",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "syncHash",
            type: "bytes32",
          },
        ],
        internalType: "struct Storage.StoredBlockInfo[]",
        name: "_committedBlocks",
        type: "tuple[]",
      },
      {
        components: [
          {
            internalType: "uint256[]",
            name: "recursiveInput",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "proof",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "commitments",
            type: "uint256[]",
          },
          {
            internalType: "uint8[]",
            name: "vkIndexes",
            type: "uint8[]",
          },
          {
            internalType: "uint256[16]",
            name: "subproofsLimbs",
            type: "uint256[16]",
          },
        ],
        internalType: "struct ZkLinkPeriphery.ProofInput",
        name: "_proof",
        type: "tuple",
      },
    ],
    name: "proveBlocks",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "syncHash",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "progress",
        type: "uint256",
      },
    ],
    name: "receiveSynchronizationProgress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "blockNumber",
            type: "uint32",
          },
          {
            internalType: "uint64",
            name: "priorityOperations",
            type: "uint64",
          },
          {
            internalType: "bytes32",
            name: "pendingOnchainOperationsHash",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "stateHash",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "commitment",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "syncHash",
            type: "bytes32",
          },
        ],
        internalType: "struct Storage.StoredBlockInfo[]",
        name: "_blocksToRevert",
        type: "tuple[]",
      },
    ],
    name: "revertBlocks",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_pubkeyHash",
        type: "bytes",
      },
      {
        internalType: "uint32",
        name: "_nonce",
        type: "uint32",
      },
    ],
    name: "setAuthPubkeyHash",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_tokenId",
        type: "uint16",
      },
      {
        internalType: "bool",
        name: "_tokenPaused",
        type: "bool",
      },
    ],
    name: "setTokenPaused",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_validator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_active",
        type: "bool",
      },
    ],
    name: "setValidator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "blockNumber",
            type: "uint32",
          },
          {
            internalType: "uint64",
            name: "priorityOperations",
            type: "uint64",
          },
          {
            internalType: "bytes32",
            name: "pendingOnchainOperationsHash",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "stateHash",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "commitment",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "syncHash",
            type: "bytes32",
          },
        ],
        internalType: "struct Storage.StoredBlockInfo",
        name: "_block",
        type: "tuple",
      },
    ],
    name: "syncBlocks",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "tokenIds",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    name: "tokens",
    outputs: [
      {
        internalType: "bool",
        name: "registered",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "paused",
        type: "bool",
      },
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        internalType: "uint8",
        name: "decimals",
        type: "uint8",
      },
      {
        internalType: "bool",
        name: "standard",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalBlocksCommitted",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalBlocksExecuted",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalBlocksProven",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalBlocksSynchronized",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalCommittedPriorityRequests",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalOpenPriorityRequests",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint128",
        name: "_amount",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "_maxAmount",
        type: "uint128",
      },
      {
        internalType: "bool",
        name: "_isStandard",
        type: "bool",
      },
    ],
    name: "transferERC20",
    outputs: [
      {
        internalType: "uint128",
        name: "withdrawnAmount",
        type: "uint128",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "enableBridgeTo",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "enableBridgeFrom",
        type: "bool",
      },
    ],
    name: "updateBridge",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "validators",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "verifier",
    outputs: [
      {
        internalType: "contract IVerifier",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "uint16",
        name: "_tokenId",
        type: "uint16",
      },
      {
        internalType: "uint128",
        name: "_amount",
        type: "uint128",
      },
    ],
    name: "withdrawPendingBalance",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class ZkLinkPeriphery__factory {
  static readonly abi = _abi;
  static createInterface(): ZkLinkPeripheryInterface {
    return new Interface(_abi) as ZkLinkPeripheryInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ZkLinkPeriphery {
    return new Contract(address, _abi, runner) as unknown as ZkLinkPeriphery;
  }
}
