import Router from 'koa-router';
import checkLoggedIn from '../../lib/checkLoggedIn';
import * as postsCtrl from './posts.ctrl';

const posts = new Router();

posts.get('/', postsCtrl.list);
posts.post('/', checkLoggedIn, postsCtrl.write);

const post = new Router();
posts.get('/', postsCtrl.read);
posts.delete('/', checkLoggedIn, postsCtrl.checkOwnPost, postsCtrl.remove);
posts.patch('/', checkLoggedIn, postsCtrl.checkOwnPost, postsCtrl.update);

posts.use('/:id',postsCtrl.getPostById, post.routes())

export default posts;
