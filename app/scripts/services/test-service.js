/**
 * Created by MSI on 2017/3/29.
 */
'use strict';

labsystem.service('TestSrv', ['$resource','$http', 'baseURL' ,function ($resource, $http, baseURL) {

  //get参考
  this.getItem = function(){
    return $resource(baseURL + '/facility/getAll');
  };

  //post参考
  this.addFacility = function(data){
    return $resource(baseURL + '/facility/add',null,{'add':{method: 'POST'}});
  };

  //上传参考
  this.upload = function(data){
    return $resource(baseURL + '/facility/upload',null,{'add':{method: 'POST',headers:{'Content-Type':undefined}}});
  };
}]);
