import React, { useState, useEffect } from "react";
import "../../styles/DivisionsTeams/DivisionTeamsFilter.css";

const DivisionTeamsFilter = ({ teams, divisionName }) => {
   const [divisionTeams, setDivisionTeams] = useState([]);

   useEffect(() => {
      const filteredTeams = teams.filter((team) => team.division.toLowerCase() === divisionName.toLowerCase());
      setDivisionTeams(filteredTeams);
   }, [teams, divisionName]);

   return (
      <div className="division-container">
         <h2 className="division__title">Équipes de la division {divisionName}</h2>
         {divisionTeams.map((team, index) => (
            <p key={index} className="division__name">
               {team.full_name}
            </p>
            // Remplacez team.name par les propriétés que vous souhaitez afficher pour chaque équipe
         ))}
      </div>
   );
};

export default DivisionTeamsFilter;
