const arc = require("@architect/functions");

module.exports = function layout({ contents }) {
  const nav = `
			<nav>
				<a href="/">
					<img class="logo" src="${arc.static("/images/logo.svg")}"/>
				</a>
				<a style="font-size: 0.8rem;" href="https://arc.codes" target="_blank">Documentation</a>
			</nav>`;

  return `<!DOCTYPE html>
	<html>
	<head>
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Architect demo app</title>
		<link rel=stylesheet href="${arc.static("/css/style.css")}">
		<link rel="icon" type="image/png" sizes="16x16" href="${arc.static("/images/architect-favicon-16.png")}">
		<link rel="icon" type="image/png" sizes="32x32" href="${arc.static("/images/architect-favicon-32.png")}">
		<link rel="icon" type="image/png" sizes="64x64" href="${arc.static("/images/architect-favicon-64.png")}">
	</head>
	<body>	
		${nav}
		<body>
			${contents}
		</body>
	</html>`;
};
