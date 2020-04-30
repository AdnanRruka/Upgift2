body = (req, res) => {
  console.log(res.body)
  res.json(res.body);
};

module.exports = {
  body: body
} 