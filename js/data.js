// Sample movie data with embedded links
const movies = [
    // Example movie data
    {
        id: 1,
        title: "Deadpool & Wolverine",
        genre: "Action, Comedy, Science Fiction", 
        year: 2024, 
        rating: 7.8,
        image: "https://image.tmdb.org/t/p/w185/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
        link: "https://www.example.com/movie2",
        description: " Wade must reluctantly suit-up again with an even more reluctant Wolverine.",
        reviews: [
            { user: "John Doe", comment: "Very funny and entertaining!" },
            { user: "Jane Smith", comment: "A classic Mr. Bean adventure." }
        ]
    },
    {
        id: 1,
        title: "Mr Bean Holiday",
        genre: "Action", 
        year: 2020, 
        rating: 7.5,
        image: "https://cdn.moviefone.com/image-assets/1268/zbAlwsJNxfo4VfTy9peDo7itJ0I.jpg?d=360x540&q=60",
        link: "https://www.example.com/movie2",
        description: "Mr. Bean goes on a holiday to the south of France and havoc ensues.",
        reviews: [
            { user: "John Doe", comment: "Very funny and entertaining!" },
            { user: "Jane Smith", comment: "A classic Mr. Bean adventure." }
        ]
    },
    {   id: 2,
        title: "LIFT",
        genre: "Action", 
        year: 2020, 
        rating: 7.5,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzybnWtPtvwIq0py7MgZOoWdmKaSOlUojZ5A&usqp=CAU", 
        link: "https://www.example.com/movie2",
        description: "A thrilling ride inside a high-tech skyscraper.",
        reviews: [
            { user: "John Doe", comment: "Very funny and entertaining!" },
            { user: "Jane Smith", comment: "A classic Mr. Bean adventure." }
        ] 
    },
    {   id: 3,
        title: "Star Wars",
        genre: "Action", 
        year: 2020, 
        rating: 7.5,
        image: "https://i.ebayimg.com/images/g/qx8AAOSwywRaJei6/s-l1600.jpg", 
        link: "https://www.youtube.com/embed/OB1wGMQXMkk?si=OJJEJZ_h3nBM2-RA",
        description: "A thrilling ride inside a high-tech skyscraper.",
        reviews: [
            { user: "John Doe", comment: "Very funny and entertaining!" },
            { user: "Jane Smith", comment: "A classic Mr. Bean adventure." }
        ] 
    },
    {   title: "Breaking",
        genre: "Action", 
        year: 2020, 
        rating: 7.5, 
        image: "https://s.movieinsider.com/images/p/650617_m1658588520.jpg", 
        link: "https://huratv.to/movie/j2r74/1-1",
        description: "A thrilling ride inside a high-tech skyscraper.",
        reviews: [
            { user: "John Doe", comment: "Very funny and entertaining!" },
            { user: "Jane Smith", comment: "A classic Mr. Bean adventure." }
        ] 
    },
    {   title: "Movie 3",
        genre: "Action", 
        year: 2020, 
        rating: 7.5, 
        image: "https://www.indiewire.com/wp-content/uploads/2017/09/the-fundamentals-of-caring-2016.jpg?w=675", 
        link: "https://drive.google.com/file/d/1s50DPqs4ETsAO_1HzhfRMdRLo6ufKCi4/preview",
        description: "A thrilling ride inside a high-tech skyscraper.",
        reviews: [
            { user: "John Doe", comment: "Very funny and entertaining!" },
            { user: "Jane Smith", comment: "A classic Mr. Bean adventure." }
        ] 
    },
    {   title: "Movie 4",
        genre: "Action", 
        year: 2020, 
        rating: 7.5, 
        image: "https://www.indiewire.com/wp-content/uploads/2017/09/arq-2016.jpg?w=674",  
        link: "https://www.example.com/movie2",
        description: "A thrilling ride inside a high-tech skyscraper.",
        reviews: [
            { user: "John Doe", comment: "Very funny and entertaining!" },
            { user: "Jane Smith", comment: "A classic Mr. Bean adventure." }
        ] 
    },
    {   title: "Movie 4",
        genre: "Action", 
        year: 2020, 
        rating: 7.5, 
        image: "https://www.indiewire.com/wp-content/uploads/2017/09/the-do-over-2016.jpg?w=675", 
        link: "https://www.example.com/movie2",
        description: "A thrilling ride inside a high-tech skyscraper.",
        reviews: [
            { user: "John Doe", comment: "Very funny and entertaining!" },
            { user: "Jane Smith", comment: "A classic Mr. Bean adventure." }
        ] 
    },
    {   title: "Brain on Fire",
        genre: "Action", 
        year: 2020, 
        rating: 7.5, 
        image: "https://www.indiewire.com/wp-content/uploads/2017/09/brain-on-fire-2016.jpg?w=608", 
        link: "https://www.example.com/movie2",
        description: "A thrilling ride inside a high-tech skyscraper.",
        reviews: [
            { user: "John Doe", comment: "Very funny and entertaining!" },
            { user: "Jane Smith", comment: "A classic Mr. Bean adventure." }
        ] 
    },
    {   title: "Spectral",
        genre: "Action", 
        year: 2020, 
        rating: 7.5, 
        image: "https://www.indiewire.com/wp-content/uploads/2017/09/spectral-2016.jpg?w=640", 
        link: "https://www.example.com/movie2",
        description: "A thrilling ride inside a high-tech skyscraper.",
        reviews: [
            { user: "John Doe", comment: "Very funny and entertaining!" },
            { user: "Jane Smith", comment: "A classic Mr. Bean adventure." }
        ] 
    },
    {   title: "iBoy",
        genre: "Action", 
        year: 2020, 
        rating: 7.5, 
        image: "https://www.indiewire.com/wp-content/uploads/2017/09/iboy-2017.jpg?w=674", 
        link: "https://www.example.com/movie2",
        description: "A thrilling ride inside a high-tech skyscraper.",
        reviews: [
            { user: "John Doe", comment: "Very funny and entertaining!" },
            { user: "Jane Smith", comment: "A classic Mr. Bean adventure." }
        ] 
    },
    {   title: "Shimare Lake",
        genre: "Action", 
        year: 2020, 
        rating: 7.5, 
        image: "https://www.indiewire.com/wp-content/uploads/2017/09/shimmer-lake-2017.jpg?w=426", 
        link: "https://www.example.com/movie2",
        description: "A thrilling ride inside a high-tech skyscraper.",
        reviews: [
            { user: "John Doe", comment: "Very funny and entertaining!" },
            { user: "Jane Smith", comment: "A classic Mr. Bean adventure." }
        ] 
    },
    {   title: "War Machine",
        genre: "Action", 
        year: 2020, 
        rating: 7.5, 
        image: "https://www.indiewire.com/wp-content/uploads/2017/09/war-machine-2017.jpg?w=675", 
        link: "https://www.example.com/movie2",
        description: "A thrilling ride inside a high-tech skyscraper.",
        reviews: [
            { user: "John Doe", comment: "Very funny and entertaining!" },
            { user: "Jane Smith", comment: "A classic Mr. Bean adventure." }
        ] 
    },
    {   title: "What-Happened-to-Monday",
        genre: "Action", 
        year: 2020, 
        rating: 7.5, 
        image: "https://www.indiewire.com/wp-content/uploads/2017/09/what-happened-to-monday-2017.jpg?w=674", 
        link: "https://www.example.com/movie2",
        description: "A thrilling ride inside a high-tech skyscraper.",
        reviews: [
            { user: "John Doe", comment: "Very funny and entertaining!" },
            { user: "Jane Smith", comment: "A classic Mr. Bean adventure." }
        ] 
    },
    {   title: "Naked",
        genre: "Action", 
        year: 2020, 
        rating: 7.5,
        image: "https://www.indiewire.com/wp-content/uploads/2017/09/naked-2017.jpg?w=750", 
        ink: "https://www.example.com/movie2",
        description: "A thrilling ride inside a high-tech skyscraper.",
        reviews: [
            { user: "John Doe", comment: "Very funny and entertaining!" },
            { user: "Jane Smith", comment: "A classic Mr. Bean adventure." }
        ] 
    },
    {   title: "The IrishMan", 
        genre: "Action", 
        year: 2020, 
        rating: 7.5,
        image: "https://m.media-amazon.com/images/I/71Y5pMAw8rL._AC_SL1200_.jpg", 
        link: "https://www.example.com/movie2",
        description: "A thrilling ride inside a high-tech skyscraper.",
        reviews: [
            { user: "John Doe", comment: "Very funny and entertaining!" },
            { user: "Jane Smith", comment: "A classic Mr. Bean adventure." }
        ] 
    },
    {   title: "Set It Off", 
        genre: "Action", 
        year: 2020, 
        rating: 7.5,
        image: "https://m.media-amazon.com/images/I/61j5zKxZAfL._AC_SX679_.jpg", 
        link: "https://www.example.com/movie2",
        description: "A thrilling ride inside a high-tech skyscraper.",
        reviews: [
            { user: "John Doe", comment: "Very funny and entertaining!" },
            { user: "Jane Smith", comment: "A classic Mr. Bean adventure." }
        ] 
    },
    {   title: "Bad Boy", 
        genre: "Action", 
        year: 2020, 
        rating: 7.5,
        image: "https://m.media-amazon.com/images/I/61oxJVSh3mL.__AC_SX300_SY300_QL70_FMwebp_.jpg", 
        link: "https://www.example.com/movie2",
        description: "A thrilling ride inside a high-tech skyscraper.",
        reviews: [
            { user: "John Doe", comment: "Very funny and entertaining!" },
            { user: "Jane Smith", comment: "A classic Mr. Bean adventure." }
        ] 
    },
    {   title: "Adventure Time",
        genre: "Action", 
        year: 2020, 
        rating: 7.5, 
        image: "https://m.media-amazon.com/images/I/71NudCQoXAL.__AC_SX300_SY300_QL70_FMwebp_.jpg", 
        link: "https://www.example.com/movie2",
        description: "A thrilling ride inside a high-tech skyscraper.",
        reviews: [
            { user: "John Doe", comment: "Very funny and entertaining!" },
            { user: "Jane Smith", comment: "A classic Mr. Bean adventure." }
        ] 
    },
    {   title: "The Gray Man", 
        genre: "Action", 
        year: 2020, 
        rating: 7.5,
        image: "https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQUNjavGNLx726Pz9ZVbVca9TYbA2wReQdgKp-NXHw3QTnVU9tSxVEvWLBURMX8LmWpu6M6sxlpUZCcM2p_sqQBGg9MNS3UOlY2axxZ6scJa1QCpJrQXrFaXABLJZQaJdHj2setyYXqipKeNkwhk-6GJa.jpg?r=396", 
        link: "https://www.example.com/movie2",
        description: "A thrilling ride inside a high-tech skyscraper.", 
        reviews: [
            { user: "John Doe", comment: "Very funny and entertaining!" },
            { user: "Jane Smith", comment: "A classic Mr. Bean adventure." }
        ]
    },
    {   title: "The Witcher", 
        genre: "Action", 
        year: 2020, 
        rating: 7.5,
        image: "https://media-cache.cinematerial.com/p/500x/ohidfarp/the-witcher-movie-poster.jpg?v=1578294599", 
        link: "https://www.example.com/movie2",
        description: "A thrilling ride inside a high-tech skyscraper.",
        reviews: [
            { user: "John Doe", comment: "Very funny and entertaining!" },
            { user: "Jane Smith", comment: "A classic Mr. Bean adventure." }
        ] 
    },
    {   title: "Jung-e", 
        genre: "Action", 
        year: 2020, 
        rating: 7.5,
        image: "https://lh3.googleusercontent.com/proxy/RvnQDQPMVMzyeWiEQbG-rDVFNF5lBMO4hMRreG1Fqk3Wmgwqv7tgwuMLQ2I-5-w5MmEciBpTAJv5_v36urEQK-ArWIYvYGFDNdLOVpCQQkLZJ6YfRyrecyQs42Gt", 
        link: "https://www.example.com/movie2",
        description: "A thrilling ride inside a high-tech skyscraper.",
        reviews: [
            { user: "John Doe", comment: "Very funny and entertaining!" },
            { user: "Jane Smith", comment: "A classic Mr. Bean adventure." }
        ] 
    },
    {   title: "Triple Frontier",
        genre: "Action", 
        year: 2020, 
        rating: 7.5, 
        mage: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p16333799_p_v8_aa.jpg", 
        link: "https://www.example.com/movie2",
        description: "A thrilling ride inside a high-tech skyscraper.",
        reviews: [
            { user: "John Doe", comment: "Very funny and entertaining!" },
            { user: "Jane Smith", comment: "A classic Mr. Bean adventure." }
        ] 
    },
    // Add more movie data as needed
];
