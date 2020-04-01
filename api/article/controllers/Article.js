"use strict";

/**
 * Article.js controller
 *
 * @description: A set of functions called "actions" for managing `Article`.
 */

module.exports = {
  /**
   * Retrieve article records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.article.search(ctx.query);
    } else {
      return strapi.services.article.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a article record.
   *
   * @return {Object}
   */

  findOne: async ctx => {
    return strapi.services.article.fetch(ctx.params);
  },

  /**
   * Count article records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.article.count(ctx.query, populate);
  },

  /**
   * Create a/an article record.
   *
   * @return {Object}
   */

  create: async ctx => {
    return strapi.services.article.add(ctx.request.body);
  },

  /**
   * Update a/an article record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.article.edit(ctx.params, ctx.request.body);
  },

  /**
   * Destroy a/an article record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.article.remove(ctx.params);
  },

  /* import routine */
  import: async ctx => {
    ctx.send("importing... beep, boop, bop");
  }
};
