import { prisma } from "../config/db.js";

const addToWatchlist = async (req, res) => {
    const { movieId, status, rating, notes, userId } = req.body;
    
    //verify movie exists
    const movie = await prisma.movie.findUnique({
        where: { id: movieId },
    });

    if (!movie) {       
        return res.status(404).json({ error: "Movie not found" });
    } 

    //check if already in watchlist
    const existingInWatchlist = await prisma.watchlistItem.findUnique({
        where: { 
            userId_movieId: {
                userId: userId,
                movieId: movieId,
            }
        },
    });
    if (existingInWatchlist) {
        return res.status(400).json({ error: "Movie already in watchlist" });
    }

    const watchlistItem = await prisma.watchlistItem.create({
        data: {
            movieId,
            userId,
            status : status || 'Planned',
            rating,
            notes,
        },
    });
    res.status(201).json({
        status : "success",
        data: {
            watchlistItem,
        },
    });
};
    
export { addToWatchlist };

