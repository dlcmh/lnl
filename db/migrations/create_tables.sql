-- psql < db/migrations/create_tables.sql

\connect lnl

drop table if exists test_notifications cascade;
create table test_notifications(
  id serial primary key,
  message varchar not null
);

