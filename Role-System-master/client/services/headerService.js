myapp.service('headerService',function(){
  var Headerinfo;

        return {
            getHeaderInfo: getHeaderInfo,
            setHeaderInfo: setHeaderInfo
        };



        function getHeaderInfo() {
            return Headerinfo;
        }

        function setHeaderInfo(value) {
            Headerinfo = value;
        }

});
