import { PartialType } from "@nestjs/mapped-types";
import { IsNumber, IsString } from "class-validator";
import { CreateMovieDTO } from "./create-movie.dto";

// export class UpdateMovieDTO {

//   @IsString()
//   readonly title?: string;

//   @IsNumber()
//   readonly year?: number;
  
//   @IsString({each: true})
//   readonly genres?: string[];
// }
// 사람이 보냈으면 하는거, 보내야하는 것에 대한 타입을 정의


export class UpdateMovieDTO extends PartialType(CreateMovieDTO){

// partialType need base type => CreateMovieDTO를 paramater로 넣어준다.
}