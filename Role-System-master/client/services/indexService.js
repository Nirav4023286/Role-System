myapp.service('indexService',function(){
  var indexInfo;

        return {
            getIndexInfo: getIndexInfo,
            setIndexInfo: setIndexInfo
        };



        function getIndexInfo() {
            return indexInfo;
        }

        function setIndexInfo(value) {
            indexInfo= value;
        }

});
