// TODO SERVICE
function walkersService($http) {
    return {
        get : function() {
            return $http.get('/walkers');
        },
        update : function(id, data){
            return $http.put('/walkers/' + id, data);
        },
        create : function(data) {
            return $http.post('/walkers', data);
        },
        delete : function(id) {
            return $http.delete('/walkers/' + id);
        }
    }
};
