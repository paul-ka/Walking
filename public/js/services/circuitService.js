// TODO SERVICE
function circuitService($http) {
    return {
        get : function() {
            return $http.get('/');
        },
        update : function(id, data){
            return $http.put('/' + id, data);
        },
        create : function(data) {
            return $http.post('/', data);
        },
        delete : function(id) {
            return $http.delete('/' + id);
        }
    }
};
