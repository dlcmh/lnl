import { Pool } from 'pg';

export const pgPool = new Pool({
  database: 'lnl',
});
