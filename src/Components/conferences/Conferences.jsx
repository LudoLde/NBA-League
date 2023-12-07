import React, { useState, useEffect } from "react";
import "../../styles/Conferences/Conferences.css";
import { AgGridReact } from "ag-grid-react"; // React Grid Logic
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme

const Conferences = () => {
   const [teams, setTeams] = useState([]);
   const [rowDataEst, setRowDataEst] = useState([]);
   const [rowDataOuest, setRowDataOuest] = useState([]);
   const [colDefs, setColsDef] = useState([
      { field: "ranking", width: 90 },
      { field: "team", width: 200 },
      { field: "Win", width: 100 },
      { field: "Loss", width: 100 },
      { field: "Win %", width: 100 },
      { field: "Home", width: 100 },
      { field: "Road", width: 100 },
      { field: "Last 10", width: 100 },
   ]);
   const [estConference, setEstConference] = useState([]);
   const [ouestConference, setOuestConference] = useState([]);
   const url = "https://free-nba.p.rapidapi.com/teams?page=0";
   const options = {
      method: "GET",
      headers: {
         "X-RapidAPI-Key": "5af62c5872msh9075f67d1e07cc3p15695djsn067c607977f0",
         "X-RapidAPI-Host": "free-nba.p.rapidapi.com",
      },
   };

   useEffect(() => {
      // Effectuer le fetch pour récupérer les équipes
      fetch(url, options)
         .then((response) => response.json())
         .then((result) => {
            const fetchedTeams = result.data; // Supposons que vos données d'équipes sont dans result.data

            // Mettre à jour l'état des équipes récupérées
            setTeams(fetchedTeams);

            // Filtrer les équipes par conférence
            const estTeams = fetchedTeams.filter((team) => team.conference === "East");
            const estTeamRank = estTeams.map((equipe, index) => ({
               ranking: index + 1,
               team: equipe.full_name,
            }));
            const ouestTeams = fetchedTeams.filter((team) => team.conference === "West");
            const ouestTeamRank = ouestTeams.map((equipe, index) => ({
               ranking: index + 1,
               team: equipe.full_name,
            }));
            const allTeams = fetchedTeams.map((equipe, index) => ({}));
            console.log(allTeams);
            // Mettre à jour les états pour les équipes de chaque conférence
            setEstConference(estTeams);
            setOuestConference(ouestTeams);
            setRowDataEst(estTeamRank);
            setRowDataOuest(ouestTeamRank);
         });
   }, []);

   // Utilisation de estConference et ouestConference dans votre rendu JSX
   return (
      <main className="conferences">
         <div className="conference-container">
            <h2>Conférence Est</h2>
            <div className="ag-theme-quartz" style={{ height: 600 }}>
               <AgGridReact columnDefs={colDefs} rowData={rowDataEst} className="grid-container" />
            </div>
         </div>
         <div>
            <h2>Conférence Ouest</h2>
            <div>
               <div className="ag-theme-quartz" style={{ height: 600 }}>
                  <AgGridReact columnDefs={colDefs} rowData={rowDataOuest} />
               </div>
            </div>
         </div>
      </main>
   );
};

export default Conferences;
