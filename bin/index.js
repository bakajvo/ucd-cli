#!/usr/bin/env node
import cli from "../utils/cli.js";
import welcome from 'cli-welcome';
import isEmpty from "lodash/isEmpty.js";
import Log from "../utils/log.js";
import createVersion from "../commands/createVersion.js";

const { input, flags } = cli;

(async () => {
    welcome({
        title: `UCD - CLI`,
        description: 'IBM UrbanCode Deploy client for NodeJS projects',
        version: '1.0.0',
        bgColor: `#36BB09`,
        color: `#000000`,
        bold: true,
        clear: false,
    });
    flags.debug && Log.debug(`Flags: ${JSON.stringify(flags, null, 2)}`);
    
    input.includes(`help`) && cli.showHelp(0);
    input.includes(`createVersion`) && createVersion(flags);
    isEmpty(input) && cli.showHelp(0);
})();
