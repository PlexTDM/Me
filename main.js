window.onload = ()=>{
	projectDiv.style.display = 'none';
	aboutsDiv.style.display = 'none';
}

const homeDiv = document.getElementById('home');
const projectDiv = document.getElementById('projects');
const aboutsDiv = document.getElementById('abouts');

const homeLink = document.getElementById('homeLink');
const projectsLink = document.getElementById('projectsLink');
const aboutsLink = document.getElementById('aboutsLink');

projectsLink.onclick = ()=>{
	homeDiv.style.display = 'none';
	projectDiv.style.display = 'flex';
	aboutsDiv.style.display = 'none'
}
aboutsLink.onclick = ()=>{
	homeDiv.style.display = 'none';
	projectDiv.style.display = 'none';
	aboutsDiv.style.display = 'flex'
}
homeLink.onclick = ()=>{
	homeDiv.style.display = 'flex';
	projectDiv.style.display = 'none';
	aboutsDiv.style.display = 'none';
}