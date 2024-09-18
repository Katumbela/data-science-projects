import { ICourse } from "@/infra/interfacess";


export const getRandomSponsoredCourse = (courses: ICourse[]) => {
    const sponsoredCourses = courses.filter((c) => c.sponsored === true);

    console.log(courses)
    
    if (sponsoredCourses.length > 0) {
        const randomIndex = Math.floor(Math.random() * sponsoredCourses.length);
        return sponsoredCourses[randomIndex];
    }
    return null;
};
