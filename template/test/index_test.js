let moduleRoot = '../es6';
if (process.env.TEST_RELEASE) {
  moduleRoot = '../dist';
}

const {{codeName}} = require(moduleRoot);

describe('{{codeName}}', () => {
  it('works', async () => {
    const result = await {{codeName}}();
    result.should.be.equal(42);
  });
});

