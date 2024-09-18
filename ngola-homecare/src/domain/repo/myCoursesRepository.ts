 
import type { IStudentCourseProgress } from "@/infra/interfacess/student-progress-courses";

export interface MyCourseRepository {
  getAll(): Promise<IStudentCourseProgress[]>;
  getById(id: number): Promise<IStudentCourseProgress>;
  getByStatus(status: 'in-progress' | 'completed'): Promise<IStudentCourseProgress[]>;
  updateCourse(id: number, courseData: Partial<IStudentCourseProgress>): Promise<IStudentCourseProgress>;
  deleteCourse(id: number): Promise<void>;
}
