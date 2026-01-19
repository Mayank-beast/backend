import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

const creatorId = "73052926-1e15-47a9-a0d8-0a93349f3a1d"

const movies = [
  {
    title: "Inception",
    genres: ["Sci-Fi"],
    releaseYear: 2010,
    createdBy: creatorId,
    overview: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    posterUrl: "https://m.media-amazon.com/images/I/51v5ZpFyaFL._AC_SY445_.jpg",
    runtime : 148,
    },
    {
    title: "The Dark Knight",
    genres: ["Action"],
    releaseYear: 2008,
    createdBy: creatorId,
    overview: "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    posterUrl: "https://m.media-amazon.com/images/I/51EbJjlD6-L._AC_SY445_.jpg",
    runtime : 152,  
    },
    {
    title: "Interstellar",
    genres: ["Sci-Fi"],
    releaseYear: 2014,
    createdBy: creatorId,
    overview: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    posterUrl: "https://m.media-amazon.com/images/I/71n58v1jWqL._AC_SY679_.jpg",
    runtime : 169,
    },
    {
    title: "The Matrix",
    genres: ["Sci-Fi"],
    releaseYear: 1999,
    createdBy: creatorId,
    overview: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    posterUrl: "https://m.media-amazon.com/images/I/51EG732BV3L._AC_SY445_.jpg",
    runtime : 136,
    },
    {
    title: "Pulp Fiction",
    overview: "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    posterUrl: "https://m.media-amazon.com/images/I/51V5ZpFyaFL._AC_SY445_.jpg",
    genres: ["Crime"],
    releaseYear: 1994,
    runtime : 154,
    createdBy: creatorId,
    },
    {
    title: "The Shawshank Redemption",
    genres: ["Drama"],
    releaseYear: 1994,
    createdBy: creatorId,
    overview: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    posterUrl: "https://m.media-amazon.com/images/I/51NiGlapXlL._AC_SY445_.jpg",
    runtime : 142,
    },
    {
    title: "The Godfather",
    genres: ["Crime"],
    releaseYear: 1972,  
    createdBy: creatorId,
    overview: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    posterUrl: "https://m.media-amazon.com/images/I/41+eK8zBwQL._AC_SY445_.jpg",
    runtime : 175,
    },
    {
    title: "Forrest Gump",
    genres: ["Drama"],
    releaseYear: 1994,
    createdBy: creatorId,
    overview: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
    posterUrl: "https://m.media-amazon.com/images/I/51MyxX5OlFL._AC_SY445_.jpg",
    runtime : 142,
    },
    {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    genres: ["Fantasy"],
    releaseYear: 2001,
    createdBy: creatorId,
    overview: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
    posterUrl: "https://m.media-amazon.com/images/I/51V5ZpFyaFL._AC_SY445_.jpg",
    runtime : 178,
    },
    {
    title: "Star Wars: Episode IV - A New Hope",
    genres: ["Sci-Fi"],
    releaseYear: 1977,
    createdBy: creatorId,
    overview: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.",
    posterUrl: "https://m.media-amazon.com/images/I/51V5ZpFyaFL._AC_SY445_.jpg",
    runtime : 121,
    }
];

const main = async () => {
    console.log("seeding movies...");
    for( const movie of movies) {
        await prisma.movie.create({
            data: movie,
        });
        console.log(`Created movie: ${movie.title}`); 
    }
    console.log("Seeding completed.");
}; 

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
    }).finally(async () => {
    await prisma.$disconnect();
  });
