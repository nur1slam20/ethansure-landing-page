import * as migration_20260105_193124_init from './20260105_193124_init';

export const migrations = [
  {
    up: migration_20260105_193124_init.up,
    down: migration_20260105_193124_init.down,
    name: '20260105_193124_init'
  },
];
