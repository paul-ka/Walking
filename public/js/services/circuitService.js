// TODO SERVICE
function circuitService($http) {
    return {
        get : function() {
            return $http.get('/circuit');
        },
        update : function(id, data){
            return $http.put('/circuit' + id, data);
        },
        create : function(data) {
            return $http.post('/circuit', data);
        },
        delete : function(id) {
            return $http.delete('/circuit' + id);
        }
    }
};
