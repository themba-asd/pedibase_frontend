import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: () => import('../views/HomeWelcome.vue')
    },
    {
      path: '/pedigree',
      name: 'PedigreeTableView',
      component: () => import('../views/DatabaseTable.vue')
    },
    {
      path: '/diagram',
      name: 'DiagramView',
      component: () => import('../views/PedigreeDiagram.vue')
    },
    {
      path: '/breeders',
      name: 'BreedersTableView',
      component: () => import('../views/BreedersTable.vue')
    },
    {
      path: '/pending',
      name: 'PendingApprovalTableView',
      component: () => import('../views/PendingBreedsTable.vue')
    },
    {
      path: '/create',
      name: 'CreateRecordView',
      component: () => import('../views/CreateRecordForm.vue')
    },
  ]
})

export default router
