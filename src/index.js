const inquirer = require('inquirer');
const nodeTSconfig = require('./tsconfig.node.json');
const { writeFileSync } = require('fs');

inquirer
    .prompt([
       { type: 'list', 
        message: 'Pick the framework your using:',
        name: 'framework', 
        choices: ['react', 'react-native', 'node']
        }
    ])
    .then(answers => {
        if (answers.framework === 'node') {
            tsconfigToWrite = nodeTSconfig
        } 

        const path = process.cwd()
        writeFileSync(cwd + '/tsconfig.json', tsconfigToWrite);
    });

