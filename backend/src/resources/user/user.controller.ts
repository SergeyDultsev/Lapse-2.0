import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Query,
} from '@nestjs/common';
import { UserService } from '@resources/user/user.service';
import { QueryDto } from '@common/dto/query-dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // TODO: Доделать
  @Get()
  @HttpCode(200)
  async usersSearch(@Query() query: QueryDto) {
    const users = await this.userService.getUsersSearch(query);

    return {
      data: users,
      message: 'Users recommendation',
      statusCode: HttpStatus.OK,
    };
  }

  // TODO: Доделать
  @Get(['/recommendation', '/recommendation/:id'])
  @HttpCode(200)
  async usersRecommendation(@Param('id') id: string) {
    const users = await this.userService.getUsersRecommendation(id ?? null);

    return {
      data: users,
      message: 'Users recommendation',
      statusCode: HttpStatus.OK,
    };
  }

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
}
