import { FC } from "react";
import { Link } from "react-router-dom";
import capitalize from "lodash/capitalize";

const Home: FC<{ orgCodes: string[] }> = ({ orgCodes = [] }) => (
  <>
    <header className="app-header">
      <h1>会社一覧</h1>
    </header>
    <ul>
      {orgCodes.map((orgCode) => (
        <li key={orgCode}>
          <Link to={`/${orgCode}/members`}>
            {capitalize(orgCode)} のメンバー
          </Link>
        </li>
      ))}
    </ul>
  </>
);

export default Home;
