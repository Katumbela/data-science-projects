import type { IUser } from "@/infra/interfacess";
import type { IUserRepository } from "../repo/userRepository";

export class userUseCase {
  constructor(private userRepository: IUserRepository) { }

  async auth(email: string, password: string): Promise<IUser | any> {
    console.log(email)
    return this.userRepository.findUserByCredentials(email, password)
  }

  async getUserById(id: any): Promise<IUser | null> {
    return this.userRepository.findUserById(id);
  }

  async updateUser(id: any, userData: Partial<IUser>): Promise<IUser | null> {
    return this.userRepository.updateUser(id, userData)
  }

  async createUser(userData: Omit<IUser, 'id' | 'profile'> & { password: string }): Promise<IUser | null> {

    
    // Prepare the user data for creation
    const newUser: Omit<IUser, 'id' | 'profile'> = {
      name: userData.name,
      password: userData.password,
      email: "",
      is_instructor: false,
    };

    return this.userRepository.createUser(newUser);
  }

}