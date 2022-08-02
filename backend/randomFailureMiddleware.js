module.exports = (failRate) => {
  if (failRate < 0 || failRate > 1) {
    throw new Error("FailRate should be a number between 0 and 1");
  } else {
    console.warn(`Failure rate has been set to ${failRate * 100}%`);
  }

  return (req, res, next) => {
    const random = Math.random();

    if (random < failRate) {
      res.sendStatus(500);
    } else {
      next();
    }
  };
};
