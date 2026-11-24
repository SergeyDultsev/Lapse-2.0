import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service.js';
import { QueryDto } from '@common/dto/query-dto.js';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  @HttpCode(200)
  async findUserById(@Param('id') id: string) {
    const user = await this.userService.getUser(id);

    return {
      data: user,
      message: `User ${user.username} with id ${id}`,
      statusCode: HttpStatus.OK,
    };
  }

  // TODO: Доделать
  @Get('/recommendation/:id')
  @HttpCode(200)
  async usersRecommendation(@Param('id') id: string) {
    const users = await this.userService.getUsersRecommendation(id);

    return {
      data: users,
      message: 'Users recommendation',
      statusCode: HttpStatus.OK,
    };
  }

  // TODO: Доделать
  @Get('/search')
  @HttpCode(200)
  async usersSearch(@Query() query: QueryDto) {
    const users = await this.userService.getUsersSearch(query);

    return {
      data: users,
      message: 'Users recommendation',
      statusCode: HttpStatus.OK,
    };
  }
}
