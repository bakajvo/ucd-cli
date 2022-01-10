import Log from "../utils/log.js";
import chalk from 'chalk';
import isEmpty from "lodash/isEmpty.js";
import axios from 'axios';

const createVersion = ({debug, component, componentVersion}) => {
    if(isEmpty(component)) {
        Log.error(`Component cannot be empty!`);
        process.exit(1);
    }
    if(isEmpty(componentVersion)) {
        Log.error(`ComponentVersion cannot be empty!`);
        process.exit(1);
    }
    Log.info(`Starting createVersion action on component ${chalk.bold(component)} in version ${chalk.bold(componentVersion)}.`);

    process.exit(0);
};

export default createVersion;