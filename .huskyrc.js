const joinTasks = (taskArr) => taskArr.join(' && ');
const tasks = joinTasks(['yarn prettier', 'yarn lint']);
const hooks = {
  preCommit: 'pre-commit',
  prePush: 'pre-push',
};

const husky = {
  hooks: {
    [hooks.preCommit]: tasks,
    [hooks.prePush]: tasks,
  },
};

module.exports = husky;
