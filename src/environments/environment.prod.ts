export const environment = {
  production: true,
  version: '1.0.0',
  api: {
    base: 'https://stage.betterevents.live/web/event/api/v1/',
  },
  event: 'eso2022',
  providers: [
    // Provider for mock data
    // { provide: HTTP_INTERCEPTORS, useClass: MockBackendInterceptor, multi: true }
  ]
};
