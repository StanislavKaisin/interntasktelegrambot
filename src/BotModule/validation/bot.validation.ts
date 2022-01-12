import * as joi from 'joi';

export const createBotSchema = joi.object({
  bot_token: joi.string().min(46).required(),
  bot_name: joi
    .string()
    .regex(/^[@][a-zA-Z0-9.,$;_-]+(bot)$/, 'Wrong bot name')
    .required(),
});
