export default {
  beforeCreate(ctx, inject) {
    let configPrivate = {};
    if (process.server) {
      configPrivate = {
        privateVar: process.env.PRIVATE_VAR,
      };
    }

    const configPublic = {
      publicVar: process.env.PUBLIC_VAR,
    };

    inject('config', {
      ...configPublic,
      ...configPrivate,
    });
  },
};
