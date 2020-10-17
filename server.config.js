export default {
  plugins: [
    '@uvue/server/plugins/gzip',
    '@uvue/server/plugins/serverError',
    '@uvue/server/plugins/static',
    '@uvue/server/plugins/modernBuild',
    [
      './src/runtimeConfigServer',
      {
        publicConfig: {
          foo: process.env.FOO,
        },
        privateConfig: {
          bar: process.env.BAR,
        },
      },
    ],
  ],
};
