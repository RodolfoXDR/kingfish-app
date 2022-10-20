import { Get, Req, Res, Param, HttpException, Controller } from "@nestjs/common";
import { CustomResponseService } from "nestjs-custom-response";
import { I18n, I18nContext } from "nestjs-i18n-2";
import { VehicleService } from './vehicle.service';

@Controller('vehicles')
export class VehicleController {
    constructor(
        private readonly vehicleService : VehicleService
    ) {}

    @Get(':id')
    public async getUser(@Req() request : Request, @Res() response : Response, @I18n() i18n : I18nContext, @Param() params : any) : Promise<Response> {
        let customResponse = new CustomResponseService(i18n);

        customResponse = await this.vehicleService.getVehicleById(customResponse, params.id);

        throw new HttpException(customResponse, customResponse.statusCode);
    }
}