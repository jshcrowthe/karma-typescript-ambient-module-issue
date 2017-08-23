import { expect } from "chai";
import { HelloBotImpl } from "./testComponent";

describe('Ambient module include', () => {
  let bot: HelloBotImpl;
  beforeEach(() => {
    bot = new HelloBotImpl();
  });
  it('Should say hello', () => {
    expect(bot.sayHello()).to.be.ok;
  });
});
