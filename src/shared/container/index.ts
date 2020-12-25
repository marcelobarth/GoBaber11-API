import { container } from "tsyringe";

import IApoointmentsRepository from '@modules/appointments/repositories/IApoointmentsRepository';
import AppointmentsRepository from '@modules/appointments/infra/typeorm/repositories/AppointmentsRepository';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

container.registerSingleton<IApoointmentsRepository>(
  'AppointmentsRepository',
  AppointmentsRepository,
  );

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
  );
