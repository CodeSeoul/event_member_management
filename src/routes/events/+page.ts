import type {EventListData} from "$lib/EventListData";

export function load(): EventListData {
    return {
        events: [
            {
                id: 1,
                eventTitle: "The Biggest Event!",
                eventDate: new Date(),
                eventTimeslot: "Saturday Hangouts",
                eventSeriesName: "The Best Events",
                eventDescription: "It is the biggest event. All the coolest people will be there. FOMO at max levels.",
                eventImage: "https://lh3.googleusercontent.com/u/0/drive-viewer/AFGJ81ruKlLCVFVls3Q0laC93lRTNvmrzPFmR1FyxkrdhTN364lSJqctcNMjHZXC5jWz_JLaeXIYISEj0UBFIQRdQlZuDsoiAA=w1920-h929"
            },
            {
                id: 2,
                eventTitle: "Another Great Event!!",
                eventDate: new Date(),
                eventTimeslot: "Machine Learning Afternoons",
                eventSeriesName: null,
                eventDescription: "This one's great, too! This description needs to be really log to trigger the overflow logic. How long? I have no idea! I'm just going to ramble until I think there's sufficient madness. Madness?! THIS IS SPARTA! But not because Sparta was quite violent. However, the mighty feels are so mighty. So so mighty. I should work out, so I can look like Leonidus.",
                eventImage: "https://lh3.googleusercontent.com/u/0/drive-viewer/AFGJ81ruKlLCVFVls3Q0laC93lRTNvmrzPFmR1FyxkrdhTN364lSJqctcNMjHZXC5jWz_JLaeXIYISEj0UBFIQRdQlZuDsoiAA=w1920-h929"
            }
        ]
    };
}
