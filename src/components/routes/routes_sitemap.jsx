import { Switch, Route } from 'react-router-dom';
import allPaths from './all_paths';
// the generator needs base Route classes

export default (
	<Switch>
		{allPaths.map((p) => (
			<Route key={p} path={p} />
		))}
		<Route />
	</Switch>
);
