const app = angular.module('myApp', []);

const messagecontroller = app.controller('MessageController', ['$http', function($http){
    let self = this; 
    
    let messageArray = [ ];
    
    self.addMessage = function(){
        console.log(self.newMessage);
        $http({
            method: 'POST',
            url: '/message',
            data: self.newMessage
        }).then(function(response){
            console.log('Post response', response);
            self.getMessages();
            self.newMessage = '';
        }).catch(function(error){
            console.log('Post failed', error);
        })
    }

    self.getMessages = function(){
        $http({
            method: 'GET',
            url: '/message'
        }).then(function(response){
            console.log('Get response', response.data);
            self.messageArray = response.data; 
        }).catch(function(error){
            console.log('Get failed like everything else in your life', error);
        })
    }

    self.getMessages(); 
}])