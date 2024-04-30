import { Input } from '@mantine/core';

import * as styles from '@/styles/home.css';

export default function SearchInput() {
  return (
    <Input
      className={styles.searchInput}
      placeholder="Eg: your name"
      radius="md"
      w="100%"
    />
  );
}
