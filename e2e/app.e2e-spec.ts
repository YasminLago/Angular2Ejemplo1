import { CursoTypeScriptPage } from './app.po';

describe('curso-type-script App', function() {
  let page: CursoTypeScriptPage;

  beforeEach(() => {
    page = new CursoTypeScriptPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
