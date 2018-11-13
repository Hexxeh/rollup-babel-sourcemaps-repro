import { init } from '@sentry/browser';

const sentry = () => init({ dsn: 'https://abc@sentry.io/123456' });
export default sentry;

