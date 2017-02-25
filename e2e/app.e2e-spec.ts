import { PubmaticPage } from './app.po';

describe('pubmatic App', function() {
  let page: PubmaticPage;

  beforeEach(() => {
    page = new PubmaticPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
