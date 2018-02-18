myapp.service('resultService',function(){
  var info;

        return {
            getInfo: getInfo,
            setInfo: setInfo
        };



        function getInfo() {
            return info;
        }

        function setInfo(value) {
            info = value;
        }

});
