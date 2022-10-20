import { Controller, Get, HttpException, Req, Res, SerializeOptions } from "@nestjs/common";
import { Request, Response } from "express";
import { UserService } from './user.service';
import { I18n } from "nestjs-i18n-2/dist/decorators/i18n.decorator";
import { I18nContext } from "nestjs-i18n-2/dist/i18n.context";
import { CustomResponseService } from "nestjs-custom-response";
import { Param } from "@nestjs/common/decorators";
import { extendedUserGroupsForSerializing } from "./serializers/user.serializer";

@Controller('users')
@SerializeOptions({
    groups: extendedUserGroupsForSerializing
})
export class UsersController {
    constructor(
        private readonly userService : UserService
    ) {}

    @Get(':id')
    public async getUser(@Req() request : Request, @Res() response : Response, @I18n() i18n : I18nContext, @Param() params : any) : Promise<Response> {
        let customResponse = new CustomResponseService(i18n);

        customResponse = await this.userService.getUser(customResponse, params.id);

        throw new HttpException(customResponse, customResponse.statusCode);
    }
}