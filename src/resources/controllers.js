const welcome = async (req, res) => {
  try {
    const response = { message: "Welcome to the Hatchways Challenge API" };
    res.status(200).send(response);
  } catch (error) {
    res.status(400).send(error);
  }
};

const ping = async (req, res) => {
  try {
    const response = { success: true };
    res.status(200).send(response);
  } catch (error) {
    res.status(400).send(error);
  }
};

const posts = async (req, res) => {
  try {
    const tag = req.query.tag;
    if (!tag) throw new Error("Tags parameter is required");
    else const tags = tag.split(",")
    const sortBy = req.query.sortBy || "id";
    const direction = req.query.direction || "asc";
    if (direction !== "asc" && direction !== "desc")
      throw new Error("sortBy parameter must equal 'asc' or 'desc'");

    console.log(tags)
    console.log(sortBy)
    console.log(direction)

    // for each tag make a separate query
    const endpoint = "http://hatchways.io/api/assessment/blog/posts?";
    
    const posts = [];
    tags.forEach(tag => {
      console.log(endpoint+tag)
      const response = await fetch(endpoint + tag)
      const data = await response.json()
      posts.push(data)
    })
    res.status(200).send({ hello: "world" });
  } catch (error) {
    res.status(400).send(error);
  }
};

const controllers = { welcome, ping, posts };

export default controllers;
