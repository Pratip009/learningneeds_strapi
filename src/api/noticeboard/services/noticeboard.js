'use strict';

/**
 * noticeboard service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::noticeboard.noticeboard');
