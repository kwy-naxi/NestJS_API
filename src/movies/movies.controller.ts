import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/Movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(readonly moviesService: MoviesService) {}

  @Get()
  getAll() {
    return this.moviesService.getAll();
  }

  // @Get('search')
  // search(@Query('year') searchingYear: string) {
  //   return `We are search title: ${searchingYear}`;
  // }

  @Get(':id')
  getOne(@Param('id') movieId: number): Movie {
    return this.moviesService.getOne(movieId);
  }

  @Post()
  create(@Body() movieData: CreateMovieDto) {
    return this.moviesService.create(movieData);
  }

  @Delete(':id')
  remove(@Param('id') movieId: number) {
    return this.moviesService.deleteOne(movieId);
  }

  @Patch(':id')
  path(@Param('id') movieId: number, @Body() updateDate: UpdateMovieDto) {
    return this.moviesService.update(movieId, updateDate);
  }
}
