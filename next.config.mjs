/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import('./src/env.js');

/** @type {import("next").NextConfig} */
const config = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.rei.my.id',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 's4.anilist.co',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'animefox.tv',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'animepahe.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'w7.pngwing.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'png.pngtree.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'play-lh.googleusercontent.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'is3-ssl.mzstatic.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'media.kitsu.io',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'artworks.thetvdb.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'gogocdn.net',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'cdn.myanimelist.net',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        port: '',
      },
    ],
  },
};

export default config;
