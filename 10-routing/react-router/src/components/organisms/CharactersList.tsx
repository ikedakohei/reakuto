import { FC } from "react";

import Spinner from "../molecules/Spinner";
import { Character } from "../../data/characters";

type Props = {
  characters: Character[];
  isLoading?: boolean;
};

const CharactersList: FC<Props> = ({ characters = [], isLoading = false }) => (
  <>
    {isLoading ? (
      <Spinner />
    ) : (
      <ul className="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {characters.map((character) => (
          <li
            key={character.id}
            className="col-span-1 flex shadow-sm rounded-md"
          >
            <div className="bg-black flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md">
              {character.name.charAt(0)}
            </div>
            <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
              <div className="flex-1 px-4 py-2 text-sm truncate">
                <span className="text-gray-900 font-medium">
                  {character.name}
                </span>
                <p className="text-gray-500">{character.grade}年生</p>
                <p className="text-gray-500">{character.height ?? "???"}cm</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    )}
  </>
);

export default CharactersList;
