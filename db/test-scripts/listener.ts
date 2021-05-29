import { PgPubSub } from '@imqueue/pg-pubsub';
import Timer = NodeJS.Timer;

let timer: Timer;
const NOTIFY_DELAY = 2000;
const CHANNEL = 'HelloChannel';

function dlc(data) {
  console.log('dlc start');
  console.log(data);
  console.log('dlc end');
}

/**
 * This is minimalistic example of NOTIFY/LISTEN with @imqueue/pg-pubsub with
 * filtering option set.
 * In this example all running copies of the app will listen and notify
 * to the same HelloChannel with no filtering and no locking. So everything is
 * emitted by every process will be caught and handle by each running process.
 */
const pubSub = new PgPubSub({
  connectionString: 'postgres:///lnl',
  singleListener: false,
});

pubSub.on('listen', (channel) => console.info(`Listening to ${channel}...`));
pubSub.on('connect', async () => {
  console.info('Database connected!');
  await pubSub.listen(CHANNEL);
  // timer = setInterval(async () => {
  //   await pubSub.notify(CHANNEL, { hello: { from: process.pid } });
  // }, NOTIFY_DELAY);
});
pubSub.on('notify', (channel) => console.log(`${channel} notified`));
pubSub.on('end', () => console.warn('Connection closed!'));
pubSub.channels.on(CHANNEL, dlc);
// pubSub.channels.on(CHANNEL, console.log);
pubSub.connect().catch((err) => console.error('Connection error:', err));
