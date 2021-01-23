 //class = 'ordinary'

const head = document.getElementById('hi');
//const head2 = document.getElementsByTagName('h2');
//const head2 = document.getElementsByClassName('h2-class')[0]
//const head2 = document.querySelector('.h2-class') // ' ' - теги, '. ' -класс, '#' - id
const head2 = document.querySelector('h2');
const h2list = document.querySelectorAll('h2');
//console.log(h2list);
const head3 = h2list[h2list.length - 1];

//console.dir(head3);

setTimeout(()=>{
addStylesTo(head, 'JavaScript');
}, 1500)

setTimeout(()=>{
addStylesTo(head2,'JS', 'orange','15px');
}, 1500)

const link = head3.querySelector('a');
link.addEventListener('click',() => {
	event.preventDefault();
	console.log('Click on link', event.target.getAttribute('href'))
	const url = event.target.getAttribute('href')
	window.location = url;
});
setTimeout(()=>{
addStylesTo(link,'джава', 'blue','2rem'); // head3.querySelector('a');
}, 1500)


function addStylesTo (node, text, color = 'red',fontSize) {
node.textContent = text;
node.style.color = color;
node.style.textAlign = "center";
node.style.backgroundColor = "black";
node.style.padding= "5px";
node.style.display = 'block';
node.style.width = '100%';
if(fontSize){ // false: '',undefined,null,0,false
	node.style.fontSize = fontSize;
}
}


head.onclick = () =>{
	 if(head.style.color == 'red')
	 {
		head.style.color = '#001';
		head.style.backgroundColor = "white";
	 }
	 else
	 {
		 head.style.color = 'red';
		head.style.backgroundColor = "black";
	 }
}


head2.addEventListener('dblclick', ()=>{
	 if(head2.style.color == 'red')
	 {
		head2.style.color = '#001';
		head2.style.backgroundColor = "white";
	 }
	 else
	 {
		 head2.style.color = 'red';
		head2.style.backgroundColor = "black";
	 }
})
	
	
	
	
	
	
	
	