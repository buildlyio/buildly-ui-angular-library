import {FjModalModule} from './modal.module';

describe('ModalModule', () => {
  let modalModule: FjModalModule;

  beforeEach(() => {
    modalModule = new FjModalModule();
  });

  it('should create an instance', () => {
    expect(modalModule).toBeTruthy();
  });
});
