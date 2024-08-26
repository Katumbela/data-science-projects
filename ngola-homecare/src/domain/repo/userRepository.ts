import type { IUser } from "@/infra/interfacess";

export interface IUserRepository {
  findUserByCredentials(username: string, password: string): Promise<IUser | null>;
  findUserById(id: number): Promise<IUser | null>;

  // Ajuste para não exigir `id` durante a criação
  createUser(user: Omit<IUser, 'id' | 'profile'>): Promise<IUser>;
  updateUser(id: number, userData: Partial<Omit<IUser, 'id' | 'profile'>>): Promise<IUser>;
}
