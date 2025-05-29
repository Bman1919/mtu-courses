import React, { useState, useEffect } from 'react';
import * as CourseHelper from './CourseHelper.jsx';
import './Courses.css';
import coursesJSON from '../../assets/courses.json';

export default function Courses() {
    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [hoveredID, setHoveredID] = useState(null);

    const searchBarChanged = (e) => {
        setSearch(e.target.value);
        const value = search.toLowerCase().trim();
        if (value.length === 0) {
            setSearchResults([]);
            return;
        }
        async function fetchCourses() {
            const results = await CourseHelper.searchCourses(coursesJSON, value);
            setSearchResults(results);
        }
        fetchCourses();
    }

    return (
        <div>
            <h1>Courses</h1>
            <p>This is the courses page of our application.</p>
            <p>
                Here you can find a list of courses offered by our institution.
            </p>
            <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={searchBarChanged}
                className="search-bar"
            />
            <ul>
                {searchResults.map((course) => (
                    <li key={course.id} className="course-item"
                        onMouseEnter={() => setHoveredID(course.code)}
                        onMouseLeave={() => setHoveredID(null)}
                    >
                        {course.code} - {course.title || "No Title"}
                        {(hoveredID === course.code) && (
                            <>
                                <br />
                                {course.description || "No Description"}
                            </>
                        )}
                    </li>

                ))}
            </ul>
        </div>
    );
}