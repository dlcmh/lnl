import { Server } from 'socket.io';
import { PgPubSub } from '@imqueue/pg-pubsub';

const CHANNEL = 'HelloChannel';

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
pubSub.connect().catch((err) => console.error('Connection error:', err));

const ioHandler = (_req: any, res: any) => {
  if (!res.socket.server.io) {
    console.log('*First use, starting socket.io');

    const io = new Server(res.socket.server);

    io.on('connection', (socket) => {
      socket.broadcast.emit('a user connected');

      socket.on('hello', (msg) => {
        socket.emit('hello', 'world!');
      });
    });

    res.socket.server.io = io;

    // const pubSub = new PgPubSub({
    //   connectionString: 'postgres:///lnl',
    //   singleListener: false,
    // });

    // pubSub.on('listen', (channel) =>
    //   console.info(`Listening to ${channel}...`),
    // );
    // pubSub.on('connect', async () => {
    //   console.info('Database connected!');
    //   await pubSub.listen(CHANNEL);
    // });
    // pubSub.on('end', () => console.warn('Connection closed!'));
    // pubSub.connect().catch((err) => console.error('Connection error:', err));

    pubSub.channels.on(CHANNEL, (data: Record<string, any>) => {
      console.log('dlc pg_notify!', data);
      io.emit('pg_notify', data.message);
    });
  } else {
    console.log('socket.io already running');
  }
  res.end();
};

export const config = {
  api: {
    bodyParser: false,
  },
};

export default ioHandler;
