import React, { useState, useEffect } from "react";
import "../../styles/DivisionsTeams/DivisionTeamsFilter.css";

const DivisionTeamsFilter = ({ teams, divisionName }) => {
   const [divisionTeams, setDivisionTeams] = useState([]);
   const divisionLogos = {
      atlantic: "../../assets/logo-est.png",
      central: "../../assets/logo-est.png",
      southeast: "../../assets/logo-est.png",
      northwest: "../../assets/logo-west.png",
      pacific: "../../assets/logo-west.png",
      southwest: "../../assets/logo-west.png",
   };
   const divisionLogo = divisionLogos[divisionName.toLowerCase()];

   useEffect(() => {
      const filteredTeams = teams.filter((team) => team.division.toLowerCase() === divisionName.toLowerCase());
      setDivisionTeams(filteredTeams);
   }, [teams, divisionName]);

   return (
      <div className="division-container">
         <p
            style={{
               borderTop: "1px solid",
            }}></p>
         <div>
            <img src={divisionLogo} alt={`Logo de la division ${divisionName}`} className="logo-conference-design" />
            <h2 className="division__title">Équipes de la division {divisionName}</h2>
         </div>
         {divisionTeams.map((team, index) => (
            <p key={index} className="division__name">
               {team.full_name}
            </p>
            // Remplacez team.full_name par les propriétés que vous souhaitez afficher pour chaque équipe
         ))}
      </div>
   );
};

export default DivisionTeamsFilter;
