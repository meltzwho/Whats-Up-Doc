import DoctorListEntry from './DoctorListEntry.jsx';
import React from 'react';
var DoctorList = (props) => {
  var DoctorListEntries = props.doctors.map((doctor) => {
    return <DoctorListEntry doctor={doctor} key={doctor.uid} onClick={props.onClick}/>;
  });
  return(
    <div>{DoctorListEntries}</div>
  );
};

export default DoctorList;
