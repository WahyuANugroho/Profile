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
    { name: 'PostgreSQL', level: 'Menengah' },
    { name: 'Git & GitHub', level: 'Mahir' },
    { name: 'HTML5 & CSS3', level: 'Mahir' },
    { name: 'React', level: 'Menengah' },
    { name: 'Firebase', level: 'Menengah' },
    { name: 'Android Development', level: 'Menengah' }
];
const projects = [
    {
        title: 'Website Toko Online',
        image: 'https://i.pinimg.com/736x/ff/c8/a2/ffc8a2695f83e2ead09fef74c0dc1065.jpg',
        description: 'Platform e-commerce dengan fitur keranjang belanja.',
        tech: ['Vue.js', 'Express.js', 'PostgreSQL'],
        link: '#'
    },
    {
        title: 'Aplikasi Manajemen Tugas',
        image: 'https://i.pinimg.com/736x/dc/3c/d2/dc3cd2a0ad5375a59f27007fcefb6a7f.jpg',
        description: 'Aplikasi untuk melacak progres tugas harian.',
        tech: ['React', 'Firebase'],
        link: '#'
    }
];
module.exports = { educationHistory, skills, projects };