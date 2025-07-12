-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    technologies TEXT[],
    image_url VARCHAR(500),
    github_url VARCHAR(500),
    live_url VARCHAR(500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create skills table
CREATE TABLE IF NOT EXISTS skills (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    category VARCHAR(50) NOT NULL,
    proficiency INTEGER CHECK (proficiency >= 1 AND proficiency <= 5),
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

-- Insert sample projects
INSERT INTO projects (title, description, technologies, image_url, github_url, live_url) VALUES
('Portfolio Website', 'A modern portfolio website built with Vue.js and Tailwind CSS', ARRAY['Vue.js', 'Tailwind CSS', 'JavaScript'], '/images/project1.png', 'https://github.com/username/portfolio', 'https://portfolio.vercel.app'),
('E-commerce Platform', 'Full-stack e-commerce application with payment integration', ARRAY['React', 'Node.js', 'PostgreSQL', 'Stripe'], '/images/project2.png', 'https://github.com/username/ecommerce', 'https://ecommerce.vercel.app');

-- Insert sample education
INSERT INTO education (period, institution, major) VALUES
('2022 - Sekarang', 'Universitas Amikom Yogyakarta', 'S1 - Informatika'),
('2019 - 2022', 'SMK Negeri 2 Metro', 'Agribisnis Ternak Unggas');

-- Insert sample skills
INSERT INTO skills (name, category, proficiency) VALUES
('JavaScript', 'Programming Languages', 5),
('Vue.js', 'Frontend Frameworks', 4),
('React', 'Frontend Frameworks', 4),
('Node.js', 'Backend Technologies', 4),
('Express.js', 'Backend Technologies', 4),
('PostgreSQL', 'Databases', 3),
('MongoDB', 'Databases', 3),
('HTML/CSS', 'Web Technologies', 5),
('Tailwind CSS', 'CSS Frameworks', 4),
('Git', 'Version Control', 4);

-- Create indexes for better performance
CREATE INDEX idx_projects_created_at ON projects(created_at);
CREATE INDEX idx_skills_category ON skills(category);
CREATE INDEX idx_education_period ON education(period);
CREATE INDEX idx_contact_messages_created_at ON contact_messages(created_at); 