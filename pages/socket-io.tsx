import { PageWrapper } from 'components/PageWrapper/PageWrapper';
import { useEffect, useState } from 'react';
import io, { Socket } from 'socket.io-client';

export default function socketIo() {
  const [state, setState] = useState([]);

  function pushToState(value: string) {
    setState((prev) => [...prev, value]);
  }

  useEffect(() => {
    let socket: Socket;

    fetch('/api/socketio').finally(() => {
      socket = io();

      socket.on('connect', () => {
        pushToState('connect');

        socket.emit('hello');
      });

      socket.on('a user connected', () => {
        pushToState('a user connected');
      });

      socket.on('hello', (data) => {
        pushToState(data);
      });

      socket.on('disconnect', () => {
        console.log('disconnect');

        pushToState('disconnect');
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
      {state.map((str, id) => {
        return <li key={id}>{str}</li>;
      })}
    </PageWrapper>
  );
}
