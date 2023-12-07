import store from "../redux/store";
import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import "../styles/normalize.css";
import "../styles/tailwind.css";
import "../styles/globals.css";
import "../styles/fonts.css";

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
