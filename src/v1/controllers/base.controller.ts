import { BaseResponse } from "../interfaces/base.interface";
import { Response } from 'express';
import { StatusCodes } from "http-status-codes";

export class BaseController {

    public getResponse(res: Response, baseResponse: BaseResponse) : Response {
        switch(baseResponse.code) {
            case StatusCodes.OK:
                return res.status(200).json(baseResponse);
            case StatusCodes.CREATED:
                return res.status(201).json(baseResponse);
            case StatusCodes.NOT_FOUND:
                return res.status(404).json(baseResponse);
            case StatusCodes.BAD_REQUEST:
                return res.status(400).json(baseResponse);
            default:
                return res.status(500).json("An unknown error occurred");

        }
        
    }

}