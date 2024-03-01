import { USERS_DATA } from "../constants/index.js";

export const getUsers = (req, res) => {
  // Destructure query parameters with default values
  const {
    name = "",
    age,
    email = "",
    dob,
    page = 1,
    pageSize = 10,
    sortBy = "id",
    sortOrder = "asc",
  } = req.query;

  // Filter users based on query parameters
  let filteredUsers = USERS_DATA.filter(
    (user) =>
      user.name.toLowerCase().includes(name.toLowerCase()) &&
      (age
        ? typeof age === "string"
          ? user.age === parseInt(age)
          : user.age >= parseInt(age[0]) && user.age <= parseInt(age[1])
        : true) &&
      user.email.toLowerCase().includes(email.toLowerCase()) &&
      (dob
        ? typeof dob === "string"
          ? user.dob === dob
          : user.dob >= dob[0] && user.dob <= dob[1]
        : true)
  );

  // Sort users based on query parameters
  filteredUsers.sort((a, b) => {
    const valA = a[sortBy];
    const valB = b[sortBy];
    if (valA < valB) return sortOrder === "asc" ? -1 : 1;
    if (valA > valB) return sortOrder === "asc" ? 1 : -1;
    return 0;
  });

  // Paginate users based on query parameters
  const startIndex = (page - 1) * pageSize;
  const endIndex = page * pageSize;
  const paginatedUsers = filteredUsers.slice(startIndex, endIndex);

  // Return response
  res.json({
    data: paginatedUsers,
    page: parseInt(page),
    pageSize: parseInt(pageSize),
    totalRecords: filteredUsers.length,
    totalPages: Math.ceil(filteredUsers.length / pageSize),
  });
};
