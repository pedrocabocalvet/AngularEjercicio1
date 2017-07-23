import { XXXXPage } from './app.po';

describe('xxxx App', () => {
  let page: XXXXPage;

  beforeEach(() => {
    page = new XXXXPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
