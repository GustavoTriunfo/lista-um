import { Test, TestingModule } from '@nestjs/testing';
import { OlaService } from './ola.service';

describe('OlaService', () => {
  let service: OlaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OlaService],
    }).compile();

    service = module.get<OlaService>(OlaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
