'use strict';

const aspCommitlint = require('..');
const assert = require('assert').strict;

assert.strictEqual(aspCommitlint(), 'Hello from aspCommitlint');
console.info('aspCommitlint tests passed');
