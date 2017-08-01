import { ClockProjectPage } from './app.po';

describe('clock-project App', () => {
  let page: ClockProjectPage;

  beforeEach(() => {
    page = new ClockProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
