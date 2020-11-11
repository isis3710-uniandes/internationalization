import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider} from 'react-intl';
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";
import JobsList from "./components/jobsList"; 


ReactDOM.render(
	// Hay un error en locale, entonces cambiamos el local por defecto a en-US para que se muestre correctamente el formato. 
	//<IntlProvider locale={window.navigator.language} messages= {window.navigator.language === "es-ES" ? localeEsMessages: localeEnMessages}>
	<IntlProvider locale={"en-US"} messages= {window.navigator.language === "es-ES" ? localeEsMessages: localeEnMessages}>
		<JobsList/>
	</IntlProvider>, document.getElementById("root")
);