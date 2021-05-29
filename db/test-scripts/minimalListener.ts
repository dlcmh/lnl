import { PgPubSub } from '@imqueue/pg-pubsub';

const CHANNEL = 'HelloChannel';

function dlc(data: any) {
  console.log('dlc start');
  console.log(data);
  console.log('dlc end');
}

const pubSub = new PgPubSub({
  connectionString: 'postgres:///lnl',
  singleListener: false,
});

pubSub.on('listen', (channel) => console.info(`Listening to ${channel}...`));
pubSub.on('connect', async () => {
  console.info('Database connected!');
  await pubSub.listen(CHANNEL);
});
pubSub.on('end', () => console.warn('Connection closed!'));
pubSub.channels.on(CHANNEL, dlc);
pubSub.connect().catch((err) => console.error('Connection error:', err));
