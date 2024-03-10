import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: () => import('../views/TheWelcomePage.vue')
    },
    {
      path: '/pedigree',
      name: 'PedigreeTableView',
      component: () => import('../views/ThePedigreeTable.vue')
    },
    {
      path: '/diagram',
      name: 'DiagramView',
      component: () => import('../views/ThePedigreeChart.vue')
    },
    {
      path: '/breeders',
      name: 'BreedersTableView',
      component: () => import('../views/TheBreedersTable.vue')
    },
    {
      path: '/pending',
      name: 'PendingApprovalTableView',
      component: () => import('../views/ThePendingBreeds.vue')
    },
    {
      path: '/create',
      name: 'CreateRecordView',
      component: () => import('../views/ThePedigreeForm.vue')
    }
  ]
})

export default router
