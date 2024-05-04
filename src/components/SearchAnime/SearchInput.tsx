'use client';
import { Input } from '@mantine/core';
import { IconFilter, IconSearch, IconX } from '@tabler/icons-react';

interface SearchStateVal {
  searchVal: string;
  hasSubmitted: boolean;
}

interface SearchInputTypes {
  searchState: [
    SearchStateVal,
    React.Dispatch<React.SetStateAction<SearchStateVal>>,
  ];
  openFilterState: readonly [
    boolean,
    {
      readonly open: () => void;
      readonly close: () => void;
      readonly toggle: () => void;
    },
  ];
}

export default function SearchInput({
  searchState,
  openFilterState,
}: SearchInputTypes) {
  const [searchValue, setSearchValue] = searchState;
  const [OpenFilter, { open: setOpenFilter, toggle: toggleOpenFilter }] =
    openFilterState;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSearchValue((prevState) => {
          return { ...prevState, hasSubmitted: true };
        });
      }}
    >
      <Input
        placeholder="Clearable input"
        value={searchValue.searchVal}
        className="w-full"
        classNames={{
          input: `${OpenFilter ? 'border-b-0 border-grape-500' : ''} px-10 py-2`,
        }}
        onChange={(event) =>
          setSearchValue({ searchVal: event.target.value, hasSubmitted: false })
        }
        rightSectionPointerEvents="all"
        leftSectionPointerEvents="all"
        onFocus={setOpenFilter}
        size="md"
        leftSection={
          searchValue.searchVal ? (
            <button
              type="button"
              aria-label="Clear input"
              className="btn bg-transparent hover:text-white hover:bg-transparent !border-0 focus:bg-transparent active:bg-transparent"
            >
              <IconX
                size={22}
                className="cursor-pointer"
                onClick={() =>
                  setSearchValue({ searchVal: '', hasSubmitted: false })
                }
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
    </form>
  );
}
