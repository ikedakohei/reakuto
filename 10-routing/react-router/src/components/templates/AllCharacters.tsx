import { FC } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import CharactersList from "../../components/organisms/CharactersList";
import { Character } from "../../data/characters";

type Props = {
  characters: Character[];
  isLoading?: boolean;
};

const AllCharacters: FC<Props> = ({ characters, isLoading = false }) => (
  <>
    <HelmetProvider>
      <Helmet>
        <title>登場人物一覧</title>
      </Helmet>
      <CharactersList characters={characters} isLoading={isLoading} />
    </HelmetProvider>
  </>
);

export default AllCharacters;
