import {
  Card,
  CardSection,
  LoadingOverlay,
  Stack,
  Text,
  Transition,
} from '@mantine/core';
import NextImage from 'next/image';

import { type AnimeSearchRes } from '@/types/anime.types';

type SearchShowcaseProps = {
  OpenFilter: boolean;
  animeSearchRes: AnimeSearchRes | string;
};

export default function SearchShowcase({
  OpenFilter,
  animeSearchRes,
}: SearchShowcaseProps) {
  return (
    <Transition
      mounted={OpenFilter}
      transition="slide-up"
      duration={300}
      timingFunction="ease"
    >
      {(styles) => (
        <div className={OpenFilter ? 'block' : 'hidden'} style={styles}>
          <div className="border min-h-16 z-50 border-t-0 border-solid -mt-1 border-grape-500">
            <LoadingOverlay
              visible={typeof animeSearchRes === 'string'}
              zIndex={20}
              className="border border-t-0 border-solid border-grape-500"
              overlayProps={{ radius: 'sm', blur: 2 }}
              loaderProps={{
                children: (
                  <div className="flex items-center justify-center space-x-2">
                    <span className="loading loading-spinner text-primary" />
                    <div className="flex items-end">
                      {typeof animeSearchRes === 'string' &&
                      animeSearchRes !== 'Loading' ? (
                        <span>{animeSearchRes}</span>
                      ) : (
                        <>
                          <span>Loading</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            className="fill-gray-200"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="animate-blink-fast animate-delay-75"
                              cx="4"
                              cy="12"
                              r="2"
                            />
                            <circle
                              className="animate-blink-fast animate-delay-250"
                              cx="12"
                              cy="12"
                              r="2"
                            />
                            <circle
                              className="animate-blink-fast animate-delay-500"
                              cx="20"
                              cy="12"
                              r="2"
                            />
                          </svg>
                        </>
                      )}
                    </div>
                  </div>
                ),
              }}
            />
            <Stack className="z-10" align="stretch" justify="center" gap={0}>
              {typeof animeSearchRes !== 'string'
                ? animeSearchRes.results.map((anime) => {
                    return (
                      <Card
                        radius={0}
                        key={anime.id}
                        withBorder
                        padding={0}
                        className="border-0 border-y"
                      >
                        <CardSection className="flex-row hover:bg-dark-700/30 rounded m-2 flex items-center border-0 border-b">
                          <NextImage
                            src={anime.coverImage ?? 'https://media.kitsu.io'}
                            width={64}
                            height={96}
                            className="rounded-lg p-1 mr-4"
                            alt={anime.title?.english ?? 'unknown'}
                          />
                          <div className="flex  flex-grow flex-col">
                            <Text className="text-center">
                              {anime.title?.english}
                            </Text>
                            <div className="flex justify-center flex-row">
                              <Text
                                fw={500}
                                size="sm"
                                className="text-stone-500"
                              >
                                {`${anime.duration as unknown as string}M`}
                              </Text>
                              <div className="w-1 h-1 rounded-[50%] self-center flex content-center mx-2 bg-stone-500" />
                              <Text fw={500} size="sm">
                                {anime.format}
                              </Text>
                              <div className="w-1 h-1 rounded-[50%] self-center flex content-center mx-2 bg-stone-500" />
                              <Text
                                fw={500}
                                size="sm"
                                className="text-stone-500"
                              >
                                {anime.year}
                              </Text>
                            </div>
                          </div>
                        </CardSection>
                      </Card>
                    );
                  })
                : null}
            </Stack>
          </div>
        </div>
      )}
    </Transition>
  );
}
