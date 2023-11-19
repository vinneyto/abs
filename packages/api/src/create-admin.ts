import { User } from './models';

export async function createAdminIfNotExists() {
  const username = process.env.ADMIN_USERNAME as string | undefined;
  const password = process.env.ADMIN_PASSWORD as string | undefined;

  if (!username || !password) {
    throw new Error('unable to create admin');
  }

  const user = await User.findOne({ username });

  if (user) {
    return;
  }

  await User.create({ username, password });
}
