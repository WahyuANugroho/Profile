import { neon } from '@neondatabase/serverless';

// Database connection configuration
const sql = neon(import.meta.env.VITE_NEON_DATABASE_URL || 'your_neon_database_url_here');

// Database service class
class DatabaseService {
  constructor() {
    this.sql = sql;
  }

  // Test database connection
  async testConnection() {
    try {
      const result = await this.sql`SELECT NOW() as current_time`;
      console.log('Database connected successfully:', result[0]);
      return { success: true, data: result[0] };
    } catch (error) {
      console.error('Database connection failed:', error);
      return { success: false, error: error.message };
    }
  }

  // Get all education history
  async getEducationHistory() {
    try {
      const result = await this.sql`
        SELECT * FROM education_history 
        ORDER BY start_year DESC, end_year DESC
      `;
      return { success: true, data: result };
    } catch (error) {
      console.error('Error fetching education history:', error);
      return { success: false, error: error.message };
    }
  }

  // Get all skills
  async getSkills() {
    try {
      const result = await this.sql`
        SELECT * FROM skills 
        ORDER BY proficiency_level DESC, name ASC
      `;
      return { success: true, data: result };
    } catch (error) {
      console.error('Error fetching skills:', error);
      return { success: false, error: error.message };
    }
  }

  // Get all projects
  async getProjects() {
    try {
      const result = await this.sql`
        SELECT * FROM projects 
        ORDER BY created_at DESC
      `;
      return { success: true, data: result };
    } catch (error) {
      console.error('Error fetching projects:', error);
      return { success: false, error: error.message };
    }
  }

  // Add new education entry
  async addEducation(education) {
    try {
      const result = await this.sql`
        INSERT INTO education_history (institution, major, start_year, end_year, description)
        VALUES (${education.institution}, ${education.major}, ${education.start_year}, ${education.end_year}, ${education.description})
        RETURNING *
      `;
      return { success: true, data: result[0] };
    } catch (error) {
      console.error('Error adding education:', error);
      return { success: false, error: error.message };
    }
  }

  // Add new skill
  async addSkill(skill) {
    try {
      const result = await this.sql`
        INSERT INTO skills (name, proficiency_level, category, description)
        VALUES (${skill.name}, ${skill.proficiency_level}, ${skill.category}, ${skill.description})
        RETURNING *
      `;
      return { success: true, data: result[0] };
    } catch (error) {
      console.error('Error adding skill:', error);
      return { success: false, error: error.message };
    }
  }

  // Add new project
  async addProject(project) {
    try {
      const result = await this.sql`
        INSERT INTO projects (title, description, image_url, github_url, live_url, technologies)
        VALUES (${project.title}, ${project.description}, ${project.image_url}, ${project.github_url}, ${project.live_url}, ${project.technologies})
        RETURNING *
      `;
      return { success: true, data: result[0] };
    } catch (error) {
      console.error('Error adding project:', error);
      return { success: false, error: error.message };
    }
  }

  // Update education entry
  async updateEducation(id, education) {
    try {
      const result = await this.sql`
        UPDATE education_history 
        SET institution = ${education.institution}, 
            major = ${education.major}, 
            start_year = ${education.start_year}, 
            end_year = ${education.end_year}, 
            description = ${education.description}
        WHERE id = ${id}
        RETURNING *
      `;
      return { success: true, data: result[0] };
    } catch (error) {
      console.error('Error updating education:', error);
      return { success: false, error: error.message };
    }
  }

  // Update skill
  async updateSkill(id, skill) {
    try {
      const result = await this.sql`
        UPDATE skills 
        SET name = ${skill.name}, 
            proficiency_level = ${skill.proficiency_level}, 
            category = ${skill.category}, 
            description = ${skill.description}
        WHERE id = ${id}
        RETURNING *
      `;
      return { success: true, data: result[0] };
    } catch (error) {
      console.error('Error updating skill:', error);
      return { success: false, error: error.message };
    }
  }

  // Update project
  async updateProject(id, project) {
    try {
      const result = await this.sql`
        UPDATE projects 
        SET title = ${project.title}, 
            description = ${project.description}, 
            image_url = ${project.image_url}, 
            github_url = ${project.github_url}, 
            live_url = ${project.live_url}, 
            technologies = ${project.technologies}
        WHERE id = ${id}
        RETURNING *
      `;
      return { success: true, data: result[0] };
    } catch (error) {
      console.error('Error updating project:', error);
      return { success: false, error: error.message };
    }
  }

  // Delete education entry
  async deleteEducation(id) {
    try {
      await this.sql`DELETE FROM education_history WHERE id = ${id}`;
      return { success: true };
    } catch (error) {
      console.error('Error deleting education:', error);
      return { success: false, error: error.message };
    }
  }

  // Delete skill
  async deleteSkill(id) {
    try {
      await this.sql`DELETE FROM skills WHERE id = ${id}`;
      return { success: true };
    } catch (error) {
      console.error('Error deleting skill:', error);
      return { success: false, error: error.message };
    }
  }

  // Delete project
  async deleteProject(id) {
    try {
      await this.sql`DELETE FROM projects WHERE id = ${id}`;
      return { success: true };
    } catch (error) {
      console.error('Error deleting project:', error);
      return { success: false, error: error.message };
    }
  }
}

// Create and export a singleton instance
const databaseService = new DatabaseService();
export default databaseService; 