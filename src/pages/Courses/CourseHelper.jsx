export function searchCourses(data, query) {
  const q = query.toLowerCase().trim();
  if (!q) return [];

  const results = [];

  for (const [category, courses] of Object.entries(data)) {
    for (const course of courses) {
      // Combine all searchable fields
      const combined = [
        category,
        course.code,
        course.title,
        course.desc
      ].join(' ').toLowerCase();

      if (combined.includes(q)) {
        results.push({ ...course, category });
      }
    }
  }

  return results;
}