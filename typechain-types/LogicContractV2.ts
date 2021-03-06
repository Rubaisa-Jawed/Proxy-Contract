/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface LogicContractV2Interface extends utils.Interface {
  functions: {
    "calc(uint256,uint256)": FunctionFragment;
    "calculateResult()": FunctionFragment;
    "user()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "calc",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "calculateResult",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "user", values?: undefined): string;

  decodeFunctionResult(functionFragment: "calc", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "calculateResult",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "user", data: BytesLike): Result;

  events: {
    "Sub(uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Sub"): EventFragment;
}

export type SubEvent = TypedEvent<
  [BigNumber, BigNumber],
  { a: BigNumber; b: BigNumber }
>;

export type SubEventFilter = TypedEventFilter<SubEvent>;

export interface LogicContractV2 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: LogicContractV2Interface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    calc(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    calculateResult(overrides?: CallOverrides): Promise<[BigNumber]>;

    user(overrides?: CallOverrides): Promise<[string]>;
  };

  calc(
    a: BigNumberish,
    b: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  calculateResult(overrides?: CallOverrides): Promise<BigNumber>;

  user(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    calc(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateResult(overrides?: CallOverrides): Promise<BigNumber>;

    user(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "Sub(uint256,uint256)"(a?: null, b?: null): SubEventFilter;
    Sub(a?: null, b?: null): SubEventFilter;
  };

  estimateGas: {
    calc(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    calculateResult(overrides?: CallOverrides): Promise<BigNumber>;

    user(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    calc(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    calculateResult(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    user(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
