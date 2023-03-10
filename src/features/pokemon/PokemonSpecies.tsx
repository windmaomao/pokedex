import { useState, useEffect } from 'react';
import axios from 'axios';

interface PokemonSpeciesProps {
  id: string;
}
interface PokemonSpeciesType {
  text: string;
}

const speciesUrl = `https://pokeapi.co/api/v2/pokemon-species/`;

const pretty = (s: string) => s.replace(/[\n\f]/gi, ' ');

const PokemonSpecies = ({ id }: PokemonSpeciesProps) => {
  const [species, setSpecies] =
    useState<PokemonSpeciesType>();

  useEffect(() => {
    axios(speciesUrl + id)
      .then((res) => {
        const { flavor_text_entries: entries } = res.data;
        // console.log(res.data);
        const entry: any = entries.find(
          (v: any) => v.language.name === 'en',
        );

        setSpecies({
          text: pretty(entry.flavor_text),
        });
      })
      .catch(() => {
        setSpecies({
          text: 'Not available',
        });
      });
  }, [id]);

  return <small>{species?.text || '...'}</small>;
};

export default PokemonSpecies;
