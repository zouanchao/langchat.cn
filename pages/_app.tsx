import { Analytics } from '@vercel/analytics/react';

import { isProd } from '@utils';
import '../styles/global.css';
import 'react-photo-view/dist/react-photo-view.css';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      {isProd && <Analytics />}
    </>
  );
};

export default App;
