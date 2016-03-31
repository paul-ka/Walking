// TODO SERVICE
function historyService($http) {
    return {
        get : function() {
            return $http.get('/history');
        },
        update : function(id, data){
            return $http.put('/history/' + id, data);
        },
        create : function(data) {
            return $http.post('/history', data);
        },
        delete : function(id) {
            return $http.delete('/history/' + id);
        }
    }
};
