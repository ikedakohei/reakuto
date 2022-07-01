import { FC } from "react";

export type Character = {
  id: number;
  name: string;
  grade: number;
  height?: number;
};

type Props = {
  school: string;
  characters: Character[];
};

const CharacterList: FC<Props> = ({ school, characters }) => (
  <>
    <header>{school}</header>
    {characters.map((character) => (
      <ul key={character.id}>
        <li>{character.name}</li>
        <li>{character.grade}年生</li>
        <li>
          {character.height ?? "???"}
          cm
        </li>
      </ul>
    ))}
  </>
);

export default CharacterList;
