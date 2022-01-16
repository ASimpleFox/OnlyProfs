import React from "react";
import axios from "axios";
import './EditCourse.css';
import {TextField} from '@material-ui/core';

function EditCourse() {
    const [course, setCourse] = React.useState({
        courseName: "",
        courseCode: "",
        courseDescription: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCourse({ ...course, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
            .post("http://localhost:5000/api/courses/", course)
            .then((res) => {
                console.log(res);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div >
            <h1>Edit Course</h1>
            <form className="course-info" onSubmit={handleSubmit}>
                <TextField id="standard-basic" label="Course Name" variant="outlined" />
                <label>
                    Course Code:
                    <input
                        type="text" 
                        name="courseCode"
                        value={course.courseCode}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Course Description:
                    <input

                        type="text"
                        name="courseDescription"
                        value={course.courseDescription}
                        onChange={handleChange}
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}
export default EditCourse;
