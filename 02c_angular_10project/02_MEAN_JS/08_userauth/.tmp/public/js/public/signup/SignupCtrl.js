angular.module('SignupMod').controller('SignupCtrl', ['$scope','$http',function($scope,$http){
    console.log('Singup Controller initialize...');
    
    $scope.runSignup = function(){
        console.log('Signing Up ' + $scope.name);
        
        // Submit to Sails Server
        $http.post('/signup', {
            name: $scope.name,
            email: $scope.email,
            password: $scope.password
        })
        .then(function onSuccess(response){
            window.location =  '/user'
        })
        .catch(function onError(err){
            console.log('Error: ' +err);
        })
        /*.finally(function either(){
            
        })*/ 
    }
}])
 