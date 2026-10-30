import React from 'react';

function StudentForm() {
  return (
    <form>
      <h2>Student Registration</h2>
      <input type="text" placeholder="Enter Name" />
      <input type="text" placeholder="Enter Roll No" />
      <button type="submit">Register</button>
    </form>
  );
}

export default StudentForm;