import dataSource from '@/config/data-source';
import { runSeeder } from 'typeorm-extension';
import { UsersSeeder } from '@/database/seeds/users.seed';

async function seed() {
  await dataSource.initialize();

  try {
    await runSeeder(dataSource, UsersSeeder);
  } finally {
    await dataSource.destroy();
  }
}

seed().catch((error) => {
  console.error('[seed] failed', error);
  process.exitCode = 1;
});
