import { multiplica, suma, } from "./controller.js";
import chalk from 'chalk';


const sum1 = suma (1, 2);
console.log(sum1);

const sum2 = suma (4,5);
console.log(sum2);

const mult = multiplica(sum1, sum2);
console.log(chalk.green(mult));