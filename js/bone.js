function Player(options)
{
	var root = options.root;
	var parametrs = options.params;

	function getElem()
	{
		if(parametrs){able();console.info('able')}
		else{disable();console.info('disable')};
	}
	function disable()
	{
		root.classList.remove('able');
		root.classList.add('disable');
				if(getComputedStyle(root).left=='25px')
		{
			console.log('lft = '+ getComputedStyle(root).left);
			root.style.left = '-250px';
		}
		if(getComputedStyle(root).right=='25px')
		{
			console.log('right = '+getComputedStyle(root).right);
			root.style.right = '-250px';
		}
	}
	function able()
	{
		root.classList.remove('disable');
		root.classList.add('able');
		if(getComputedStyle(root).left=='-250px')
		{
			console.log('lft = '+ getComputedStyle(root).left);
			root.style.left = '25px';
		}
		if(getComputedStyle(root).right=='-250px')
		{
			console.log('right = '+getComputedStyle(root).right);
			root.style.right = '25px';
		}
	}

	this.getElem = getElem;
}