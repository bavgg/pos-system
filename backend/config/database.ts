
import os from 'node:os';
import path from 'node:path';
import fs from 'node:fs'
import { DB } from "https://deno.land/x/sqlite/mod.ts";

export function connectDB(): DB {
  const homeDir = os.homedir();
  const sqlDir = path.join(homeDir, 'sql/db/psos.db');

  if (!fs.existsSync(sqlDir)) {
    fs.mkdirSync(homeDir, {recursive: true});
  }

  return new DB(sqlDir);
}
