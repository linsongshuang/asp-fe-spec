'use strict';

module.exports = {
  parserPreset: 'conventional-changelog-conventionalcommits',
  rules: {
    'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'style', 'refactor', 'perf', 'test', 'chore', 'revert', 'build', 'ci', 'docs', 'style', 'refactor', 'perf', 'test', 'chore', 'revert', 'build', 'ci', 'docs', 'style', 'refactor', 'perf', 'test', 'chore', 'revert', 'build', 'ci']],
    'type-case': [0],
    'type-empty': [0],
    'scope-empty': [0],
    'scope-case': [0],
    'subject-full-stop': [0],
    'subject-case': [0],
    'subject-empty': [0],
  }
}