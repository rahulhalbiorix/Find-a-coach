import { createStore } from "vuex";


const store = createStore({
    state() {
        return{
            coaches: [
                {
                    id: 'c1',
                    image: '/src/assets/men.png',
                    firstname: 'Amish',
                    lastname: 'Joshi',
                    areas: ['frontend', 'backend', 'career' , 'fitness' ],
                    description: "I'm Amish Joshi, a freelance web developer with 5+ years of experience in full-stack development.",
                    hourlyRate: 30
                },
                {
                    id: 'c2',
                    image: '/src/assets/women.png',
                    firstname: 'Neha',
                    lastname: 'Sharma',
                    areas: ['frontend', 'career' , 'life'],
                    description: 'I specialize in helping frontend developers level up their skills and land their dream jobs.',
                    hourlyRate: 35
                },
                {
                    id: 'c3',
                     image: '/src/assets/men2.png',
                    firstname: 'Ravi',
                    lastname: 'Patel',
                    areas: ['backend', 'career'],
                    description: 'Backend engineer with deep knowledge of databases, APIs, and system architecture.',
                    hourlyRate: 28
                },
                {
                    id: 'c4',
                    image: '/src/assets/women2.png',
                    firstname: 'Meena',
                    lastname: 'Kumari',
                    areas: ['frontend', 'backend' , 'fitness'],
                    description: 'Full-stack developer and mentor with a focus on React, Vue, Node, and Django.',
                    hourlyRate: 32
                },
                {
                    id: 'c5',
                    image: '/src/assets/men3.jpg',
                    firstname: 'Aditya',
                    lastname: 'Singh',
                    areas: ['career'],
                    description: 'Career coach for developers. I help you get interviews and ace them!',
                    hourlyRate: 40
                },
                {
                    id: 'c6',
                    image: '/src/assets/women3.png',
                    firstname: 'Priya',
                    lastname: 'Verma',
                    areas: ['frontend' , 'yoga' ],
                    description: 'Frontend UI/UX specialist with 6 years of experience in modern JavaScript frameworks.',
                    hourlyRate: 33
                },
                {
                    id: 'c7',
                    image: '/src/assets/men.png',
                    firstname: 'Manish',
                    lastname: 'Gupta',
                    areas: ['backend'],
                    description: 'Backend and DevOps engineer. I can help you build and deploy scalable apps.',
                    hourlyRate: 36
                },
                {
                    id: 'c8',
                    image: '/src/assets/women4.png',
                    firstname: 'Sneha',
                    lastname: 'Kapoor',
                    areas: ['frontend', 'career'],
                    description: 'I help frontend developers polish their skills, portfolios, and resumes.',
                    hourlyRate: 34
                },
                {
                    id: 'c9',
                    image: '/src/assets/men2.png',
                    firstname: 'Ankit',
                    lastname: 'Bansal',
                    areas: ['backend', 'career' ,'yoga' ],
                    description: 'I focus on backend technologies and career mentoring for junior developers.',
                    hourlyRate: 29
                },
                {
                    id: 'c10',
                    image: '/src/assets/women5.png',
                    firstname: 'Divya',
                    lastname: 'Rao',
                    areas: ['frontend', 'backend', 'career'],
                    description: '10+ years in full-stack development and coaching. Let me help you grow!',
                    hourlyRate: 50
                },
                {
                    id: 'c11',
                    image: '/src/assets/men3.jpg',
                    firstname: 'Karan',
                    lastname: 'Mehta',
                    areas: ['frontend', 'backend'],
                    description: 'I teach both frontend and backend development with real-world project guidance.',
                    hourlyRate: 31
                }
            ]
        }

    }
})


export default store