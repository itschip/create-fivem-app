import inquirer from 'inquirer';
import { SectionLine } from '../utils';

const promptUi = () => {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'val',
      message: 'Do you want to include a UI framework?',
      choices: [
        new inquirer.Separator(SectionLine),
        {
          name: 'None',
          value: 'none',
        },
        {
          name: 'React with TypeScript',
          value: 'react_typescript',
        },
        {
          name: 'React with JavaScript',
          value: 'react_javascript',
        },
      ],
    },
  ]);
};

export default promptUi;
