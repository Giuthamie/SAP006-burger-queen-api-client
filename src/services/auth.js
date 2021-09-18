export const createUser = (values) => {
  return fetch('https://lab-api-bq.herokuapp.com/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: values.name,
      email: values.email,
      password: values.password,
      role: values.role,
      restaurant: 'Fight Club Burger',
    })
  });
};

export const loginUser = (values) => {
  return fetch('https://lab-api-bq.herokuapp.com/auth', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: values.email,
      password: values.password,
    })
  });
};

