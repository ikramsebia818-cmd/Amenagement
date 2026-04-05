let projects = [];

const getProjects = (req, res) => {
  res.json(projects);
};

const createProject = (req, res) => {
  console.log("DATA:", req.body);

  projects.push(req.body);

  res.json({ message: "Saved" });
};

module.exports = {
  getProjects,
  createProject
};