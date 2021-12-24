import { runApp, IAppConfig } from 'ice';

const appConfig: IAppConfig = {
  router: {
    type: 'hash',
  },
};

runApp(appConfig);
