export const projectsList = [
    // {
    //     name: "Storyline game",
    //     description: "The game is about guessing trends. Users have to guess statistical info based on years",
    //     demo: [
    //         { name: "video", link: 'https://www.youtube.com/embed/Ap830EuU7RA' },
    //         { name: "live", link: 'https://myauto.ge' },
    //     ]
    // },
    



    {
        name: "Related nodes",
        description: "Visualisation showing relationships between families and people",
        cover: "images/projects/related.png",
        technologies: [ { name: "javascript" }, { name: "d3"}, { name: "canvas" }, { name: "html" }, { name: "css" } ],
        demos: [
            { name: "live", link: "https://tsogi.net/d3/forced-nodes/", },
        ]
    },
    {
        name: "Coronavirus live map",
        description: "The visualisation shows how many cases of coronavirus have been logged by countries on the world map",
        cover: "images/projects/covid.png",
        technologies: [ { name: "javascript" }, { name: "d3"}, { name: "svg" }, { name: "html" }, { name: "css" } ],
        demos: [
            { name: "live", link: "https://tsogi.net/d3/coronavirus", },
            { name: "video", link: "https://www.youtube.com/embed/QvYQtRaLwA4?autoplay=1&mute=1&loop=1&playlist=QvYQtRaLwA4" }
        ]
    },
    {
        name: "Storyline game",
        description: "Chart based game that asks users to guess various trends and calculates correctness",
        cover: "images/projects/storyline.png",
        technologies: [{ name: "php"}, { name: "laravel" }, { name: "javascript" }, { name: "react"}, { name: "d3" }, { name: "svg" }, { name: "html" }, { name: "css" } ],
        demos: [
            { name: "live", link: "https://play.storylinegame.com/play", },
            { name: "video", link: "https://www.youtube.com/embed/aLQxTXgRCyc", },
        ]
    },
    {
        name: "Flat selector app",
        description: "This app lets users check and select flats for buying",
        cover: "images/projects/flats.png",
        technologies: [ { name: "javascript" }, { name: "nextjs" }, { name: "aws" }, { name: "mysql"}, { name: "d3"}, { name: "svg" }, { name: "html" }, { name: "css" } ],
        demos: [
            { name: "video", link: "https://www.youtube.com/embed/lZX8oA0GXBU?autoplay=1&mute=1&loop=1&playlist=lZX8oA0GXBU", }
        ]
    },
    {
        name: "Equipment details explorer",
        description: "The visualisation lets users explore parts of factory equipment",
        cover: "images/projects/equipment.png",
        technologies: [ { name: "javascript" }, { name: "d3"}, { name: "svg" }, { name: "html" }, { name: "css" } ],
        demos: [
            { name: "live", link: "https://tsogi.net/d3/graphHierarchy/", },
        ]
    },
    {
        name: "Analogue clock",
        description: "",
        cover: "images/projects/analogue.png",
        technologies: [ { name: "javascript" }, { name: "d3" }, { name: "svg" }, { name: "html" }, { name: "css" } ],
        demos: [
            { name: "live", link: "https://tsogi.net/d3/analog-clock", },
        ]
    },
]