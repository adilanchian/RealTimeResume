// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  pusher: {
      key: '0d1732e32f0dea340a96',
      cluster: 'us2',
      encrypted: true,
      channel: 'my-resume',
      event: 'update-resume'
  },
  ngrok_url: 'http://realtimeresume.azurewebsites.net/'
};
