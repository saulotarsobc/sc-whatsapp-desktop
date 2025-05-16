import Logger from "electron-log";
import { exec } from "node:child_process";
import { join } from "node:path";
import { isDev } from "../constants";

export function initLogs(): void {
  const directoryPath = join(__dirname, "..", "..");
  const command =
    process.platform === "win32"
      ? `dir ${directoryPath}`
      : `ls -lah ${directoryPath}`;

  exec(command, (error: Error | null, stdout: string, stderr: string) => {
    if (error) {
      Logger.error(`ERROR IN ${command}:\n${error}`);
      Logger.error(`ERROR IN ${command} "stderr":\n${stderr}`);
      return;
    }
    Logger.log(`FILES IN DIRECTORY ${directoryPath}:\n${stdout}`);
  });

  Logger.info("DIRNAME: ", directoryPath);
  Logger.info("IS_DEV: ", isDev);
}
