import Link from "next/link";
import React from "react";

const AllTeamsData = () => {
    console.log("all-teams-data re-render");
    
  return (
    <div>
     {/* { here browser will refresh it means hold component will rerender } */}
      <a href="/admin/all-teams-data/team-delhi">
        <button>Delhi Team</button>
      </a>

      <Link href="/admin/all-teams-data/team-noida">
        <button>Noida Team</button>
      </Link>
    </div>
  );
};

export default AllTeamsData;
