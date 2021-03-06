// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //API_ENDPOINT : 'http://localhost:8080',
  API_ENDPOINT : 'https://shopbe.herokuapp.com',
  API_PM_MANAGER : 'https://prjtmanager.herokuapp.com',
  STRIPE_TOKEN : 'pk_test_51I5UVVFDVET2p0xlcftnbuLaWTq0yH67xHTcQifQmRUoLenKRoHpGhNmHAuMADWWZfNqopWDAr3u0CwHxYxiS7Ip00COpluwCM'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
