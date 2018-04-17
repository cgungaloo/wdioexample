var assert = require('assert');
describe('my webdriverio tests', function(){
	it('Github test',function() {
 		browser.url('http://www.google.com')
 		const title = browser.getTitle();
		
		browser.click('.gb_P')
		const getgmail =browser.getText('a.gmail-nav__nav-link.gmail-nav__nav-link__for-work')
		
 		console.log('Title for test2 was: ' + title);
		console.log('Text in gmail link is ' + getgmail);
 		assert(title === 'Google');
 	});
});
