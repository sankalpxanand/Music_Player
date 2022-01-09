var countInterval;

function startCounter(){
	var number=parseInt(document.getElementById('number').value);
	var current=document.querySelector('.counter .current');
    var next=document.querySelector('.counter .next');
    var count=0;

    resetNumbers(current,next);
    clearInterval(countInterval);

    countInterval=setInterval(function(){
    	if(count===number){
    		clearInterval(countInterval);
    		alert('Counter has stopped');
    		return;
    	}
    	increaseCount(current,next);
    	count++;
    },1000);

}


function resetNumbers(current,next,end){
	curent.innerText=0;
	next.innerText=1;
}

function increaseCount(current,next){
	next.classList.add('animate');

	setTimeout(function(){
		current.innerText=next.innerText;
		next.classList.remove('animate');
		next.innerText=parseInt(next.innerText)+1;
	},500);
}