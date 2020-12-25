use app;

insert into series (name)
values ('local dev series 1'),
       ('local dev series numba two');

insert into event (title,
                   startTimestamp,
                   durationMinutes,
                   imageUrl,
                   description,
                   onlineLink,
                   seriesId,
                   venueId)
values ('event the first',
        date_sub(now(), interval 1 day),
        120,
        'https://i.pinimg.com/originals/e1/b4/0b/e1b40be489b101a6bc58993c11c271d9.jpg',
        'The first of ALL THE EVENTS!!!',
        null,
        null,
        null);

insert into event (title,
                   startTimestamp,
                   durationMinutes,
                   imageUrl,
                   description,
                   onlineLink,
                   seriesId,
                   venueId)
select 'a series 1 event',
       date_sub(now(), interval 2 day),
       120,
       'https://upload.wikimedia.org/wikipedia/en/9/9a/Trollface_non-free.png',
       'the series!',
       null,
       id,
       null
from series
where name = 'local dev series 1';

insert into event (title,
                   startTimestamp,
                   durationMinutes,
                   imageUrl,
                   description,
                   onlineLink,
                   seriesId,
                   venueId)
select 'series numba 2 event',
       date_add(now(), interval 1 day),
       120,
       'https://w7.pngwing.com/pngs/939/618/png-transparent-league-of-legends-internet-meme-rage-comic-lol-chimichanga-comics-white-face.png',
       'the series!',
       null,
       id,
       null
from series
where name = 'local dev series numba two';
