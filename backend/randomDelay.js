module.exports = (req, res, next) => {
  const MAX_DELAY = 3;
  const random = Math.random() * MAX_DELAY;

  setTimeout(next, random * 1000);
};
