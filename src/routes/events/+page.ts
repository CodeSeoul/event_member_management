import type {PageLoad} from "$types/src/routes/events/$types";
import type { EventListData } from "$lib/EventData";

export const load: PageLoad = async ({ fetch }) => {
    const url = "http://localhost:8000/events";
    const options = {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
        },
    };
    let response;
    try {
        response = await fetch(url, options)
    } catch (error) {
        console.error(`Failed to retrieve event list due to error: ${error}`);
        return;
    }
    const data = await response.json();
    console.log(data);
    const eventList = data._embedded;
    const outputList: EventListData = {
        events: [],
    };
    for (const event of eventList.events) {
        outputList.events.push({
            id: event.id,
            title: event.title,
            date: new Date(event.startTimestamp),
            timeslot: '',
            seriesName: null,
            description: event.description,
            imageUrl: event.imageUrl,
        });
    }
    return outputList;
    /*
    createdAt: "2023-03-19T13:40:59.758617Z",
    description: "such new, so event"
    durationMinutes: 120
    id: 3
    imageUrl: "https://imgs.search.brave.com/ETZSXHRxNOTB6w7R9iEP1HFR6ps4blygjf8HHUi-gYk/rs:fit:1200:1200:1/g:ce/aHR0cDovL2kwLmt5/bS1jZG4uY29tL2Vu/dHJpZXMvaWNvbnMv/b3JpZ2luYWwvMDAw/LzAwMC8xMDcvc21p/bHkuanBn"
    onlineLink: null
    rsvps: []
    startTimestamp: "2022-06-22T08:51:00.000+00:00"
    title: "New Event"
    updatedAt: "2023-03-19T13:40:59.758617Z"
    venue: "Yo mama's house"
     */

    // return {
    //     events: [
    //         {
    //             id: 1,
    //             eventTitle: "The Biggest Event!",
    //             eventDate: new Date(),
    //             eventTimeslot: "Saturday Hangouts",
    //             eventSeriesName: "The Best Events",
    //             eventDescription: "It is the biggest event. All the coolest people will be there. FOMO at max levels.",
    //             eventImage: "https://lh3.googleusercontent.com/u/0/drive-viewer/AFGJ81ruKlLCVFVls3Q0laC93lRTNvmrzPFmR1FyxkrdhTN364lSJqctcNMjHZXC5jWz_JLaeXIYISEj0UBFIQRdQlZuDsoiAA=w1920-h929"
    //         },
    //         {
    //             id: 2,
    //             eventTitle: "Another Great Event!!",
    //             eventDate: new Date(),
    //             eventTimeslot: "Machine Learning Afternoons",
    //             eventSeriesName: null,
    //             eventDescription: "This one's great, too! This description needs to be really log to trigger the overflow logic. How long? I have no idea! I'm just going to ramble until I think there's sufficient madness. Madness?! THIS IS SPARTA! But not because Sparta was quite violent. However, the mighty feels are so mighty. So so mighty. I should work out, so I can look like Leonidus.",
    //             eventImage: "https://lh3.googleusercontent.com/u/0/drive-viewer/AFGJ81ruKlLCVFVls3Q0laC93lRTNvmrzPFmR1FyxkrdhTN364lSJqctcNMjHZXC5jWz_JLaeXIYISEj0UBFIQRdQlZuDsoiAA=w1920-h929"
    //         }
    //     ]
    // };
}
