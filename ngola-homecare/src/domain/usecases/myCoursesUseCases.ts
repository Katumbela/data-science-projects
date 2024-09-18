
import type { ICourse } from "@/infra/interfacess";
import type { MyCourseRepository } from "../repo/myCoursesRepository";
import type { IStudentCourseProgress } from "@/infra/interfacess/student-progress-courses";

export class MyCourseUseCase {
  private courseRepository: MyCourseRepository;

  constructor(courseRepository: MyCourseRepository) {
    this.courseRepository = courseRepository;
  }

  async getAllCourses(): Promise<IStudentCourseProgress[]> {
    return this.courseRepository.getAll();
  }

  async getCourseById(id: number): Promise<IStudentCourseProgress> {
    return this.courseRepository.getById(id);
  }

  async getCoursesByStatus(status: 'in-progress' | 'completed'): Promise<IStudentCourseProgress[]> {
    return this.courseRepository.getByStatus(status);
  }

  async updateCourse(id: number, courseData: Partial<IStudentCourseProgress>): Promise<IStudentCourseProgress> {
    return this.courseRepository.updateCourse(id, courseData);
  }

  // Deleta um curso
  async deleteCourse(id: number): Promise<void> {
    return this.courseRepository.deleteCourse(id);
  }
}
