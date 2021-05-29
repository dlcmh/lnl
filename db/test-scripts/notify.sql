-- psql < db/test-scripts/notify.sql

\connect lnl

select pg_notify('channel_test', 'test_message');
