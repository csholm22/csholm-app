import { CsholmAppPage } from './app.po';

describe('csholm-app App', () => {
  let page: CsholmAppPage;

  beforeEach(() => {
    page = new CsholmAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
