// backend/data.js
const educationHistory = [
    { id: 1, period: '2022 - Sekarang', institution: 'Universitas Amikom Yogyakarta', major: 'S1 - Informatika' },
    { id: 2, period: '2019 - 2022', institution: 'SMK Negeri 2 Metro', major: 'Agribisnis Ternak Unggas' }
];

const skills = [
    { name: 'Vue.js', level: 'Mahir' },
    { name: 'JavaScript', level: 'Mahir' },
    { name: 'Tailwind CSS', level: 'Mahir' },
    { name: 'Node.js', level: 'Menengah' },
    { name: 'Express.js', level: 'Menengah' },
    { name: 'PostgreSQL', level: 'Menengah' }
];

const projects = [
    {
        title: 'Website Toko Online',
        image: '/images/project1.png', // Path ini akan digunakan oleh server statis Express
        description: 'Platform e-commerce dengan fitur keranjang belanja, dibangun untuk skalabilitas dan performa tinggi.',
        tech: ['Vue.js', 'Laravel', 'Mysql'],
        link: '#'
    },
    {
        title: 'Aplikasi Manajemen Tugas',
        image: '/images/project2.png',
        description: 'Aplikasi untuk melacak progres tugas harian dengan antarmuka yang intuitif dan real-time update.',
        tech: ['React', 'Firebase'],
        link: '#'
    }
];

module.exports = { educationHistory, skills, projects };