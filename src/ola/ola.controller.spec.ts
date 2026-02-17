import { Test, TestingModule } from '@nestjs/testing';
import { OlaController } from './ola.controller';

describe('OlaController', () => {
  let controller: OlaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OlaController],
    }).compile();

    controller = module.get<OlaController>(OlaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
