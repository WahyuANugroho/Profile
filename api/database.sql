-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    image VARCHAR(255),
    description TEXT,
    tech TEXT[],
    link VARCHAR(500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create skills table
CREATE TABLE IF NOT EXISTS skills (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    level VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create education table
CREATE TABLE IF NOT EXISTS education (
    id SERIAL PRIMARY KEY,
    period VARCHAR(100) NOT NULL,
    institution VARCHAR(255) NOT NULL,
    major VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create contact_messages table
CREATE TABLE IF NOT EXISTS contact_messages (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample projects (exactly matching frontend data.js)
INSERT INTO projects (title, image, description, tech, link) VALUES
('Lucien Avenue', 'project1.png', 'Platform yang menjual sepatu branded dengan fitur keranjang belanja, dibangun untuk skalabilitas dan performa tinggi.', ARRAY['Vue.js', 'Laravel', 'PostgreSQL'], 'https://github.com/GITikhsan/LUCIEN-AVENUE-FRONTEND'),
('Elysia Assistant', 'project2.png', 'Chatbot asisten yang terintegrasi dengan model AI secara lokal.', ARRAY['Kotlin', 'Llama', 'ONNX'], 'https://github.com/WahyuANugroho/Elysia_Assistant');

-- Insert sample education (exactly matching frontend data.js)
INSERT INTO education (period, institution, major) VALUES
('2022 - Sekarang', 'Universitas Amikom Yogyakarta', 'S1 - Informatika'),
('2019 - 2022', 'SMK Negeri 2 Metro', 'Agribisnis Ternak Unggas');

-- Insert sample skills (exactly matching frontend data.js)
INSERT INTO skills (name, level) VALUES
('Vue.js', 'Mahir'),
('JavaScript', 'Mahir'),
('Tailwind CSS', 'Mahir'),
('Node.js', 'Menengah'),
('Express.js', 'Menengah'),
('PostgreSQL', 'Menengah');

-- Create indexes for better performance (if not exists)
CREATE INDEX IF NOT EXISTS idx_projects_created_at ON projects(created_at);
CREATE INDEX IF NOT EXISTS idx_skills_name ON skills(name);
CREATE INDEX IF NOT EXISTS idx_education_period ON education(period);
CREATE INDEX IF NOT EXISTS idx_contact_messages_created_at ON contact_messages(created_at); 