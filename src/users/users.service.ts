import { Injectable } from '@nestjs/common';

export type Users = {
  id: number;
  name: string;
  username: string;
  password: string;
};

@Injectable()
export class UsersService {
  private readonly users: Users[] = [
    {
      id: 1,
      name: 'hassan',
      username: 'Azan100',
      password: 'password20',
    },
    {
      id: 2,
      name: 'hassan',
      username: 'Azan100',
      password: 'password21',
    },
    {
      id: 3,
      name: 'Elias',
      username: 'Ely100',
      password: 'password22',
    },
  ];

  async findOne(username: string): Promise<Users | undefined> {
    return this.users.find((users) => users.username === username);
  }
}
