import { createStore } from "vuex";


const store = createStore({
    state() {
        return{
            coaches: [
                {
                    id: 'c1',
                    firstname: 'Amish',
                    lastname: 'Joshi',
                    areas: ['frontend', 'backend', 'career'],
                    description: "I'm Amish Joshi, a freelance web developer with 5+ years of experience in full-stack development.",
                    hourlyRate: 30
                },
                {
                    id: 'c2',
                    firstname: 'Neha',
                    lastname: 'Sharma',
                    areas: ['frontend', 'career'],
                    description: 'I specialize in helping frontend developers level up their skills and land their dream jobs.',
                    hourlyRate: 35
                },
                {
                    id: 'c3',
                    firstname: 'Ravi',
                    lastname: 'Patel',
                    areas: ['backend', 'career'],
                    description: 'Backend engineer with deep knowledge of databases, APIs, and system architecture.',
                    hourlyRate: 28
                },
                {
                    id: 'c4',
                    firstname: 'Meena',
                    lastname: 'Kumari',
                    areas: ['frontend', 'backend'],
                    description: 'Full-stack developer and mentor with a focus on React, Vue, Node, and Django.',
                    hourlyRate: 32
                },
                {
                    id: 'c5',
                    firstname: 'Aditya',
                    lastname: 'Singh',
                    areas: ['career'],
                    description: 'Career coach for developers. I help you get interviews and ace them!',
                    hourlyRate: 40
                },
                {
                    id: 'c6',
                    firstname: 'Priya',
                    lastname: 'Verma',
                    areas: ['frontend'],
                    description: 'Frontend UI/UX specialist with 6 years of experience in modern JavaScript frameworks.',
                    hourlyRate: 33
                },
                {
                    id: 'c7',
                    firstname: 'Manish',
                    lastname: 'Gupta',
                    areas: ['backend'],
                    description: 'Backend and DevOps engineer. I can help you build and deploy scalable apps.',
                    hourlyRate: 36
                },
                {
                    id: 'c8',
                    firstname: 'Sneha',
                    lastname: 'Kapoor',
                    areas: ['frontend', 'career'],
                    description: 'I help frontend developers polish their skills, portfolios, and resumes.',
                    hourlyRate: 34
                },
                {
                    id: 'c9',
                    firstname: 'Ankit',
                    lastname: 'Bansal',
                    areas: ['backend', 'career'],
                    description: 'I focus on backend technologies and career mentoring for junior developers.',
                    hourlyRate: 29
                },
                {
                    id: 'c10',
                    firstname: 'Divya',
                    lastname: 'Rao',
                    areas: ['frontend', 'backend', 'career'],
                    description: '10+ years in full-stack development and coaching. Let me help you grow!',
                    hourlyRate: 50
                },
                {
                    id: 'c11',
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