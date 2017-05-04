console.log('User 1 made a request');
setTimeout(callback1,5000);
console.log('User 2 made a request');
setTimeout(callback1,5000);
console.log('User 3 made a request');
setTimeout(callback1,5000);

function callback1()
{
	console.log('Queried the db and delivered data in 5 seconds');
}