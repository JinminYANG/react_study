/*
let postId = 1;

// posts 초기 배열 데이터
const posts = [
  {
    id: 1,
    title: '제목',
    body: '내용',
  },
];

/!* 포스트 작성
POST /api/posts
{ title, body }
*!/
export const write = ctx => {
  // REST API의 Request Body는 ctx.request.body에서 조회할 수 있다
  const { title, body } = ctx.request.body;
  postId += 1;
  const post = { id: postId, title, body };
  posts.push(post);
  ctx.body = post;
};

/!*  포스트 목록 조회
GET /api/posts
*!/
export const list = ctx => {
  ctx.body = posts;
};

/!*  특정 포스트 조회
GET /api/posts/:id
*!/
export const read = ctx => {
  const { id } = ctx.params;
  // 주어진 id 값으로 포스트를 찾는다
  // 파라미터로 받아 온 값은 문자열 형식이므로 파라미터를 숫자로 변환하거나
  // 비교할 p.id 값을 문자열로 변경해야 합니다.
  const post = posts.find(p => p.id.toString() === id);
  // 포스트가 없으면 오류를 반환
  if (!post) {
    ctx.status = 404;
    ctx.body = {
      message: '포스트가 존재하지 않습니다.',
    };
    return;
  }
  ctx.body = post;
};

/!*  특정 포스트 제거
DELETE /api/posts/:id
*!/
export const remove = ctx => {
  const { id } = ctx.params;
  // 해당 id를 가진 post가 몇 번째인지 확인
  const index = posts.findIndex(p => p.id.toString() === id);
  // 포스트가 없으면 오류를 반환
  if (index === -1) {
    ctx.status = 404;
    ctx.body = {
      message: '포스트가 존재하지 않습니다.',
    };
    return;
  }
  // index 번 째 아이템을 제거합니다.
  posts.splice(index, 1);
  ctx.status = 204; // No content
};

/!*  포스트 수정(교체)
PUT /api/posts/:id
{title, body}
*!/
export const replace = ctx => {
  // PUT 메서드는 전페 포스트 정보를 입력하여 데이터를 통째로 교체할 때 사용됩니다.
  const { id } = ctx.params;
  // 해당 id를 가진 post가 몇 번째인지 확인
  const index = posts.findIndex(p => p.id.toString() === id);
  // 포스트가 없으면 오류를 반환
  if (index === -1) {
    ctx.status = 404;
    ctx.body = {
      message: '포스트가 존재하지 않습니다.',
    };
    return;
  }
  // 전체 객체를 덮어 씌운다.
  // 따라서 id를 제외한 기존 정보를 날리고, 객체를 새로 만든다.
  posts[index] = {
    id,
    ...ctx.request.body,
  };
  ctx.body = posts[index];
};

/!*  포스트 수정(특정 필드 변경)
PATCH /api/posts/:id
{ title, body }
*!/
export const update = ctx => {
  // PATCH 메서드는 주어진 필드만 교체한다
  const { id } = ctx.params;
  // 해당 id를 가진 post가 몇 번째인지 확인
  const index = posts.findIndex(p => p.id.toString() === id);
  // 포스트가 없으면 오류를 반환
  if (index === -1) {
    ctx.status = 404;
    ctx.body = {
      message: '포스트가 존재하지 않습니다.',
    };
    return;
  }
  // 기존 값에 정보를 덮어 씌운다.
  posts[index] = {
    ...posts[index],
    ...ctx.request.body,
  };
  ctx.body = posts[index];
};
*/

import Post from '../../models/post';
import mongoose from 'mongoose';
import Joi from '@hapi/joi';

const { ObjectId } = mongoose.Types;
export const checkObjectId = (ctx, next) => {
  const { id } = ctx.params;
  if (!ObjectId.isValid(id)) {
    ctx.status = 400; // Bad request
    return;
  }
  return next();
};

/*
  POST /api/posts
  {
    title: '제목',
    body: '내용',
    tags: ['태그1', '태그2']
  }
*/
export const write = async ctx => {
  const schema = Joi.object().keys({
    // 객체가 다음 필드를 가지고 있음을 검증
    title: Joi.string().required(),
    body: Joi.string().required(),
    tags: Joi.array()
      .items(Joi.string())
      .required(),
  });

  // 검증하고 나서 검증 실패인 경우 에러 처리
  const result = schema.validate(ctx.request.body);
  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }

  const { title, body, tags } = ctx.request.body;
  const post = new Post({
    title,
    body,
    tags,
  });

  try {
    await post.save();
    ctx.body = post;
  } catch (e) {
    ctx.throw(500, e);
  }
};

/*
  GET /api/posts
*/
export const list = async ctx => {
  // query는 문자열이기 때문에 숫자로 변환해 주어야 한다
  // 값이 주어지지 않았다면 1을 기본으로 사용한다
  const page = parseInt(ctx.query.page || '1', 10);

  if (page < 1) {
    ctx.status = 400;
    return;
  }

  try {
    const posts = await Post.find()
      .sort({ _id: -1 })
      .limit(10)
      .skip((page - 1) * 10)
      .exec();
    const postCount = await Post.countDocuments().exec();
    ctx.set('Last-Page', Math.ceil(postCount / 10));
    ctx.body = posts
      .map(post => post.toJSON())
      .map(post => ({
        ...post,
        body: post.body.length < 200 ? post.body : `${post.body.slice(0, 200)}...`,
      }));
  } catch (e) {
    ctx.throw(500, e);
  }
};

/*
  GET /api/posts/:id
*/
export const read = async ctx => {
  const { id } = ctx.params;
  try {
    const post = await Post.findById(id).exec();
    if (!post) {
      ctx.status = 404;
      return;
    }
    ctx.body = post;
  } catch (e) {
    ctx.throw(500, e);
  }
};

/*
  DELETE /api/posts/:id
*/
export const remove = async ctx => {
  const { id } = ctx.params;
  try {
    await Post.findByIdAndRemove(id).exec();
    ctx.status = 204; // No content (성공하기는 했으나 응답할 데이터 없음)
  } catch (e) {
    ctx.throw(500, e);
  }
};

/*
  PATCH /api/posts/:id
  {
    title: '수정',
    body: '수정 내용',
    tags: ['수정', '태그']
  }
*/
export const update = async ctx => {
  const { id } = ctx.params;

  const schema = Joi.object().keys({
    title: Joi.string(),
    body: Joi.string(),
    tags: Joi.array().items(Joi.string()),
  });

  const result = schema.validate(ctx.request.body);
  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }

  try {
    const post = await Post.findByIdAndUpdate(id, ctx.request.body, {
      new: true, // 이 값을 설정하면 업데이트된 데이터를 반환
                 // false 일 때는 업데이트되기 전의 데이터를 반환
    }).exec();
    if (!post) {
      ctx.status = 404;
      return;
    }
    ctx.body = post;
  } catch (e) {
    ctx.throw(500, e);
  }
};
