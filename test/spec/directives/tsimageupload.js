'use strict';

describe('Directive: tsImageUpload', function() {

    // load the directive's module
    beforeEach(module('adminApp'));

    var element,
        scope;

    beforeEach(inject(function($rootScope) {
        scope = $rootScope.$new();
    }));

    // it('should make hidden element visible', inject(function($compile) {
    //     element = angular.element(
    //         '<ts-image-upload></ts-image-upload>');
    //     element = $compile(element)(scope);
    //     // expect(element.text()).toBe('this is the tsImageUpload directive');
    // }));
});