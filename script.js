document.addEventListener("DOMContentLoaded", () => {
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  const body = document.body;

  // Cek preferensi dark mode yang tersimpan
  const isDarkMode = localStorage.getItem("dark-mode") === "true";

  // Terapkan dark mode saat halaman dimuat
  if (isDarkMode) {
    body.classList.add("dark-mode");
    updateDarkModeIcon();
  }

  // Event listener untuk toggle dark mode
  darkModeToggle.addEventListener("click", () => {
    // Toggle dark mode
    body.classList.toggle("dark-mode");
    
    // Simpan preferensi ke localStorage
    const isNowDarkMode = body.classList.contains("dark-mode");
    localStorage.setItem("dark-mode", isNowDarkMode);
    
    // Update icon
    updateDarkModeIcon();

    // Update styling untuk section materi
    updateMateriSectionStyle(isNowDarkMode);
  });

  // Fungsi untuk update icon dark mode
  function updateDarkModeIcon() {
    const isDark = body.classList.contains("dark-mode");
    darkModeToggle.innerHTML = isDark 
      ? `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
           <circle cx="12" cy="12" r="5"/>
           <line x1="12" y1="1" x2="12" y2="3"/>
           <line x1="12" y1="21" x2="12" y2="23"/>
           <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
           <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
           <line x1="1" y1="12" x2="3" y2="12"/>
           <line x1="21" y1="12" x2="23" y2="12"/>
           <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
           <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
         </svg>` 
      : `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
           <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
         </svg>`;
  }

  // Fungsi untuk update styling section materi saat dark mode
  function updateMateriSectionStyle(isDarkMode) {
    const materiCards = document.querySelectorAll('.materi-card');
    
    materiCards.forEach(card => {
      if (isDarkMode) {
        card.style.backgroundColor = '#16213e';
        card.style.color = '#e0e0e0';
        card.querySelector('.card-header').style.backgroundColor = '#0f3460';
      } else {
        card.style.backgroundColor = '#ffffff';
        card.style.color = '#000000';
        card.querySelector('.card-header').style.backgroundColor = '#3498db';
      }
    });
  }
});

// Kode interaktivitas materi cards dari versi sebelumnya
document.addEventListener('DOMContentLoaded', function() {
  const materiCards = document.querySelectorAll('.materi-card');
  
  materiCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.05)';
      this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
      this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    });
  });
});

// Fungsi untuk menampilkan detail teknologi
function showTechDetails(tech) {
  const techDetails = {
    'AI': `
      Kecerdasan Buatan (AI) adalah teknologi yang memungkinkan mesin untuk 
      belajar, berpikir, dan mengambil keputusan seperti manusia. 
      Aplikasinya meliputi pengenalan pola, prediksi, dan otomatisasi.
    `,
    'IoT': `
      Internet of Things (IoT) adalah jaringan perangkat fisik yang 
      terhubung dan saling bertukar data. Contohnya smart home, 
      perangkat kesehatan, dan sistem manajemen kota pintar.
    `,
    'Blockchain': `
      Blockchain adalah teknologi pencatatan transaksi terdesentralisasi 
      dan aman. Dikenal melalui cryptocurrency, tetapi memiliki potensi 
      luas dalam keamanan data dan transaksi digital. `,
    'Cloud Computing': `
      Komputasi Awan memungkinkan penyimpanan dan pengolahan data 
      melalui internet, memberikan fleksibilitas dan skalabilitas 
      yang tinggi bagi pengguna dan perusahaan.
    `,
    'Cybersecurity': `
      Keamanan siber melibatkan perlindungan sistem komputer 
      dan jaringan dari serangan digital, menjaga data dan 
      informasi tetap aman dari ancaman.
    `
  };

  alert(techDetails[tech]);
}

// Kode interaktivitas materi cards dari versi sebelumnya
document.addEventListener('DOMContentLoaded', function() {
  const materiCards = document.querySelectorAll('.materi-card');
  
  materiCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.05)';
      this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
      this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    });
  });
});

function openVideoModal(playlistId) {
  const videoModal = document.getElementById('videoModal');
  const videoContainer = document.getElementById('videoContainer');
  const videoDescription = document.getElementById('videoDescription');

  const playlistSources = {
    'html-basics': {
      playlistId: 'PLFIM0718LjIVuONHysfOK0ZtiqUWvrx4F', // Playlist HTML
      description: 'Playlist komprehensif untuk mempelajari HTML dari dasar hingga mahir. Cocok untuk pemula yang ingin memahami struktur dasar pembuatan halaman web.',
      title: 'Tutorial Lengkap HTML'
    },
    'javascript-basics': {
      playlistId: 'PLFIM0718LjIWXagluzROrA-iBY9eeUt4w', // Playlist JavaScript
      description: 'Pengenalan mendalam tentang JavaScript, bahasa pemrograman yang memungkinkan Anda membuat halaman web interaktif dan dinamis.',
      title: 'Master JavaScript'
    },
    'css-basics': {
      playlistId: 'PLFIM0718LjIUBrbm6Gdh6k7ZUvPIAZm7p', // Playlist CSS
      description: 'Pelajari CSS secara komprehensif untuk mendesain dan memperindah tampilan halaman web Anda dengan berbagai teknik styling.',
      title: 'Panduan Lengkap CSS'
    }
  };

  const selectedPlaylist = playlistSources[playlistId];

  videoContainer.innerHTML = `
    <iframe 
      width="100%" 
      height="450" 
      src="https://www.youtube.com/embed/videoseries?list=${selectedPlaylist.playlistId}" 
      frameborder="0" 
      allow="autoplay; encrypted-media" 
      allowfullscreen>
    </iframe>
  `;

  videoDescription.innerHTML = `
    <h3>${selectedPlaylist.title}</h3>
    <p>${selectedPlaylist.description}</p>
  `;
  
  videoModal.style.display = "block";
}

// Fungsi untuk menutup video modal
function closeVideoModal() {
  const videoModal = document.getElementById('videoModal');
  videoModal.style.display = "none";
  const videoContainer = document.getElementById('videoContainer');
  videoContainer.innerHTML = ''; // Menghapus video saat modal ditutup
}

document.addEventListener('DOMContentLoaded', function() {
  // Navbar Active State
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (window.scrollY >= sectionTop - 100) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').substring(1) === current) {
        link.classList.add('active');
      }
    });
  });

  // Set initial active link
  navLinks[0].classList.add('active');
});

document.addEventListener('DOMContentLoaded', function() {
  // Existing code...

  // Navbar Shadow on Scroll
  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
      navbar.style.boxShadow = 'none';
    }
  });
});