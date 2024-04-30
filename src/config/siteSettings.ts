import {
  IconArrowsShuffle,
  IconBroadcast,
  IconHome,
  IconMessages,
} from '@tabler/icons-react';

export const SiteName = () => {
  return 'AniCrush';
};

export const PrimaryColor = () => {
  return 'grape';
};

export const FrontPageNavData = () => {
  return [
    { icon: IconHome, label: 'Home', link: '/home', onlyBigScreen: false },
    { label: 'Explore', link: '/az-list', onlyBigScreen: false },
    { label: 'Most Popular', link: '/most-popular', onlyBigScreen: false },
    { label: 'Watch2gether', link: '/watch2gether', onlyBigScreen: true },
  ];
};

export const HomeHeaderNaveLinks = () => {
  return [
    { icon: IconBroadcast, link: '/Watch2gether', label: 'Watch2gether' },
    { icon: IconArrowsShuffle, link: '/random', label: 'Random' },
    { label: 'Anime Name' },
    { icon: IconMessages, link: '/community', label: 'Community' },
  ];
};
