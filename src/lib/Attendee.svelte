<script lang="ts">
    export let id: number;
    export let name: string;
    export let role: string;
    export let company: string;
    export let signUpDate: Date;
    export let profilePhotoUrl: string;
    export let personalWebsite: string;
</script>

<figure class="attendee fir-image-figure" key={id}>
    <a
            class="fir-imageover"
            rel="noreferrer"
            target="_blank"
            href={personalWebsite}
    >
        <img
                class="fir-author-image fir-clickcircle"
                src={profilePhotoUrl}
                alt="randomface"
        />
    </a>
    <figcaption>
        <div class="fig-author-figure-title">{name}</div>
        <div class="fig-author-figure-title">{role} at {company}</div>
        <div class="fig-author-figure-title">Signed up: {signUpDate}</div>
    </figcaption>
</figure>
