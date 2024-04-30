'use client';
import { LoadingOverlay, Transition } from '@mantine/core';

type SearchShowcaseProps = {
  OpenFilter: boolean;
};

export default function SearchShowcase({ OpenFilter }: SearchShowcaseProps) {
  return (
    <Transition
      mounted={OpenFilter}
      transition="slide-up"
      duration={300}
      timingFunction="ease"
    >
      {(styles) => (
        <div
          className={`${OpenFilter ? 'block' : 'hidden'} absolute left-0 right-0 z-10 -mt-1 h-20 rounded-none border border-t-0 border-solid border-grape-500 p-0`}
          style={styles}
        >
          <LoadingOverlay
            visible
            zIndex={1000}
            overlayProps={{ radius: 'sm', blur: 2 }}
            loaderProps={{
              children: (
                <div className="flex items-center justify-center space-x-2">
                  <span className="loading loading-spinner text-primary" />
                  <div className="flex items-end">
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
                  </div>
                </div>
              ),
            }}
          />
          gg
        </div>
      )}
    </Transition>
  );
}
