import { Message } from "discord.js";
import { Command } from "../models";

export class Ping implements Command {
  name: string;

  constructor() {
    this.name = "ping";
  }

  run(msg: Message) {
    msg.channel.send(`💤  Pinging...`).then((sent) => {
      sent.edit(`🏓  Pong! Took ${sent.createdTimestamp - msg.createdTimestamp}ms`);
    });
  }
}
