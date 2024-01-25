import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the purpletheme.js extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'purpletheme.js:plugin',
  description: 'A JupyterLab extension. A purple theme for JupyterLab',
  autoStart: true,
  requires: [IThemeManager],
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    console.log('JupyterLab extension purpletheme.js is activated!');
    const style = 'purpletheme.js/index.css';

    manager.register({
      name: 'purpletheme.js',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default plugin;
