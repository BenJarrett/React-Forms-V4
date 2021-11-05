import React from 'react';

export default function StudentForm() {
  return (
        <>
        <div className='student-form'>
          <form id='addStudentForm'
                autoComplete='off'
                // onSubmit={}
                >
                <h2>New Student</h2>
                <label>Name: </label>
                <input></input>
                <label>Teacher: </label>
                <input></input>
                <label>Grade: </label>
                <input></input>
                <button type='submit'>Submit</button>
          </form>

        </div>
        </>

  );
}
