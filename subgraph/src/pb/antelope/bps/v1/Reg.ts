// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0

import { Writer, Reader } from "as-proto/assembly";
import { Timestamp } from "../../../google/protobuf/Timestamp";

export class Reg {
  static encode(message: Reg, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.trxId);

    writer.uint32(16);
    writer.uint32(message.actionIndex);

    writer.uint32(42);
    writer.string(message.bp);

    writer.uint32(50);
    writer.string(message.url);

    writer.uint32(56);
    writer.uint32(message.location);

    writer.uint32(66);
    writer.string(message.publicKey);

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

  static decode(reader: Reader, length: i32): Reg {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new Reg();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.trxId = reader.string();
          break;

        case 2:
          message.actionIndex = reader.uint32();
          break;

        case 5:
          message.bp = reader.string();
          break;

        case 6:
          message.url = reader.string();
          break;

        case 7:
          message.location = reader.uint32();
          break;

        case 8:
          message.publicKey = reader.string();
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
  url: string;
  location: u32;
  publicKey: string;
  blockNum: u64;
  timestamp: Timestamp | null;

  constructor(
    trxId: string = "",
    actionIndex: u32 = 0,
    bp: string = "",
    url: string = "",
    location: u32 = 0,
    publicKey: string = "",
    blockNum: u64 = 0,
    timestamp: Timestamp | null = null
  ) {
    this.trxId = trxId;
    this.actionIndex = actionIndex;
    this.bp = bp;
    this.url = url;
    this.location = location;
    this.publicKey = publicKey;
    this.blockNum = blockNum;
    this.timestamp = timestamp;
  }
}