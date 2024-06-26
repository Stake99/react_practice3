import { Inertia } from '@formidablejs/inertia'
import { Request } from '@formidablejs/framework'
import { Route } from '@formidablejs/framework'
import { MovieController } from '../app/Http/Controllers/MovieController';

/**
 * --------------------------------------------------------------------------
 * Web Routes
 * --------------------------------------------------------------------------
 *
 * Here is where you can register web routes for your application. These
 * routes are loaded by the RouteServiceResolver within a group which
 * is assigned the "session" middleware group.
 * Route.get('/', (request: Request) => {
	return Inertia.render('Welcome', {
		formidableVersion: request.version,
		nodeVersion: process.version
	}).withViewData({
		locale: request.locale()
	})
})
 */

Route.get('/search', [MovieController, 'search']);
