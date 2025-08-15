import { FaReact } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiChakraui, SiJest, SiReactrouter, SiTestinglibrary, SiVitest, SiJavascript } from 'react-icons/si';
import { RiNextjsFill } from 'react-icons/ri';
import { TbBrandOauth } from "react-icons/tb";

const projectsCardsInfo = [
    {
        videoSrc: '',
        videoId: '',
        videoTitle: 'Genre Identifier application video demo',
        projectHref: 'https://genre-identifier.vercel.app/',
        projectTitle: 'Genre Identifier',
        projectText: 'Genre Identifier is a web application that allows a user to search artists in the Spotify music catalog and displays information about the artist and their genre(s).',
        projectSkills: [
            {
                skill: 'React',
                icon: FaReact
            },
            {
                skill: 'TypeScript',
                icon: SiTypescript
            },
            {
                skill: 'React Router',
                icon: SiReactrouter
            },
            {
                skill: 'OAuth 2.0',
                icon: TbBrandOauth
            },
            {
                skill: 'Tailwind CSS',
                icon: SiTailwindcss
            },
            {
                skill: 'Vitest',
                icon: SiVitest
            }
        ],
        githubRepoHref: 'https://github.com/bradywinslow/genre-identifier',
    },
    {
        videoSrc: 'https://www.youtube.com/embed/Ixs2bfRP0Sg?si=7YlVVqlX9ZjWJQMx',
        videoId: 'Ixs2bfRP0Sg',
        videoTitle: 'Reddit Client Gaming Feed application video demo',
        projectHref: 'https://reddit-client-gaming-feed.vercel.app/',
        projectTitle: 'Reddit Client Gaming Feed',
        projectText: 'Reddit Client Gaming Feed is a web application that displays gaming-related posts from Reddit, providing users with a feed of content focused on gaming discussions, media, and news.',
        projectSkills: [
            {
                skill: 'Next.js',
                icon: RiNextjsFill
            },
            {
                skill: 'TypeScript',
                icon: SiTypescript
            },
            {
                skill: 'Chakra UI',
                icon: SiChakraui
            },
            {
                skill: 'Jest',
                icon: SiJest
            }
        ],
        githubRepoHref: 'https://github.com/bradywinslow/reddit-client',
    },
    {
        videoSrc: 'https://www.youtube.com/embed/YCnOO_iZ2fw?si=c1ySWXxX3lchUJIk',
        videoId: 'YCnOO_iZ2fw',
        videoTitle: 'Find Your Hat application video demo',
        projectHref: 'https://findyourhat.netlify.app/',
        projectTitle: 'Find Your Hat',
        projectText: 'Find Your Hat is a game. After setting a width and height, and a percentage for holes to appear on the field, a user navigates through the field, trying to avoid the holes to find the hat.',
        projectSkills: [
            {
                skill: 'React',
                icon: FaReact
            },
            {
                skill: 'JavaScript',
                icon: SiJavascript
            },
            {
                skill: 'React Router',
                icon: SiReactrouter
            },
            {
                skill: 'Jest',
                icon: SiJest
            }
        ],
        githubRepoHref: 'https://github.com/bradywinslow/findYourHat',
    },
    {
        videoSrc: 'https://www.youtube.com/embed/WSdDwcX9JZQ?si=86-eQ7siCpWD-vt6',
        videoId: 'WSdDwcX9JZQ',
        videoTitle: 'Jammming application video demo',
        projectHref: 'https://jammming-playlist-builder.netlify.app/',
        projectTitle: 'Jammming',
        projectText: 'Jammming is a web application that allows a user to sign in to their Spotify account, search for songs, albums, or artists, create a personalized playlist, and save the playlist to Spotify.',
        projectSkills: [
            {
                skill: 'React',
                icon: FaReact
            },
            {
                skill: 'JavaScript',
                icon: SiJavascript
            },
            {
                skill: 'React Router',
                icon: SiReactrouter
            },
            {
                skill: 'OAuth 2.0',
                icon: TbBrandOauth
            },
            {
                skill: 'Chakra UI',
                icon: SiChakraui
            }
        ],
        githubRepoHref: 'https://github.com/bradywinslow/jammming',
    }
]

export { projectsCardsInfo };
