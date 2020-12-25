create schema if not exists app;

use app;

create table if not exists event (
    id int auto_increment primary key,
    title varchar(80) not null,
    startTimestamp timestamp not null default current_timestamp,
    durationMinutes int not null,
    imageUrl varchar(255) not null,
    description text not null,
    onlineLink varchar(255) null,
    seriesId int null,
    venueId int null,
    key event_title (title),
    key event_series_id (seriesId),
    key event_venue_id (venueId),
    key event_start_timestamp (startTimestamp)
) character set utf8mb4 collate utf8mb4_unicode_ci;

create table if not exists series (
    id int auto_increment primary key,
    name varchar(80) not null,
    key series_name (name)
) character set utf8mb4 collate utf8mb4_unicode_ci;
