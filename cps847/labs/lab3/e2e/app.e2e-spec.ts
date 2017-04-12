import { Lab3Page } from './app.po';

describe('lab3 App', function() {
  let page: Lab3Page;

  beforeEach(() => {
    page = new Lab3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
