// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const {generateMarkdown} = require('./utils/generateMarkdown')
const {writeFile} = require('fs').promises
// TODO: Create an array of questions for user input
// const questions = [title, description, installation, usage, contribution, license, github, email];

// TODO: Create a function to write README file

// TODO: Create a function to initialize app
const init = async() => {
    try {
        const answers = await inquirer.prompt([
            {
                type: 'input',
                name: 'title',
                message: 'What is the title of your project?'
            },
            {
                type: 'input',
                name: 'description',
                message: 'Provide a short description explaining your project'
            },
            {
                type: 'input',
                name: 'installation',
                message: 'What are the steps required to install your project?'
            },
            {
                type: 'input',
                name: 'usage',
                message: 'How is your project used?'
            },
            {
                type: 'input',
                name: 'contribution',
                message: 'List your collaborators'
            },
            {
                type: 'list',
                choices: ['MIT', 'Unlicense', 'Apache', 'None'],
                name: 'license',
                message: 'Which license would you like to use?'
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is your github username?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your email?'
            },
        ]);
        await writeFile('README.md', generateMarkdown(answers))
        console.log('Readme created.')
    } catch(e) {
        console.log(e);
    }
}

// Function call to initialize app
init();
