import chalk from 'chalk';
import sym from 'log-symbols';

class Log {
    static error = (msg, name = 'ERROR') => {
        console.log(`${sym.error} ${chalk.red.inverse(` ${name} `)} ${chalk.red(msg)}`);
    }

    static info = (msg, name = 'INFO') => {
        console.log(`${sym.info} ${chalk.blue.inverse(` ${name} `)} ${chalk.blue(msg)}`);
    }

    static debug = (msg) => {
        Log.info(msg, 'DEBUG');
    }
}

export default Log;