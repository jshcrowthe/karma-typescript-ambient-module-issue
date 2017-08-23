import * as module from 'testModule';

export class HelloBotImpl implements module.HelloBot {
    sayHello() {
        return `Hi there!`;
    }
}