import { FjCardItemModule } from './card-item.module';

describe('CardItemModule', () => {
  let cardItemModule: FjCardItemModule;

  beforeEach(() => {
    cardItemModule = new FjCardItemModule();
  });

  it('should create an instance', () => {
    expect(cardItemModule).toBeTruthy();
  });
});
