import { FC } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import CharactersList from "../organisms/CharactersList";
import { Character } from "../../data/characters";

type Props = {
  school: string;
  characters: Character[];
  isLoading?: boolean;
};

const SchoolCharacters: FC<Props> = ({
  school,
  characters,
  isLoading = false,
}) => (
  <>
    <HelmetProvider>
      <Helmet>
        <title>登場人物一覧 | {school}</title>
      </Helmet>
      <header className="h2">{school}</header>
      <CharactersList characters={characters} isLoading={isLoading} />
    </HelmetProvider>
  </>
);

export default SchoolCharacters;
