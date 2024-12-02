window.onload = function() {
	const preloader = document.getElementById('preloader');
	const mainContent = document.getElementById('main-content');
  
	// Tampilkan preloader selama 2 detik
	setTimeout(() => {
	  // Hilangkan preloader
	  preloader.classList.add('hidden');
  
	  // Tampilkan halaman utama
	  mainContent.classList.remove('hidden');
	  mainContent.classList.add('visible');
	}, 2000); // Durasi preloader dalam milidetik
  };
  