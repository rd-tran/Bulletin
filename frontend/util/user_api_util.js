export const fetchUsers = (username) => {
  return $.ajax({
    url: '/api/users',
    method: 'GET',
    data: { username }
  });
};

export const fetchUser = (username) => {
  return $.ajax({
    url: `/api/users/${username}`,
    method: 'GET'
  });
};

export const updateUser = (user) => {
  return $.ajax({
    url: `/api/users/${user.id}`,
    method: 'PATCH',
    data: { user }
  });
};