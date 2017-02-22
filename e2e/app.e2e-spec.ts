import { ACMPage } from './app.po';

describe('acm App', function() {
  let page: ACMPage;

  beforeEach(() => {
    page = new ACMPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
