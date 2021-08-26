import { Controller, Get, HttpCode } from '@nestjs/common';

@Controller()
export class HealthcheckController {
  @Get('checkhealth')
  @HttpCode(200)
  public async checkhealth(): Promise<string> {
    return 'Success';
  }
}
