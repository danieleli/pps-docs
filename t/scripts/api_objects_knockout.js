window.loadKnockout = function () {

    function ApisViewModel() {
        var self = this;

        self.apiDeclarations = _.sortBy(window.apiMetaData, function (apiDeclaration) {
            return apiDeclaration.resourcePath;
        });

        _.each(self.apiDeclarations, function (apiDeclares) {
            apiDeclares.apis = _.sortBy(apiDeclares.apis, function (api) {
                return api.operations[0].httpMethod;
            });
        });
        _.each(self.apiDeclarations, function (apiDeclares) {
            
            var models = _.values(apiDeclares.models);
            apiDeclares.models = _.map(models, function (m) {
                
                var propName = _.keys(m.properties);
                var propValues = _.values(m.properties);
                var items = [];
                for (var i = 0; i < propName.length; i++) {
                    items.push({ name: propName[i], value: propValues[i] });
                }
                m.properties = items;
                return m;
            });
        });
    }

    var vm = new ApisViewModel();

    // Activates knockout.js
    ko.applyBindings(vm);

};