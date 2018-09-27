var myApp = angular.module('myApp', []);

myApp.controller('GreetCtrl', function($scope) {
    $scope.nombre = 'Mundo';
});

myApp.controller('ListCtrl', function($scope) {
    $scope.nombres = ['Hugo', 'Paco', 'Luis'];
});

myApp.controller('MyCtrl', function($scope) {
    $scope.action = function() {
        $scope.name = 'OK';
    };

    $scope.name = 'World';
});

myApp.controller('Ctrl', function($scope) {
    $scope.customer = {
        name: 'Naomi',
        address: '1600 Amphitheatre'
    };
}).directive('myCustomer', function() {
    return {
        template: 'Name: {{customer.name}} Address: {{customer.address}}',
        restrict: 'A'
    };
});

myApp.directive('owntag', function() {
    return {
        template: '<p>Own Tag</p>',
        restrict: 'E'
    };
});

myApp.directive('templateExample', function() {
    return {
        templateUrl: '../html/components/template.html',
        restrict: 'C'
    };
});

myApp.directive('ownattribute', function() {
    return {
        template: '<p>{{text}}</p>',
        link: function(scope, element, attrs) {
            scope.text = attrs.ownattribute;
        }
    };
});

myApp.directive('transcludeTrueExample', function() {
    return {
        restrict: 'A',
        transclude: true,
        template: '<div><b ng-transclude></b></div>'
    };
});

myApp.directive('transcludeElementExample', function() {
    return {
        restrict: 'A',
        transclude: 'element',
        link: function(scope, element, attrs, controller, transcludeFn) {
            element.after(transcludeFn());
            element.after("<p>Added Element</p>");
        }
    };
});

myApp.controller('stageController', function($scope, $window) {
    $scope.submitForm = function() {
        $window.alert("Aquí se implementaría la lógica para enviar la petición al servidor.");
    };
});

myApp.directive('listaCodigos', function() {
    return {
        require: 'ngModel',
        link: function(scope, element, attrs, controller) {
            scope.$watch('codigo1', function(newVal) {
                if (angular.isDefined(newVal) > 0) {
                    var listaCodigos = attrs.listaCodigos.split(',');
                    var valid = listaCodigos.indexOf(newVal) != -1;
                    controller.$setValidity('listaCodigos', valid);
                }
            });
        }
    };
});

myApp.controller("myController", function($scope) {
    $scope.numeros = [17381, 435619, 2283];
    $scope.users = [{
        nombre: "ramón parra",
        edad: 29
    }, {
        nombre: "juan lópez",
        edad: 34
    }, {
        nombre: "pepe pérez",
        edad: 21
    }];
});

myApp.filter("capitalize", function() {
    return function(text) {
        if (text != null) {
            return text.substring(0, 1).toUpperCase() + text.substring(1);
        }
    };
});

myApp.filter("toUpper", function() {
    return function(text) {
        if (text != null) {
            return text.toUpperCase();
        }
    };
});

myApp.filter("maxLength", function() {
    return function(text, max) {
        if (text != null) {
            if (text.length > max) {
                return text.substring(0, max) + "...";
            }
        }
    };
});

myApp.controller('miControlador', function($scope, userRepositoryFactory,
    userRepositoryProvider, userRepositoryService) {
    userRepositoryFactory.getAllUsers().success(function(users) {
        $scope.usersFactory = users;
    });
    userRepositoryProvider.getAllUsers().success(function(users) {
        $scope.usersProvider = users;
    });
    userRepositoryService.getAllUsers().success(function(users) {
        $scope.usersService = users;
    });
});

myApp
    .factory(
        'userRepositoryFactory',
        function($http) {
            return {
                getAllUsers: function() {
                    var url = "https://api.mongolab.com/api/1/databases/angularjs-intro/collections/users?apiKey=terrPcifZzn01_ImGsFOIZ96SwvSXgN9";
                    return $http.get(url);
                }
            };
        });

myApp
    .provider(
        'userRepositoryProvider',
        function() {
            this.$get = function($http) {
                return {
                    getAllUsers: function() {
                        var url = "https://api.mongolab.com/api/1/databases/angularjs-intro/collections/users?apiKey=terrPcifZzn01_ImGsFOIZ96SwvSXgN9";
                        return $http.get(url);
                    }
                };
            };
        });

myApp
    .service(
        'userRepositoryService',
        function($http) {
            this.getAllUsers = function() {
                var url = "https://api.mongolab.com/api/1/databases/angularjs-intro/collections/users?apiKey=terrPcifZzn01_ImGsFOIZ96SwvSXgN9";
                return $http.get(url);
            };
        });

var myMockApp = angular.module('myMockApp', ['ngMockE2E']);

myMockApp.run(function($httpBackend) {
    var users = [{
        "_id": {
            "$oid": "521b9500e4b077093419f429"
        },
        "firstName": "Jane",
        "lastName": "Doe",
        "age": 29
    }, {
        "_id": {
            "$oid": "521b954ae4b077093419f42c"
        },
        "firstName": "John",
        "lastName": "Doe",
        "age": 32
    }, {
        "_id": {
            "$oid": "531c8d87e4b0373ae7e5dc26"
        },
        "lastName": "gichi",
        "firstName": "gooki",
        "age": 19
    }, {
        "_id": {
            "$oid": "531c935be4b0373ae7e5ece2"
        },
        "lastName": "blumstein",
        "firstName": "monkey",
        "age": 19
    }, {
        "_id": {
            "$oid": "531ca4d4e4b00180d17e58bc"
        },
        "firstName": "22",
        "lastName": "33",
        "age": "44"
    }, {
        "_id": {
            "$oid": "531ca502e4b00180d17e5940"
        },
        "firstName": "ee",
        "lastName": "ee",
        "age": "ee"
    }, {
        "_id": {
            "$oid": "531ca514e4b0373ae7e62079"
        },
        "firstName": "miki",
        "lastName": "banali",
        "age": "444"
    }, {
        "_id": {
            "$oid": "531ca51de4b0373ae7e6209a"
        },
        "firstName": "miki",
        "lastName": "banali",
        "age": "44"
    }, {
        "_id": {
            "$oid": "531ca541e4b0373ae7e620f4"
        },
        "firstName": "moni",
        "lastName": "sipali"
    }, {
        "_id": {
            "$oid": "531ca58fe4b00180d17e5adb"
        },
        "firstName": "miki",
        "lastName": "beni",
        "age": "mefageret"
    }, {
        "_id": {
            "$oid": "531ca763e4b0373ae7e627aa"
        },
        "firstName": "ff",
        "lastName": "dd",
        "age": "gg"
    }, {
        "_id": {
            "$oid": "531ca788e4b0373ae7e627f9"
        },
        "firstName": "miki",
        "lastName": "shula",
        "age": "dibi"
    }, {
        "_id": {
            "$oid": "531caad7e4b0373ae7e631f1"
        },
        "firstName": "moshe",
        "lastName": "ben david",
        "age": "87"
    }, {
        "_id": {
            "$oid": "534051f0e4b098054f46ae9b"
        },
        "firstName": "eli",
        "lastName": "montgomri",
        "age": "bla bla"
    }];
    $httpBackend.whenGET('/mocks/userRepository').respond(users);
});

myMockApp.controller('myMockController', function($scope, $http) {
    $http.get('/mocks/userRepository').success(function(data) {
        $scope.users = data;
    });
});

myApp.controller('translateController', function($scope, $http, $window) {
    $http.get('../i18n/messages_' + $window.navigator.language + '.json')
        .success(function(data, status, headers, config) {
            $scope.messages = data;
        }).error(function(data, status, headers, config) {
            $window.alert(status);
        });
});

myApp.controller('logController', function($log) {
    var objGirl = {
        Name: "Molly",
        Hair: "Brunette",
        Eyes: "Brown",
        BestQualities: ["Smile", "Laugh"]
    };
    $log.error('Errores');
    $log.warn('Advertencias');
    $log.info('Información');
    $log.debug('Información de depuración');
    $log.debug(objGirl);
});

var myCookiesApp = angular.module('myCookiesApp', ['ngCookies']);

angular.module('myCookiesApp').controller('cookiesController',
    function($cookies, $window) {
        $cookies.NameOfMyCookie = "Setting a value";
        $window.alert($cookies.NameOfMyCookie);
    });

var myRouterApp = angular.module('myRouterApp', ['ngRoute']);

myRouterApp.config(function($routeProvider) {
    $routeProvider.when('/component1', {
        templateUrl: '../html/components/component1.html',
        controller: 'component1Controller'
    }).when('/component2', {
        templateUrl: '../html/components/component2.html',
        controller: 'component2Controller'
    }).when('/component3', {
        templateUrl: '../html/components/component3.html',
        controller: 'component3Controller'
    }).when('/component4', {
        template: '<h1>Component4 Page</h1><p>{{ message }}</p>',
        controller: 'component4Controller'
    }).otherwise({
        redirectTo: '/component1'
    });
});

myRouterApp.controller('component1Controller', function($scope) {
    $scope.message = 'Este es el componente 1';
});

myRouterApp.controller('component2Controller', function($scope) {
    $scope.message = 'Este es el componente 2';
});

myRouterApp.controller('component3Controller', function($scope) {
    $scope.message = 'Este es el componente 3';
});

myRouterApp.controller('component4Controller', function($scope) {
    $scope.message = 'Este es el componente 4';
});

var myStrictApp = angular.module('myStrictApp', []);

myStrictApp.controller('myStrictController', function($log) {
    // 'use strict';

    globalVar = true;
    $log.debug(globalVar);

    var octal_int = 036;
    $log.debug(octal_int);

    var a = 'Tesla';
    var evalA = eval('var a = "Nicola"; a;');
    $log.debug(a);
    $log.debug(evalA);

    var o = {
        p: 1,
        p: 2
    };
    $log.debug(o);
});
