import self from "../img/self.png"

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];



export const info = {
    firstName: "Shreyas",
    lastName: "H-S",
    initials: "ShS", 
    position: "a Full Stack Developer",
    selfPortrait: self, 
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, 
    baseColor: colors[0],
    miniBio: [ 
        {
            emoji: '☕',
            text: 'Fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'Based in the India'
        },
        {
            emoji: "💼",
            text: "Systems Engineer"
        },
        {
            emoji: "📧",
            text: "s09082003@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://facebook.com",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://instagram.com",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com",
            icon: "fa fa-twitter",
            label: 'twitter'
        }

    ],
    bio: "Hello! I'm Shreyas H-S. I'm a student. I'm studying Computer Science Engineering at Sahyadri College of Engineering, I enjoy long walks. You should hire me!",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'html5', 'css3', 'figma'],
            exposedTo: ['Java', 'python']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'cricket',
            emoji: '🏏'
        },
        {
            label: 'movies',
            emoji: '🎥'
        }
    
],
portfolio: [ 
   
]
}