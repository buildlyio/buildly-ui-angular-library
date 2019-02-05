import { FjButtonModule } from './button.module';

describe('ButtonModule', () => {
  let buttonModule: FjButtonModule;

  beforeEach(() => {
    buttonModule = new FjButtonModule();
  });

  it('should create an instance', () => {
    expect(buttonModule).toBeTruthy();
  });
});
