import React from 'react';

const Course = (props) => {
    const {course_name, course} = props;

    return (
        <React.Fragment>
            <h1>{course_name} - {course.length} items</h1>
            {course.map( c => 
                <span key={ c.id } style={{padding:'2px', border: '1px solid red'}}>
                    {c.name}
                </span>
            )}
        </React.Fragment>
    );
}

export default Course;
