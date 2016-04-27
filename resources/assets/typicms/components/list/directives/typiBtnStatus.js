angular.module('typicms').directive('typiBtnStatus', function() {
    return {
        scope: {
            model: '=',
            action: '&'
        },
        template: '<div class="btn btn-xs btn-link" ng-click="action()">' +
                '<span class="fa switch" ng-class="model.status[TypiCMS.content_locale] == \'1\' ? \'fa-toggle-on\' : \'fa-toggle-off\'"></span>' +
                '<span class="sr-only" ng-show="model.status[TypiCMS.content_locale] == \'1\'" translate>Online</span>' +
                '<span class="sr-only" ng-hide="model.status[TypiCMS.content_locale] == \'0\'" translate>Offline</span>' +
            '</div>'
    };
});
