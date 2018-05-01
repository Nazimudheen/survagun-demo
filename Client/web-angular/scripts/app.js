
angular
  .module('sbAdminApp', [
    'oc.lazyLoad',
    'ui.router',
    'ui.bootstrap',
    'angular-loading-bar','ngSanitize',
  ]).constant('BASE_URL', '/API')
  .config(['$stateProvider','$urlRouterProvider','$ocLazyLoadProvider',function ($stateProvider,$urlRouterProvider,$ocLazyLoadProvider) {
    
    $ocLazyLoadProvider.config({
      debug:false,
      events:true,
    });

    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('dashboard', {
        url:'/dashboard',
        templateUrl: 'views/dashboard/main.html',
        resolve: {
            loadMyDirectives:function($ocLazyLoad){
                return $ocLazyLoad.load(
                {
                    name:'sbAdminApp',
                    files:['css/zoomslider.css',
                    'js/jquery.zoomslider.min.js',
                    'js/loading-body-slide.js',
                    'js/jquery-2.1.4.min.js',
                    'js/jquery.flexslider.js',
                    'js/modernizr-2.6.2.min.js'
                   
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
      .state('home',{
        url:'/home',
        controller: 'home',
        templateUrl:'views/home.html',
        resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'sbAdminApp',
              files:['scripts/controllers/home.js']})
          }
        }
      })
    
    .state('aboutus',{
        url:'/about-us',
    controller: 'about',
        templateUrl:'views/about.html',
        resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'sbAdminApp',
              files:['scripts/controllers/about.js'                  
                    ]})
          }
        }
      })




 .state('product',{
        url:'/product',
    controller: 'products',
        templateUrl:'views/product.html',
        resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'sbAdminApp',
              files:['scripts/controllers/product.js'                  
                    ]})
          }
        }
      })

    
     
 .state('quality',{
        url:'/quality',
    controller: 'quality',
        templateUrl:'views/quality.html',
        resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'sbAdminApp',
              files:['scripts/controllers/qulity.js'                  
                    ]})
          }
        }
      })





 .state('partner-with-us',{
        url:'/partner-with-us',
    controller: 'partner',
        templateUrl:'views/partner-with-us.html',
        resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'sbAdminApp',
              files:['scripts/controllers/partner.js'                  
                    ]})
          }
        }
      })





      .state('news',{
        url:'/news',
    controller: 'News',
        templateUrl:'views/news.html',
        resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'sbAdminApp',
              files:['scripts/controllers/news.js'                  
                    ]})
          }
        }
      })


      .state('article',{
       controller: 'article',
        templateUrl:'views/article.html',
                url:'/article',

        resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'sbAdminApp',
              files:['scripts/controllers/article.js']})
          }
        }
      })

      .state('contact',{
        controller: 'store',
          url:'/contact',
        templateUrl:'views/contact.html',
        resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'sbAdminApp',
              files:['scripts/controllers/store.js']})
          }
        }
      })
     .state('store',{
        controller: 'store',
          url:'/store',
        templateUrl:'views/storelist.html',
        resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'sbAdminApp',
              files:['scripts/controllers/store.js']})
          }
        }
      })

 

.state('deatils',{
     url:'/deatils/:index/:image/:heading/:subheading/:description',

          controller:'details',                                                                                            
          templateUrl:'views/details.html',
           resolve: {
          loadMyFile:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'sbAdminApp',
          files:['scripts/controllers/deatils.js'                
                    ]})
          }
        }
      })


.state('deatils_article',{
     url:'/article-details/:index/:image/:heading/:subheading/:description',

          controller:'details_article',                                                                                            
          templateUrl:'views/article-deatils.html',
           resolve: {
          loadMyFile:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'sbAdminApp',
          files:['scripts/controllers/details-artilce.js'                
                    ]})
          }
        }
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

    
angular.module('sbAdminApp')
.directive('flexslider', function () {

  return {
    link: function (scope, element, attrs) {

      element.flexslider({
        animation: "slide"
      });
    }
  }
});

 angular.module('sbAdminApp').filter('trustAs', ['$sce', 
    function($sce) {
        return function (input, type) {
            if (typeof input === "string") {
                return $sce.trustAs(type || 'html', input);
            }
            console.log("trustAs filter. Error. input isn't a string");
            return "";
        };
    }
])

 angular.module('sbAdminApp').directive('autoComplete', function($timeout) {
    return function(scope, iElement, iAttrs) {
            iElement.autocomplete({
                source: scope[iAttrs.uiItems],
                select: function() {
                    $timeout(function() {
                      iElement.trigger('input');
                    }, 0);
                }
            });
    };
});