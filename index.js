const inquirer = require('inquirer');
const fs = require('fs');

const readMeData = (input) => `
# Project Title
${input.projectTitle}
## Packages
${input.packages}    
## Usage/Examples
${input.usage}
## License
${input.license}
## Github Profile
${input.githubProfile}
## Feedback
If you have any feedback, please reach out to us at ${input.feedback}
`

inquirer
  .prompt([
    {
      type: 'input',
      name: 'projectTitle',
      message: "What is A brief description of what this project does?",
    },
    {
      type: 'input',
      name: 'packages',
      message: 'What packages do you need to install?',
      
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What are some usage examples?',
        
      },
      {
        type: 'input',
        name: 'repo',
        message: 'What is your repo called?',
    
        
      },
      {
        type: 'input',
        name: 'githubProfile',
        message: 'Please provide a link to your github profile?',
        
      },
      {
        type: 'input',
        name: 'feedback',
        message: 'What email address is used for feedback?',
      },
    
  ])
  .then((input) => {
    const readMe = readMeData(input)
    const filename = `README.md`;

    fs.writeFile(filename, readMe, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });