import {MattePistachioApiApplication} from './application';
import {ApplicationConfig} from '@loopback/core';

export {MattePistachioApiApplication};

export async function main(options?: ApplicationConfig) {
  const app = new MattePistachioApiApplication(options);
  await app.boot();
  await app.start();
  return app;
}
