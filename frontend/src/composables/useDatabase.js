import { ref, reactive } from 'vue';
import databaseService from '../services/database.js';

export function useDatabase() {
  // Reactive state
  const isLoading = ref(false);
  const error = ref(null);
  const connectionStatus = ref('disconnected');

  // Data stores
  const educationHistory = ref([]);
  const skills = ref([]);
  const projects = ref([]);

  // Test database connection
  const testConnection = async () => {
    isLoading.value = true;
    error.value = null;
    connectionStatus.value = 'connecting';

    try {
      const result = await databaseService.testConnection();
      if (result.success) {
        connectionStatus.value = 'connected';
        console.log('Database connection successful');
      } else {
        connectionStatus.value = 'error';
        error.value = result.error;
        console.error('Database connection failed:', result.error);
      }
    } catch (err) {
      connectionStatus.value = 'error';
      error.value = err.message;
      console.error('Database connection error:', err);
    } finally {
      isLoading.value = false;
    }
  };

  // Load education history
  const loadEducationHistory = async () => {
    isLoading.value = true;
    error.value = null;

    try {
      const result = await databaseService.getEducationHistory();
      if (result.success) {
        educationHistory.value = result.data;
      } else {
        error.value = result.error;
      }
    } catch (err) {
      error.value = err.message;
    } finally {
      isLoading.value = false;
    }
  };

  // Load skills
  const loadSkills = async () => {
    isLoading.value = true;
    error.value = null;

    try {
      const result = await databaseService.getSkills();
      if (result.success) {
        skills.value = result.data;
      } else {
        error.value = result.error;
      }
    } catch (err) {
      error.value = err.message;
    } finally {
      isLoading.value = false;
    }
  };

  // Load projects
  const loadProjects = async () => {
    isLoading.value = true;
    error.value = null;

    try {
      const result = await databaseService.getProjects();
      if (result.success) {
        projects.value = result.data;
      } else {
        error.value = result.error;
      }
    } catch (err) {
      error.value = err.message;
    } finally {
      isLoading.value = false;
    }
  };

  // Add education entry
  const addEducation = async (education) => {
    isLoading.value = true;
    error.value = null;

    try {
      const result = await databaseService.addEducation(education);
      if (result.success) {
        educationHistory.value.unshift(result.data);
        return { success: true, data: result.data };
      } else {
        error.value = result.error;
        return { success: false, error: result.error };
      }
    } catch (err) {
      error.value = err.message;
      return { success: false, error: err.message };
    } finally {
      isLoading.value = false;
    }
  };

  // Add skill
  const addSkill = async (skill) => {
    isLoading.value = true;
    error.value = null;

    try {
      const result = await databaseService.addSkill(skill);
      if (result.success) {
        skills.value.push(result.data);
        return { success: true, data: result.data };
      } else {
        error.value = result.error;
        return { success: false, error: result.error };
      }
    } catch (err) {
      error.value = err.message;
      return { success: false, error: err.message };
    } finally {
      isLoading.value = false;
    }
  };

  // Add project
  const addProject = async (project) => {
    isLoading.value = true;
    error.value = null;

    try {
      const result = await databaseService.addProject(project);
      if (result.success) {
        projects.value.unshift(result.data);
        return { success: true, data: result.data };
      } else {
        error.value = result.error;
        return { success: false, error: result.error };
      }
    } catch (err) {
      error.value = err.message;
      return { success: false, error: err.message };
    } finally {
      isLoading.value = false;
    }
  };

  // Update education entry
  const updateEducation = async (id, education) => {
    isLoading.value = true;
    error.value = null;

    try {
      const result = await databaseService.updateEducation(id, education);
      if (result.success) {
        const index = educationHistory.value.findIndex(item => item.id === id);
        if (index !== -1) {
          educationHistory.value[index] = result.data;
        }
        return { success: true, data: result.data };
      } else {
        error.value = result.error;
        return { success: false, error: result.error };
      }
    } catch (err) {
      error.value = err.message;
      return { success: false, error: err.message };
    } finally {
      isLoading.value = false;
    }
  };

  // Update skill
  const updateSkill = async (id, skill) => {
    isLoading.value = true;
    error.value = null;

    try {
      const result = await databaseService.updateSkill(id, skill);
      if (result.success) {
        const index = skills.value.findIndex(item => item.id === id);
        if (index !== -1) {
          skills.value[index] = result.data;
        }
        return { success: true, data: result.data };
      } else {
        error.value = result.error;
        return { success: false, error: result.error };
      }
    } catch (err) {
      error.value = err.message;
      return { success: false, error: err.message };
    } finally {
      isLoading.value = false;
    }
  };

  // Update project
  const updateProject = async (id, project) => {
    isLoading.value = true;
    error.value = null;

    try {
      const result = await databaseService.updateProject(id, project);
      if (result.success) {
        const index = projects.value.findIndex(item => item.id === id);
        if (index !== -1) {
          projects.value[index] = result.data;
        }
        return { success: true, data: result.data };
      } else {
        error.value = result.error;
        return { success: false, error: result.error };
      }
    } catch (err) {
      error.value = err.message;
      return { success: false, error: err.message };
    } finally {
      isLoading.value = false;
    }
  };

  // Delete education entry
  const deleteEducation = async (id) => {
    isLoading.value = true;
    error.value = null;

    try {
      const result = await databaseService.deleteEducation(id);
      if (result.success) {
        educationHistory.value = educationHistory.value.filter(item => item.id !== id);
        return { success: true };
      } else {
        error.value = result.error;
        return { success: false, error: result.error };
      }
    } catch (err) {
      error.value = err.message;
      return { success: false, error: err.message };
    } finally {
      isLoading.value = false;
    }
  };

  // Delete skill
  const deleteSkill = async (id) => {
    isLoading.value = true;
    error.value = null;

    try {
      const result = await databaseService.deleteSkill(id);
      if (result.success) {
        skills.value = skills.value.filter(item => item.id !== id);
        return { success: true };
      } else {
        error.value = result.error;
        return { success: false, error: result.error };
      }
    } catch (err) {
      error.value = err.message;
      return { success: false, error: err.message };
    } finally {
      isLoading.value = false;
    }
  };

  // Delete project
  const deleteProject = async (id) => {
    isLoading.value = true;
    error.value = null;

    try {
      const result = await databaseService.deleteProject(id);
      if (result.success) {
        projects.value = projects.value.filter(item => item.id !== id);
        return { success: true };
      } else {
        error.value = result.error;
        return { success: false, error: result.error };
      }
    } catch (err) {
      error.value = err.message;
      return { success: false, error: err.message };
    } finally {
      isLoading.value = false;
    }
  };

  // Load all data
  const loadAllData = async () => {
    await Promise.all([
      loadEducationHistory(),
      loadSkills(),
      loadProjects()
    ]);
  };

  // Clear error
  const clearError = () => {
    error.value = null;
  };

  return {
    // State
    isLoading,
    error,
    connectionStatus,
    educationHistory,
    skills,
    projects,

    // Actions
    testConnection,
    loadEducationHistory,
    loadSkills,
    loadProjects,
    addEducation,
    addSkill,
    addProject,
    updateEducation,
    updateSkill,
    updateProject,
    deleteEducation,
    deleteSkill,
    deleteProject,
    loadAllData,
    clearError
  };
} 