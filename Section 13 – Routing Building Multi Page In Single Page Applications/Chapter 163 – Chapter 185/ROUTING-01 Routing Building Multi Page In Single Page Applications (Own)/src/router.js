import TeamsList from './components/pages/TeamsList.vue';
import UsersList from './components/pages/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/pages/NotFound.vue';
import TeamsFooter from './components/pages/TeamsFooter.vue';
import UsersFooter from './components/pages/UsersFooter.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    { 
      name: 'teams',
      path: '/teams',
      meta: { needsAuth: true },
      components: { default: TeamsList, footer: TeamsFooter },
      children: [
        { 
          name: 'team-members',
          path: ':teamId',
          // component: TeamMembers,
          component: TeamMembers,
          props: true },
      ] }, // our-domain.com/teams => TeamsList
    { 
      path: '/users',
      components: {
        default: UsersList,
        footer: UsersFooter
      },
      beforeEnter(to, from, next) {
        console.log('Users Before Enter');
        console.log(to, from);
        next();
      }
    },
    // { path: '/teams/:teamId', component: TeamMembers },
    // { path: '/teams/:teamId', component: TeamMembers, props: true },
    { path: '/:notFound(.*)', component: NotFound}
  ],
  linkActiveClass: 'active',
  // scrollBehavior(to, from, savedPosition) {}
  scrollBehavior(_, _2, savedPosition) {
    // console.log(to, from, savedPosition);
    if (savedPosition) {
      return savedPosition;
    }
    return { left:0,
             top: 0 }; // move to the top of page
  }
});

router.beforeEach(function(to, from, next) {
  console.log('Global beforeEach');
  console.log(to, from);
  // next(); // Agree
  // next(false); // Disagree
  // if (to.name === 'team-members') {
  //   next();
  // } else {
  //   next({name: 'team-members', params: { teamId: 't2' }});
  // }

  if(to.meta.needsAuth) {
    console.log('Needs auth !');
    next();
  } else {
    next();
  }
  // next();
});

router.afterEach(function(to, from) {
  // Sending Analytics Data
  console.log('Global After Each');
  console.log(to, from);
});

export default router;