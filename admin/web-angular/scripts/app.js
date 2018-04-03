
angular
  .module('sbAdminApp', [
    'oc.lazyLoad',
    'ui.router',
    'ui.bootstrap',
    'angular-loading-bar','ngRoute','ngResource',
  ]).constant('BASE_URL', '/API')

.run(function($http,$rootScope,$window,BASE_URL,$state)
{
    // if(sessionStorage.length > 0){
    //     $rootScope.current_user = sessionStorage.current_user;
    //     $rootScope.authenticated = true;
    // }else{
    //     $rootScope.authenticated = false;
    //     $rootScope.current_user = 'Guest';
    // }
    
    $rootScope.signout = function(){
      $window.localStorage.clear();
      $state.go('login')
    };

    var token = $window.localStorage.getItem("token");
    console.log("here!");
    console.log(token);
    $http({
        url: BASE_URL + '/getCurrentUser',
        method: 'GET',
        headers: {
          'Authorization': token
        }
    }).then(function(response){
      if(response.data.msg === 'OK'){
        //valid user
      } else{
        $window.localStorage.clear();
        $state.go('login')
      }
    }, function(){})

})
  .config(['$stateProvider','$urlRouterProvider','$ocLazyLoadProvider',function ($stateProvider,$urlRouterProvider,$ocLazyLoadProvider) {
    
    $ocLazyLoadProvider.config({
      debug:false,
      events:true,
    });

    $urlRouterProvider.otherwise('/login');

    $stateProvider
      .state('dashboard', {
        url:'/dashboard',
        templateUrl: 'views/dashboard/main.html',
        resolve: {
            loadMyDirectives:function($ocLazyLoad){
                return $ocLazyLoad.load(
                {
                    name:'sbAdminApp',
                    files:[
                    'scripts/directives/header/header.js',
                    'scripts/directives/header/header-notification/header-notification.js',
                    'scripts/directives/sidebar/sidebar.js',
                    'scripts/directives/sidebar/sidebar-search/sidebar-search.js'
                    ]
                }),
                $ocLazyLoad.load(
                {
                   name:'toggle-switch',
                   files:["bower_components/angular-toggle-switch/angular-toggle-switch.min.js",
                          "bower_components/angular-toggle-switch/angular-toggle-switch.css"
                      ]
                }),
                $ocLazyLoad.load(
                {
                  name:'ngAnimate',
                  files:['bower_components/angular-animate/angular-animate.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngCookies',
                  files:['bower_components/angular-cookies/angular-cookies.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngResource',
                  files:['bower_components/angular-resource/angular-resource.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngSanitize',
                  files:['bower_components/angular-sanitize/angular-sanitize.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngTouch',
                  files:['bower_components/angular-touch/angular-touch.js']
                })
            }
        }
    })
      .state('dashboard.home',{
        url:'/home',
        controller: 'MainCtrl',
        templateUrl:'views/dashboard/home.html',
        resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'sbAdminApp',
              files:[
              'scripts/controllers/main.js',
              'scripts/directives/timeline/timeline.js',
              'scripts/directives/notifications/notifications.js',
              'scripts/directives/chat/chat.js',
              'scripts/directives/dashboard/stats/stats.js'
              ]
            })
          }
        }
      })
      .state('dashboard.form',{
        templateUrl:'views/form.html',
        url:'/form'
    })

      .state('dashboard.blank',{
        templateUrl:'views/pages/blank.html',
        url:'/blank'
    })
     
.state('login',{
          controller:'AuthController',                                                                                            
          templateUrl:'views/pages/login.html',
          url:'/login',
           resolve: {
          loadMyFile:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'sbAdminApp',
              files:['scripts/controllers/AuthController.js']
            })
          }
        }
      })



      .state('dashboard.chart',{
        templateUrl:'views/chart.html',
        url:'/chart',
        controller:'ChartCtrl',
        resolve: {
          loadMyFile:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'chart.js',
              files:[
                'bower_components/angular-chart.js/dist/angular-chart.min.js',
                'bower_components/angular-chart.js/dist/angular-chart.css'
              ]
            }),
            $ocLazyLoad.load({
                name:'sbAdminApp',
                files:['scripts/controllers/chartContoller.js']
            })
          }
        }
    })
      .state('dashboard.table',{
        templateUrl:'views/table.html',
        url:'/table'
    })
      .state('dashboard.panels-wells',{
          templateUrl:'views/ui-elements/panels-wells.html',
          url:'/panels-wells'
      })
      .state('dashboard.buttons',{
        templateUrl:'views/ui-elements/buttons.html',
        url:'/buttons'
    })
      .state('dashboard.notifications',{
        templateUrl:'views/ui-elements/notifications.html',
        url:'/notifications'
    })
      .state('dashboard.typography',{
       templateUrl:'views/ui-elements/typography.html',
       url:'/typography'
   })
      .state('dashboard.icons',{
       templateUrl:'views/ui-elements/icons.html',
       url:'/icons'
   })
      .state('dashboard.grid',{
       templateUrl:'views/ui-elements/grid.html',
       url:'/grid'
   })
       .state('dashboard.news',{
          controller:'News',                                                                                            
          templateUrl:'views/newslist.html',
          url:'/news',
           resolve: {
          loadMyFile:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'sbAdminApp',
              files:['scripts/controllers/news.js']
            })
          }
        }
      })


.state('dashboard.store',{
          controller:'Store',                                                                                            
          templateUrl:'views/store.html',
          url:'/store',
           resolve: {
          loadMyFile:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'sbAdminApp',
              files:['scripts/controllers/store.js']
            })
          }
        }
      })



.state('dashboard.addstore',{
          controller:'Addstore',                                                                                            
          templateUrl:'views/addstore.html',
          url:'/addstore',
           resolve: {
          loadMyFile:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'sbAdminApp',
              files:['scripts/controllers/Addstore.js']
            })
          }
        }
      })

.state('dashboard.editstore',{
   url:'/editstore/:index/:address/:re_address/:location/:phone/:email/:image',

          controller:'editstore',                                                                                            
          templateUrl:'views/editstore.html',
           resolve: {
          loadMyFile:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'sbAdminApp',
              files:['scripts/controllers/editstore.js']
            })
          }
        }
      })





.state('dashboard.Franchise',{
          controller:'News',                                                                                            
          templateUrl:'views/Franchise.html',
          url:'/Franchise',
           resolve: {
          loadMyFile:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'sbAdminApp',
              files:['scripts/controllers/news.js']
            })
          }
        }
      })
.state('dashboard.AddFranchise',{
          controller:'News',                                                                                            
          templateUrl:'views/AddFranchise.html',
          url:'/AddFranchise',
           resolve: {
          loadMyFile:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'sbAdminApp',
              files:['scripts/controllers/news.js']
            })
          }
        }
      })
.state('dashboard.EditFranchise',{
          controller:'News',                                                                                            
          templateUrl:'views/EditFranchise.html',
          url:'/EditFranchise',
           resolve: {
          loadMyFile:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'sbAdminApp',
              files:['scripts/controllers/news.js']
            })
          }
        }
      })


.state('dashboard.faq',{
          controller:'Faq',                                                                                            
          templateUrl:'views/FAQ.html',
          url:'/faq',
           resolve: {
          loadMyFile:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'sbAdminApp',
              files:['scripts/controllers/faq.js']
            })
          }
        }
      })

.state('dashboard.addfaq',{
          controller:'Addfaq',                                                                                            
          templateUrl:'views/ADDFAQ.html',
          url:'/addfaq',
           resolve: {
          loadMyFile:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'sbAdminApp',
              files:['scripts/controllers/addfaq.js']
            })
          }
        }
      })
.state('dashboard.editfaq',{
          url:'/editstore/:index/:heading/:subheading/:description',

          controller:'editfaq',                                                                                            
          templateUrl:'views/EDITFAQ.html',
           resolve: {
          loadMyFile:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'sbAdminApp',
              files:['scripts/controllers/editfaq.js']
            })
          }
        }
      })





 .state('dashboard.editnews',{
        
 url:'/editnews/:index/:image/:heading/:subheading/:description',

            controller:'editNews',                                                                                            
          templateUrl:'views/editnews.html',
     
         
           resolve: {
          loadMyFile:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'sbAdminApp',
              files:['scripts/controllers/editnews.js']
            })
          }
        }
      })




.state('dashboard.article',{
          controller:'Article',                                                                                            
          templateUrl:'views/article.html',
          url:'/article',
           resolve: {
          loadMyFile:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'sbAdminApp',
              files:['scripts/controllers/Article.js']
            })
          }
        }
      })



      .state('dashboard.addarticle',{
        controller:'Addarticle',                                                                                            
       templateUrl:'views/addarticle.html',
       url:'/addarticle',
       resolve: {
          loadMyFile:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'sbAdminApp',
              files:['scripts/controllers/Addarticle.js','editor/editor.js','editor/editor.css','editor/txtEditor.js','editor/txtEditor.js']
            })
          }
        }
      })





       .state('dashboard.editarticle',{
        
 url:'/editnews/:index/:image/:heading/:subheading/:description',

            controller:'editarticle',                                                                                            
          templateUrl:'views/editarticle.html',
     
         
           resolve: {
          loadMyFile:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'sbAdminApp',
              files:['scripts/controllers/editarticle.js']
            })
          }
        }
      })








      .state('dashboard.addnews',{
        controller:'AddNews',                                                                                            
       templateUrl:'views/addnews.html',
       url:'/addnews',
       resolve: {
          loadMyFile:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'sbAdminApp',
              files:['scripts/controllers/AddNews.js','editor/editor.js','editor/editor.css','editor/txtEditor.js','editor/txtEditor.js']
            })
          }
        }
      })

  }]);

    

 