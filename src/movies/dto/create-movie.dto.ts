import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateMovieDTO {

  @IsString()
  readonly title: string;

  @IsNumber()
  readonly year: number;

  @IsString({each: true})
  @IsOptional()
  readonly genres: string[];
}
// 사람이 보냈으면 하는거, 보내야하는 것에 대한 타입을 정의