import { createRouter, createWebHistory,  } from "vue-router"
import CoacheList from "./components/Pages/Coaches/CoacheList.vue";
import CoachDetails from "./components/Pages/Coaches/CoachDetails.vue";
import ContactCoach from "./components/Pages/Requets/ContactCoach.vue";
import RequestReceived from "./components/Pages/Requets/RequestReceived.vue";
import CoachRegistration from "./components/Pages/Coaches/CoachRegistration.vue";
import PageNotFound from "./components/Page404/PageNotFound.vue";


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
            component: CoachDetails,
            children: [
                {
                    path: 'contact',
                    component: ContactCoach
                }
            ]
        },
        {
            path: '/register',
            component: CoachRegistration
        },
        {
            path: '/contact',
            component: ContactCoach
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