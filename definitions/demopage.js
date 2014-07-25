/* jslint node: true */
/* global Dictionary, English, casper, localStorage, sessionStorage*/
'use strict';

module.exports.init = function() {
    var dictionary = new Dictionary()
        .define('LOCALE', /(fr|es|ie)/)
        .define('NUM', /(\d+)/);

    var library = English.library(dictionary)

        .when('I open the Demo Page', function() {
            casper.open('http://demo.classowl.com/');
        })

        .then('clear and reload',function(){
            casper.evaluate(function() {
                localStorage.clear();
                sessionStorage.clear();
            });
            casper.open('http://demo.classowl.com/');
        })

        .then('redirected to Planner', function () {
          casper.test.assertUrlMatch('/assignments/my-planner');
        })

        .then('redirected to Walkthrough', function () {
          casper.test.assertUrlMatch('/walkthrough');
        })

        .then('the Walkthrough Modal exists and is visible', function() {
            casper.test.assertExists('#modal_walkthrough');   
            casper.test.assertVisible('#modal_walkthrough');       
        })

        .then('click the Start button', function() {
          casper.click('#modal_walkthrough button');
        })
        
        .then('the Demo Prompt exists', function() {
            casper.test.assertExists('#demo_contact_prompt');            
        })

        .then('the header is $header', function(header) {
            casper.test.assertSelectorHasText('#header h1', header);           
        });
         

    return library;
};