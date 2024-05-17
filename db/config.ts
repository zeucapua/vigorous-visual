import { defineDb, defineTable, column } from 'astro:db';

const Drawing = defineTable({ columns: {
  id: column.text({ primaryKey: true }),
  variant: column.text(),
  data: column.text(),
}});

// https://astro.build/db/config
export default defineDb({
  tables: { Drawing }
});
