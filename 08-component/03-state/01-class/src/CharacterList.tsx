import { Component, ReactElement } from "react";

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

class CharacterList extends Component<Props> {
  render(): ReactElement {
    const { school, characters } = this.props;

    return (
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
  }
}

export default CharacterList;
