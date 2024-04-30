'use client';
import { Box, Input } from '@mantine/core';
import { useClickOutside, useDisclosure } from '@mantine/hooks';
import { IconFilter, IconSearch, IconX } from '@tabler/icons-react';
import { useState } from 'react';

import SearchShowcase from './SearchShowcase';

export default function SearchAnime(
  props: React.HTMLAttributes<HTMLDivElement>,
) {
  const [
    OpenFilter,
    { open: setOpenFilter, close: closeOpenFilter, toggle: toggleOpenFilter },
  ] = useDisclosure(false);
  const ref = useClickOutside(closeOpenFilter);
  const [searchValue, setSearchValue] = useState('');

  return (
    <Box id="search" ref={ref} className={`${props.className ?? ''} relative`}>
      <Input
        placeholder="Clearable input"
        value={searchValue}
        className="w-full"
        classNames={{
          input: `${OpenFilter ? 'border-b-0 border-grape-500' : ''} px-10 py-2`,
        }}
        onChange={(event) => setSearchValue(event.currentTarget.value)}
        rightSectionPointerEvents="all"
        leftSectionPointerEvents="all"
        onFocus={setOpenFilter}
        size="md"
        leftSection={
          searchValue ? (
            <button
              type="button"
              aria-label="Clear input"
              className="btn bg-transparent hover:text-white hover:bg-transparent !border-0 focus:bg-transparent active:bg-transparent"
            >
              <IconX
                size={22}
                className="cursor-pointer"
                onClick={() => setSearchValue('')}
              />
            </button>
          ) : (
            <button
              type="button"
              className="btn bg-transparent hover:text-white hover:bg-transparent !border-0 focus:bg-transparent active:bg-transparent"
            >
              <IconFilter
                size={22}
                aria-label="filter search"
                className="cursor-pointer"
                onClick={toggleOpenFilter}
              />
            </button>
          )
        }
        rightSection={
          <button
            type="submit"
            className="btn bg-transparent hover:text-white hover:bg-transparent !border-0 focus:bg-transparent active:bg-transparent"
          >
            <IconSearch
              size={20}
              aria-label="search"
              stroke={3}
              className="cursor-pointer"
            />
          </button>
        }
      />
      <SearchShowcase OpenFilter={OpenFilter} />
    </Box>
  );
}
