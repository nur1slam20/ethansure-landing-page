import * as migration_20260105_193124_init from './20260105_193124_init';
import * as migration_20260107_213755_trust_stats from './20260107_213755_trust_stats';
import * as migration_20260108_162721_add_project_image from './20260108_162721_add_project_image';
import * as migration_20260110_091451_add_pages_fields_and_testimonials from './20260110_091451_add_pages_fields_and_testimonials';
import * as migration_20260110_093800_fix_pages_array_columns from './20260110_093800_fix_pages_array_columns';

export const migrations = [
  {
    up: migration_20260105_193124_init.up,
    down: migration_20260105_193124_init.down,
    name: '20260105_193124_init',
  },
  {
    up: migration_20260107_213755_trust_stats.up,
    down: migration_20260107_213755_trust_stats.down,
    name: '20260107_213755_trust_stats',
  },
  {
    up: migration_20260108_162721_add_project_image.up,
    down: migration_20260108_162721_add_project_image.down,
    name: '20260108_162721_add_project_image'
  },
  {
    up: migration_20260110_091451_add_pages_fields_and_testimonials.up,
    down: migration_20260110_091451_add_pages_fields_and_testimonials.down,
    name: '20260110_091451_add_pages_fields_and_testimonials'
  },
  {
    up: migration_20260110_093800_fix_pages_array_columns.up,
    down: migration_20260110_093800_fix_pages_array_columns.down,
    name: '20260110_093800_fix_pages_array_columns'
  },
];
