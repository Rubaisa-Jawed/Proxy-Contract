/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  LogicContractV2,
  LogicContractV2Interface,
} from "../LogicContractV2";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "b",
        type: "uint256",
      },
    ],
    name: "Sub",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "b",
        type: "uint256",
      },
    ],
    name: "calc",
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
    inputs: [],
    name: "calculateResult",
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
    inputs: [],
    name: "user",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061036a806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806332bb2c0d146100465780634f8632ba146100765780636e008b3514610094575b600080fd5b610060600480360381019061005b91906101c5565b6100b2565b60405161006d919061023a565b60405180910390f35b61007e610184565b60405161008b919061021f565b60405180910390f35b61009c6101aa565b6040516100a9919061023a565b60405180910390f35b600081836100c0919061027e565b6000819055508260005410156100ff577f4e487b7100000000000000000000000000000000000000000000000000000000600052600160045260246000fd5b7f1ec9c2c0de75ef4097bfe9cc21283021a9e36bc52b5d94da63d712924af74a328383604051610130929190610255565b60405180910390a133600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600054905092915050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60005481565b6000813590506101bf8161031d565b92915050565b600080604083850312156101d857600080fd5b60006101e6858286016101b0565b92505060206101f7858286016101b0565b9150509250929050565b61020a816102b2565b82525050565b610219816102e4565b82525050565b60006020820190506102346000830184610201565b92915050565b600060208201905061024f6000830184610210565b92915050565b600060408201905061026a6000830185610210565b6102776020830184610210565b9392505050565b6000610289826102e4565b9150610294836102e4565b9250828210156102a7576102a66102ee565b5b828203905092915050565b60006102bd826102c4565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b610326816102e4565b811461033157600080fd5b5056fea2646970667358221220a2dc0e632d03231de5132e0d8a65793816caa5d9e8692e88c47dc11ace8edaec64736f6c63430008000033";

type LogicContractV2ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LogicContractV2ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LogicContractV2__factory extends ContractFactory {
  constructor(...args: LogicContractV2ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<LogicContractV2> {
    return super.deploy(overrides || {}) as Promise<LogicContractV2>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): LogicContractV2 {
    return super.attach(address) as LogicContractV2;
  }
  connect(signer: Signer): LogicContractV2__factory {
    return super.connect(signer) as LogicContractV2__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LogicContractV2Interface {
    return new utils.Interface(_abi) as LogicContractV2Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LogicContractV2 {
    return new Contract(address, _abi, signerOrProvider) as LogicContractV2;
  }
}
