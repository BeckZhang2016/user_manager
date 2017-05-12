'use strict';

module.exports = function (Customuser) {
  Customuser.userLogin = function (body, cb) {
    Customuser.login(body, function (err, token) {
      if (err) throw err;
      cb(null, token);
    });
  };
  Customuser.remoteMethod(
    'userLogin',
    {
      http: {
        path: '/userLogin',
        verb: 'post'
      },
      accepts: {
        arg: 'object',
        type: 'object',
        http: {
          source: 'body'
        }
      },
      returns: [
        {
          arg: 'email',
          type: 'string'
        },
        {
          arg: 'password',
          type: 'string'
        }
      ]
    }
  )
};
