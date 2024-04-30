import { pgTableCreator } from 'drizzle-orm/pg-core';

const createTable = pgTableCreator((name) => `t3-test-2_${name}`);

export default createTable;
