/*
const Router = require('koa-router');
const postsCtrl = require('./posts.ctrl');
*/
import Router from 'koa-router';
import * as postsCtrl from './posts.ctrl';
import checkLoggedIn from '../../lib/checkLoggedIn';


/*
const printInfo = ctx => {
  ctx.body = {
    method: ctx.method,
    path: ctx.path,
    params: ctx.params,
  };
};
*/
const posts = new Router();

posts.get('/', postsCtrl.list);
posts.post('/', checkLoggedIn, postsCtrl.write);

const post = new Router();  //  /api/posts/:id
post.get('/', postsCtrl.read);
post.delete('/', postsCtrl.checkOwnPost, postsCtrl.remove);
// posts.put('/:id', postsCtrl.replace);
post.patch('/:id', postsCtrl.checkOwnPost, postsCtrl.update);
// module.exports = posts;

posts.use('/:id', postsCtrl.getPostById, post.routes());

export default posts;