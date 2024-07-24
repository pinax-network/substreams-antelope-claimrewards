// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0

import { Writer, Reader } from "as-proto/assembly";
import { Timestamp } from "../../../google/protobuf/Timestamp";

export class Pay {
  static encode(message: Pay, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.trxId);

    writer.uint32(16);
    writer.uint32(message.actionIndex);

    writer.uint32(58);
    writer.string(message.bp);

    writer.uint32(66);
    writer.string(message.quantity);

    writer.uint32(88);
    writer.int64(message.amount);

    writer.uint32(97);
    writer.double(message.value);

    writer.uint32(104);
    writer.uint64(message.blockNum);

    const timestamp = message.timestamp;
    if (timestamp !== null) {
      writer.uint32(114);
      writer.fork();
      Timestamp.encode(timestamp, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): Pay {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new Pay();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.trxId = reader.string();
          break;

        case 2:
          message.actionIndex = reader.uint32();
          break;

        case 7:
          message.bp = reader.string();
          break;

        case 8:
          message.quantity = reader.string();
          break;

        case 11:
          message.amount = reader.int64();
          break;

        case 12:
          message.value = reader.double();
          break;

        case 13:
          message.blockNum = reader.uint64();
          break;

        case 14:
          message.timestamp = Timestamp.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  trxId: string;
  actionIndex: u32;
  bp: string;
  quantity: string;
  amount: i64;
  value: f64;
  blockNum: u64;
  timestamp: Timestamp | null;

  constructor(
    trxId: string = "",
    actionIndex: u32 = 0,
    bp: string = "",
    quantity: string = "",
    amount: i64 = 0,
    value: f64 = 0.0,
    blockNum: u64 = 0,
    timestamp: Timestamp | null = null
  ) {
    this.trxId = trxId;
    this.actionIndex = actionIndex;
    this.bp = bp;
    this.quantity = quantity;
    this.amount = amount;
    this.value = value;
    this.blockNum = blockNum;
    this.timestamp = timestamp;
  }
}