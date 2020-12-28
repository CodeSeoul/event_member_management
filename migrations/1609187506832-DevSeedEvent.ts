import {getRepository, MigrationInterface, QueryRunner} from "typeorm";

export class DevSeedEvent1609187506832 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        if (process.env.NODE_ENV === 'production') return;
        await getRepository("event").save([
            {
                title: 'event the first',
                // 1 day
                startTimestamp: new Date(Date.now() - (60 * 60 * 24)),
                durationMinutes: 120,
                imageUrl: 'https://i.pinimg.com/originals/e1/b4/0b/e1b40be489b101a6bc58993c11c271d9.jpg',
                description: 'The first of ALL THE EVENTS!!!',
                onlineLine: null,
                seriesId: null,
                venueId: null
            },
            {
                title: 'a series 1 event',
                // 2 days
                startTimestamp: new Date(Date.now() + (60 * 60 * 24 * 2)),
                durationMinutes: 120,
                imageUrl: 'https://upload.wikimedia.org/wikipedia/en/9/9a/Trollface_non-free.png',
                description: 'the series!',
                onlineLine: null,
                seriesId: null,
                venueId: null
            },
            {
                title: 'series numba 2 event',
                // 1 day
                startTimestamp: new Date(Date.now() - (60 * 60 * 24)),
                durationMinutes: 120,
                imageUrl: 'https://w7.pngwing.com/pngs/939/618/png-transparent-league-of-legends-internet-meme-rage-comic-lol-chimichanga-comics-white-face.png',
                description: 'the series!',
                onlineLine: null,
                seriesId: null,
                venueId: null
            }
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        return;
    }

}
