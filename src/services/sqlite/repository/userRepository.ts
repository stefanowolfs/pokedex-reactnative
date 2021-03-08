import { DeleteResult, getRepository, Repository, UpdateResult } from 'typeorm';
import { UserEntity } from '../entity/user.entity';

export default class UserRepository {
  private instanceRepo: Repository<UserEntity>;

  constructor() {
    this.instanceRepo = getRepository(UserEntity);
  }

  async findByActiveEqualsTrue(): Promise<UserEntity> {
    return this.instanceRepo.findOne({ active: true });
  }

  async findByIdAndInactivate(id: string): Promise<UpdateResult> {
    return this.instanceRepo.update({ id }, { active: false });
  }

  async findByUsername(username: string): Promise<UserEntity> {
    return this.instanceRepo.findOne({ username });
  }

  async save(validationLogin: UserEntity): Promise<UserEntity> {
    return this.instanceRepo.save(validationLogin);
  }

  async deleteById(id: number): Promise<DeleteResult> {
    return this.instanceRepo.delete(id);
  }

  async removeAll(): Promise<void> {
    return this.instanceRepo.clear();
  }
}
