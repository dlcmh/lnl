-- psql < db/test-scripts/notify.sql

\connect lnl

select pg_notify('HelloChannel', '{"message": "hello"}');
