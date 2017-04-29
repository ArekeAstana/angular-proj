import { Proj1DirectoryPage } from './app.po';

describe('proj1-directory App', function() {
  let page: Proj1DirectoryPage;

  beforeEach(() => {
    page = new Proj1DirectoryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
