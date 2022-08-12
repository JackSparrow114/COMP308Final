import React, { useState } from 'react';
import {gql, useMutation} from "@apollo/client";

const ADD_VISIT = gql`
    mutation addVisit($nurseId: String!, $patientId: String!) {
        addVisit(nurseId: $nurseId, patientId: $patientId) {
            nurseId
            patientId
        }
    }
`;

//
const CourseList = () => {
    const [nurseInput, setNurseInput] = useState('');
    const [patientInput, setPatientInput] = useState('');

    const [addVisit, { loading, error , data }] = useMutation(ADD_VISIT);

    if (loading) return <p>Loading...</p>;
    if (error) return `Error! ${error.message}`;
    if(data) return `${data.addVisit}`;

    return (
        <div>
        <form className="formInput" onSubmit={(e) => {
          e.preventDefault();
          addVisit({ variables: { nurseId: nurseInput,  patientId: patientInput} });
        }}>
          <input
            className="input"
            placeholder="NurseName"
           value={nurseInput}
           onChange={e => (setNurseInput(e.target.value))}
          />
          <input
            className="input"
            placeholder="PatientName"
           value={patientInput}
           onChange={e => (setPatientInput(e.target.value))}
          />
          <input type="submit" value="Submit" />
        </form>
        </div>
      );
}

export default CourseList
