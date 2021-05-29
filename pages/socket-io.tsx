import { PageWrapper } from 'components/PageWrapper/PageWrapper';
import { useEffect, useState } from 'react';
import io, { Socket } from 'socket.io-client';

export default function socketIo() {
  const [state, setState] = useState([]);

  useEffect(() => {
    let socket: Socket;

    fetch('/api/socketio').finally(() => {
      socket = io();

      socket.on('connect', () => {
        console.log(`dlc setState([...state, 'connect']);`);

        setState([...state, 'connect']);
        socket.emit('hello');
      });

      socket.on('a user connected', () => {
        console.log(`dlc setState([...state, 'a user connected']);`);

        setState([...state, 'a user connected']);
      });

      socket.on('hello', (data) => {
        console.log(`dlc hello setState([...state, data]);`, data);

        setState([...state, data]);
      });

      socket.on('disconnect', () => {
        console.log('disconnect');
      });
    });

    return () => {
      console.log('Disconnecting socket...');

      if (socket) {
        socket.disconnect();
      }
    };
  }, []);

  return (
    <PageWrapper title="Socket.io Demo">
      {console.log('dlc state', state)}
      {state.map((str) => {
        return <li key={new Date().getTime()}>{str}</li>;
      })}
    </PageWrapper>
  );
}
