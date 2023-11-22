// session.ts

export const setSessionData = (key: string, data: any) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error('Error saving session data:', error);
  }
};

export const getSessionData = (key: string) => {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Error getting session data:', error);
    return null;
  }
};

export const removeSessionData = (key: string) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error('Error removing session data:', error);
  }
};
