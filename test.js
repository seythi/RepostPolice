var test = false;

testo(console.log('foo'));

function testo(cb)
{
	if(test)
	{
		cb;
	}
	else
	{
		console.log('alt')
	}
}