import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider} from 'react-intl';
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

import JobsList from "./components/jobsList";


ReactDOM.render(
	<IntlProvider locale={navigator.language || navigator.userLanguage} 
	messages={((navigator.language || navigator.userLanguage).startsWith("es"))? localeEsMessages : localeEnMessages}>
		<JobsList/>
	</IntlProvider>, document.getElementById("root")
);