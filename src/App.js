import { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '/node_modules/react-pro-sidebar/dist/css/styles.css';
import './style/Side.scss';
import { IntlProvider } from 'react-intl';
import Layout from './routes/sidebar/Layout';
import messages from './data/messages';




function App() {

  let lang = localStorage.getItem('lang');
  const [locale, setLocale] = useState(lang== null ? 'ko':lang);

  return (
    
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Layout setLocale={setLocale} />
    </IntlProvider>
  );
}
export default App;
