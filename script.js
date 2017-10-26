var app= angular.module('chartapp',['chart.js'])

    .controller('ChartController',function($scope, $http,$interval){
        

        $scope.refresh = function(){

            $http.get('https://api.coinmarketcap.com/v1/ticker/?limit=10').then(
                
                            function(response){
                                $scope.labels = [];
                                $scope.data = [];
                
                                var data = response.data;
                                data.forEach(function(obj){
                                   
                                    $scope.labels.push(obj.name);
                                    $scope.data.push(obj.price_usd);
                                });
                            
                                
                            }
                        )
                        
        }
         
        $scope.refresh();
        $interval($scope.refresh, 300000);

    });