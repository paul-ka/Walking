// TODO SERVICE
function walkersService($http) {
    return {
        get : function() {
            return $http.get('/walker');
        },
        update : function(id, data){
            return $http.put('/walker/' + id, data);
        },
        create : function(data) {
            return $http.post('/walker', data);
        },
        delete : function(id) {
            return $http.delete('/walker/' + id);
        }
    }
};
