delete
from event
where title in (
               'event the first',
               'a series 1 event',
               'series numba 2 event'
    );

delete
from series
where name in (
               'local dev series 1',
               'local dev series numba two'
    );
