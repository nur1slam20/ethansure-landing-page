import * as migration_20260105_193124_init from './20260105_193124_init';
import * as migration_20260107_213755_trust_stats from './20260107_213755_trust_stats';

export const migrations = [
  {
    up: migration_20260105_193124_init.up,
    down: migration_20260105_193124_init.down,
    name: '20260105_193124_init',
  },
  {
    up: migration_20260107_213755_trust_stats.up,
    down: migration_20260107_213755_trust_stats.down,
    name: '20260107_213755_trust_stats'
  },
];
