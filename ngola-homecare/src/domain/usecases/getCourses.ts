
import type { ICourse } from "@/infra/interfacess";
import type { CourseRepository } from "../repo/courseRepository";

export class CourseUseCase {
  constructor(private courseRepository: CourseRepository) { }

  async execute(): Promise<ICourse[]> {
    return this.courseRepository.getAll();
  }

  async getById(id: number): Promise<ICourse> {
    return this.courseRepository.getById(id);
  }

  async updateCourse(id: number, courseData: Partial<ICourse>): Promise<ICourse> {
    return this.courseRepository.updateCourse(id, courseData);
  }

  async deleteCourse(id: number): Promise<void> {
    return this.courseRepository.deleteCourse(id);
  }
}
