import { PageWrapper } from 'components/PageWrapper/PageWrapper';
import { useEffect } from 'react';
import io from 'socket.io-client';

export default function socketIo() {
  useEffect(() => {
    fetch('/api/socketio').finally(() => {
      const socket = io();
      console.log('dlc socket', socket);
    });
  }, []);

  return (
    <PageWrapper title="Socket.io Demo">
      <p>Socket.io Demo</p>
    </PageWrapper>
  );
}
