import { ContentWrapModule } from './content-wrap.module';

describe('ContentWrapModule', () => {
  let contentWrapModule: ContentWrapModule;

  beforeEach(() => {
    contentWrapModule = new ContentWrapModule();
  });

  it('should create an instance', () => {
    expect(contentWrapModule).toBeTruthy();
  });
});
