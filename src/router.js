import { createRouter, createWebHistory,  } from "vue-router"
import CoacheList from "./views/Coaches/CoacheList.vue";
import CoachDetails from "./views/Coaches/CoachDetails.vue";
import CoachRegistration from "./views/Coaches/CoachRegistration.vue";
import ContactCoach from "./views/Requets/ContactCoach.vue";
import RequestReceived from "./views/Requets/RequestReceived.vue";
import PageNotFound from "./views/Page404/PageNotFound.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/coaches'
        }, 
        {
            path: '/coaches',
            component: CoacheList
        },
        {
            path: '/coaches/:id',
            name: 'CoachDetails',
            component: CoachDetails,
            props:true,
            meta:{
                isCoachDetailPage:true
            }
        },
        {
            path: '/register',
            component: CoachRegistration
        },
        {
            path: '/contact/:id',
            name:'Contact',
            component: ContactCoach,
            props:true
        },
        {
            path: '/requests',
            component: RequestReceived
        },{
            path:'/:notFound(.*)',
            component: PageNotFound
        }
    ]
})

export default router;