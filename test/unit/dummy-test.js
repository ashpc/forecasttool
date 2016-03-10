var assert = require('assert');


describe('A dumb test to test test',function(){
	
	it('should return 2 when given 1 and 1',function(done){
		var sum = add(1,1);

		assert(sum == 2);
		done();

	});
});



function add(a,b){
	var sum =0;
	sum = a-b;
	return sum;
}