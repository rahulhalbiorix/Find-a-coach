import { createStore } from "vuex";


const store = createStore({
    state() {
        return {
            coaches: [
                {
                    id: 'c1',
                    image: '/src/assets/men.png',
                    firstname: 'Amish',
                    lastname: 'Joshi',
                    areas: ['frontend', 'backend', 'career', 'fitness'],
                    description: "I'm Amish Joshi, a freelance web developer with 5+ years of experience in full-stack development.",
                    hourlyRate: 30
                },
                {
                    id: 'c2',
                    image: '/src/assets/women.png',
                    firstname: 'Neha',
                    lastname: 'Sharma',
                    areas: ['frontend', 'career', 'life'],
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
                    areas: ['frontend', 'backend', 'fitness'],
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
                    areas: ['frontend', 'yoga'],
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
                    areas: ['backend', 'career', 'yoga'],
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
                },
                {
                    id: 'c12',
                    image: '/src/assets/men3.jpg',
                    firstname: 'Rahul',
                    lastname: 'Desai',
                    areas: ['yoga'],
                    description: 'Certified yoga instructor with a calm and focused approach.',
                    hourlyRate: 20  
                },
                {
                    id: 'c13',
                    image: '/src/assets/women2.png',
                    firstname: 'Anjali',
                    lastname: 'Naik',
                    areas: ['life', 'career'],
                    description: 'Life and career coach helping professionals find clarity.',
                    hourlyRate: 60  
                },
                {
                    id: 'c14',
                    image: '/src/assets/men2.png',
                    firstname: 'Zaid',
                    lastname: 'Ali',
                    areas: ['fitness'],
                    description: 'Personal trainer and nutrition guide for tech professionals.',
                    hourlyRate: 25
                },
                {
                    id: 'c15',
                    image: '/src/assets/women3.png',
                    firstname: 'Tanya',
                    lastname: 'Bose',
                    areas: ['frontend', 'yoga'],
                    description: 'Frontend engineer turned yoga coach.',
                    hourlyRate: 27
                },
                {
                    id: 'c16',
                    image: '/src/assets/men.png',
                    firstname: 'Deepak',
                    lastname: 'Nair',
                    areas: ['backend', 'career'],
                    description: 'Senior backend engineer with a passion for mentorship.',
                    hourlyRate: 45
                },
                {
                    id: 'c17',
                    image: '/src/assets/women4.png',
                    firstname: 'Aarti',
                    lastname: 'Ghosh',
                    areas: ['life'],
                    description: 'Helping people build life strategies and confidence.',
                    hourlyRate: 22
                }
            ],
            request: [
                {
                    id: 'c1',
                    email: 'rahulm@gmail.com',
                    message: 'i want to learn fronted developement'
                },
                {
                    id: 'c5',
                    email: 'yash@gmail.com',
                    message: 'i want to learn backend developement'
                },
                {
                    id: 'c3',
                    email: 'arjun@gmail.com',
                    message: 'i want to learn developing...'
                },
                {
                    id: 'c4',
                    email: 'ashutosh@gmail.com',
                    message: 'i want to learn Full stack developement...'
                }
            ]
        }

    },
    mutations: {
        ADD_REQUEST(state, payload) {
            state.request.push(payload)
        }
    },

    actions: {
        addRequest(context, payload) {
            context.commit('ADD_REQUEST', payload)

        }
    }
})


export default store