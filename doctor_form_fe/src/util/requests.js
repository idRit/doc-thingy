export const createDetails = async (payload) => {
  const response = await fetch('http://localhost:3000/api/v1/user/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  const data = await response.json();
  return data;
};

export const updateDetails = async (section = 'general', userId, payload) => {
  const response = await fetch(`http://localhost:3000/api/v1/user/${section}/${userId}/edit-profile`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  const data = await response.json();
  return data;
};

export const getList = async (name = 'all') => {
  const response = await fetch(`http://localhost:3000/api/v1/user/search/${name}`);
  const data = await response.json();
  return data;
};

export const getOne = async (userId) => {
  const response = await fetch(`http://localhost:3000/api/v1/user/${userId}`);
  const data = await response.json();
  return data;
}
