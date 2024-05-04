'use client';

import { Box } from '@mantine/core';
import { useClickOutside, useDisclosure } from '@mantine/hooks';
import { useEffect, useState } from 'react';

import { type AnimeSearchRes } from '@/types/anime.types';

import SearchInput from './SearchInput';
import SearchShowcase from './SearchShowcase';
import { getSearchData } from './getSearchAction';

export default function SearchAnime(
  props: React.HTMLAttributes<HTMLDivElement>,
) {
  const openFilterState = useDisclosure(false);
  const [isFetching, setIsFetching] = useState(false);
  const [prevSearchVal, setPrevSearchVal] = useState('');
  const [animeSearchRes, setAnimeSearchRes] = useState<AnimeSearchRes | string>(
    'Try entering 3 keywords',
  );
  const ref = useClickOutside(openFilterState[1].close);
  const [searchState, setSearchState] = useState({
    searchVal: '',
    hasSubmitted: false,
  });

  useEffect(() => {
    if (searchState.searchVal.length === 0 && !isFetching) {
      setAnimeSearchRes('Try entering 3 keywords');
    } else if (isFetching) {
      setAnimeSearchRes('Loading');
    }

    if (
      searchState.searchVal.length >= 3 ||
      (searchState.hasSubmitted && searchState.searchVal.length > 0)
    ) {
      if (!isFetching) {
        if (prevSearchVal !== searchState.searchVal) {
          setIsFetching(true);

          getSearchData(searchState.searchVal)
            .then((res) => {
              setAnimeSearchRes(res);
            })
            .catch((err: unknown) => {
              setAnimeSearchRes('Failed To search. please try again');
              console.log(err);
              // Prints error message and stack trace to stderr:
            })
            .finally(() => {
              setIsFetching(false);
              setPrevSearchVal(searchState.searchVal);
              setSearchState((prevState) => {
                return { ...prevState, hasSubmitted: false };
              });
            });
        } else {
          setAnimeSearchRes('already searched, try something new!');
        }
      }
    }
  }, [searchState, isFetching, prevSearchVal]);

  return (
    <Box
      id="search"
      ref={ref}
      className={`${props.className ?? ''} w-[350px] relative`}
    >
      <SearchInput
        searchState={[searchState, setSearchState]}
        openFilterState={openFilterState}
      />
      <SearchShowcase
        OpenFilter={openFilterState[0]}
        animeSearchRes={animeSearchRes}
      />
    </Box>
  );
}
