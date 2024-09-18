import type { ICourse } from "@/infra/interfacess";

export interface CourseRepository {
  getAll(): Promise<ICourse[]>;
  getById(id: number): Promise<ICourse>;
  updateCourse(id: number, courseData: Partial<ICourse>): Promise<ICourse>;
  deleteCourse(id: number): Promise<void>;
}
