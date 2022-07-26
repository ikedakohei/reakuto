import { FC } from "react";

import { User } from "../../domains/github";

const MemberList: FC<{ users: User[] }> = ({ users = [] }) => (
  <>
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <a
            href={`https://github.com/${user.login}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <img src={user.avatarUrl} alt="" />
            </div>
            <div>{user.login}</div>
            <div>GitHub ID: {user.id}</div>
          </a>
        </li>
      ))}
    </ul>
  </>
);

export default MemberList;
