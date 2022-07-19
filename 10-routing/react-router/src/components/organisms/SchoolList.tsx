import { FC } from "react";
import { Link } from "react-router-dom";

type School = {
  code: string;
  name: string;
};

const SchoolList: FC<{ schools: School[] }> = ({ schools }) => (
  <>
    <h2 className="text-xl">登場人物</h2>
    <ul className="list-disc list-inside">
      {schools.map((school) => (
        <li key={school.code}>
          <Link to={`/characters/${school.code}`}>{school.name}</Link>
        </li>
      ))}
      <li key="all">
        <Link to="/characters">全校の選手（身長順）</Link>
      </li>
    </ul>
  </>
);

export default SchoolList;
