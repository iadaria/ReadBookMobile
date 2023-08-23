//import 'react-native-gesture-handler';
import React from 'react';
import {WordProvider} from './store/context';
// import {Navigator} from './navigator';
import {Navigator} from './navigator';
/* import * as Sentry from '@sentry/react-native';

Sentry.init({
  dsn: 'https://c89a84c9a8771de2f93f12f8995779e1@o1145887.ingest.sentry.io/4505751687528448',
  // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
  // We recommend adjusting this value in production.
  tracesSampleRate: 1.0,
}); */

function App(): JSX.Element {
  return (
    <WordProvider>
      <Navigator />
    </WordProvider>
  );
}

export default App;
