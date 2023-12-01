import React, { useState, useEffect } from "react";
import DivisionTeamsFilter from "./DivisionsTeamsFilter";

const url = "https://free-nba.p.rapidapi.com/teams?page=0";
const options = {
   method: "GET",
   headers: {
      "X-RapidAPI-Key": "5af62c5872msh9075f67d1e07cc3p15695djsn067c607977f0",
      "X-RapidAPI-Host": "free-nba.p.rapidapi.com",
   },
};

const DivisionsComponents = () => {
   const [allTeams, setAllTeams] = useState([]); // État local pour stocker les équipes

   useEffect(() => {
      fetch(url, options)
         .then((response) => response.json())
         .then((result) => {
            const teams = result.data;
            console.log(teams);
            setAllTeams(teams); // Mettre à jour l'état avec les données récupérées
         });
   }, []);

   return (
      <div>
         <h1>Liste des équipes</h1>
         <DivisionTeamsFilter teams={allTeams} divisionName="Atlantic" />
         <DivisionTeamsFilter teams={allTeams} divisionName="Central" />
         <DivisionTeamsFilter teams={allTeams} divisionName="Southeast" />
         <DivisionTeamsFilter teams={allTeams} divisionName="Northwest" />
         <DivisionTeamsFilter teams={allTeams} divisionName="Pacific" />
         <DivisionTeamsFilter teams={allTeams} divisionName="Southwest" />
      </div>
   );
};

export default DivisionsComponents;
