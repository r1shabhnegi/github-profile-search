const url = 'https://api.github.com/users/';

export const fetchDataFromApi = async (segment) => {
  try {
    const response = await fetch(`${url}${segment}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
