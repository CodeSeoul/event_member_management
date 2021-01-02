import {getRepository, MigrationInterface, QueryRunner} from "typeorm";

export class DevSeedData1609689692083 implements MigrationInterface {

    public async up(_: QueryRunner): Promise<void> {
        if (process.env.NODE_ENV === 'production') return;

        const series = await getRepository('series').insert([
            {
                name: 'series A',
            },
            {
                name: 'dos series'
            }
				]);
				
				const members = await getRepository('members').insert([
					{
							firstName: 'Homer',
							lastName: 'Simpson',
							imageUrl: 'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png',
							shortBio: 'I like Duff beer and Krusty Burgers!',
					},
					{
						firstName: 'Ned',
						lastName: 'Flanders',
						imageUrl: 'https://en.wikipedia.org/wiki/Ned_Flanders#/media/File:Flanders_with_Parents.png',
						shortBio: 'I love my 2 sons, Rod and Todd',
					},
					
				])

        await getRepository('event').insert([
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
                seriesId: series.identifiers[0].id,
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
                seriesId: series.identifiers[1].id,
                venueId: null
            }
        ]);
    }

    public async down(_: QueryRunner): Promise<void> {
				await getRepository('series').delete({name: ['series A', 'dos series']});

        await getRepository('members').delete({firstName: ['Homer', 'Ned']});
				
        await getRepository('event').delete({title: ['event the first', 'a series 1 event', 'series numba 2 event']});
    }

}
