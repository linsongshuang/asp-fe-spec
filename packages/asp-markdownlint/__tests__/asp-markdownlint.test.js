'use strict';

const aspMarkdownlint = require('..');
const assert = require('assert').strict;

assert.strictEqual(aspMarkdownlint(), 'Hello from aspMarkdownlint');
console.info('aspMarkdownlint tests passed');
