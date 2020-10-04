import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getHello(): Promise<string> {
    return element(by.id('msg-hello-world')).getText() as Promise<string>;
  }

  getHelloMsg(): Promise<string> {
    return element(by.id('msg-upcoming')).getText() as Promise<string>;
  }
}
