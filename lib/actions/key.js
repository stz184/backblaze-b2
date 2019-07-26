const _ = require('lodash');
const utils = require('./../utils');
const request = require('../request');
const endpoints = require('../endpoints');

exports.createKey = function(b2, args) {
  // we're allowing an args object OR bucketName and bucketType for backwards compatibility
  const capabilities = args.capabilities;
  const keyName = args.keyName;

  const options = {
      url: endpoints(b2).createKeyUrl,
      method: 'POST',
      headers: utils.getAuthHeaderObjectWithToken(b2),
      data: {
          accountId: b2.accountId,
          capabilities: capabilities,
          keyName: keyName,
          validDurationInSeconds: args.validDurationInSeconds || null,
          bucketId: args.bucketId || null,
          namePrefix: args.namePrefix || null
      }
  };
  // merge order matters here: later objects override earlier objects
  return request.sendRequest(_.merge({},
      _.get(args, 'axios', {}),
      options,
      _.get(args, 'axiosOverride', {})
  ));
};