import courses from '@/data/courses.json';

export default function CoursesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Available Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div key={course.name} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-2">{course.name}</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              <strong>Lecturer:</strong> {course.lecturer}
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              <strong>Semester:</strong> {course.semester}
            </p>
            <p className="text-gray-700 dark:text-gray-300">{course.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
