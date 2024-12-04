window.onload = function() {
	const preloader = document.getElementById('preloader');
	const mainContent = document.getElementById('main-content');
  
	setTimeout(() => {
	  preloader.classList.add('hidden');
	  mainContent.classList.remove('hidden');
	  mainContent.classList.add('visible');
	}, 2000);
  };
  
