let moduleRoot = '../es6';
if (process.env.TEST_RELEASE) {
  moduleRoot = '../dist';
}

const example = require(moduleRoot);

describe('{{basename}}', () => {
  it('works', async () => {
    const result = await example();
    result.should.be.equal(42);
  });
});

